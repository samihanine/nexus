"use client";

import { Button, H3, Input, Muted, P } from "@nexus/ui";
import Link from "next/link";
import toast from "react-hot-toast";
import GoogleButton from "./google-button";
import { useGoogleCallback } from "./use-google-callback";
import { useSignIn } from "./use-sign-in";

const RegisterForm = () => {
  const login = useSignIn();
  useGoogleCallback();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      login.mutate({ email, password });
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  return (
    <div>
      <div className="space-y-3 mb-10">
        <H3>Create an account</H3>
        <Muted>Let’s get started with your 7 day free trial.</Muted>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input placeholder="Email" name="email" type="email" />

        <Input
          name="password"
          type="password"
          min="8"
          placeholder="Mot de passe"
        />

        <div className="space-y-2 !mt-10 !mb-8">
          <Button type="submit" loading={login.isPending}>
            Se connecter
          </Button>

          <GoogleButton>Se connecter avec Google</GoogleButton>
        </div>

        <P className="text-sm text-center">
          Vous n'avez pas de compte ?{" "}
          <Link href="/register" className="font-medium">
            S'inscrire
          </Link>
        </P>
      </form>
    </div>
  );
};

export default RegisterForm;
