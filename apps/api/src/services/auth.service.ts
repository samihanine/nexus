import prisma from "../lib/prisma";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { googleClient } from "../lib/google";
import { createUser } from "./user.service";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

  if (!user) {
    console.log("Email not found");
    throw new Error("Email not found");
  }

  const candidateHash = await bcrypt.hash(password, 10);

  if (candidateHash !== user.password) {
    throw new Error("Invalid password");
  }

  const accessToken = jsonwebtoken.sign(
    { userId: user.id },
    process.env.SECRET_KEY as string
  );

  return {
    accessToken,
  };
}

export const authWithGoogle = async () => {
  return googleClient.generateAuthUrl({
    access_type: "offline",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
  });
};

export const authWithGoogleCallback = async ({
  code,
  state,
}: {
  code: string;
  state?: string;
  scope?: string;
}) => {
  const { tokens } = await googleClient.getToken({
    code: code,
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
  });
  //console.log(tokens);
  googleClient.setCredentials(tokens);

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token as string,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (payload === undefined) {
    throw new Error("Erreur with google auth");
  }

  const { email, name, picture } = payload;

  if (!email) {
    throw new Error("Erreur with google auth");
  }

  let user = await prisma.user.findUnique({
    where: {
      email: email as string,
      provider: "GOOGLE",
    },
  });

  if (user) {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: email as string,
        name: name as string,
        imageUrl: picture as string,
        provider: "GOOGLE",
      },
    });
  } else {
    const newUser = await createUser({
      email: email as string,
      name: name as string,
      imageUrl: picture as string,
      provider: "GOOGLE",
    });

    user = newUser;
  }

  const accessToken = jsonwebtoken.sign(
    { userId: user.id },
    process.env.SECRET_KEY as string
  );

  return `${process.env.NEXT_PUBLIC_APP_URL}/login?accessToken=${accessToken}`;
};

export const signUpWithPassword = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new Error("Email already used");
  }

  const hash = await bcrypt.hash(password, 10);

  const newUser = await createUser({
    email,
    name,
    password: hash,
    provider: "PASSWORD",
  });

  const accessToken = jsonwebtoken.sign(
    { userId: newUser.id },
    process.env.SECRET_KEY as string
  );

  return {
    accessToken,
  };
};
