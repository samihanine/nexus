"use client";

import { useSignUp } from "features/auth/use-sign-up";
import toast from "react-hot-toast";
import { Button, H3, Input, Label, Muted, P, Small } from "@nexus/ui";
import GoogleButton from "./google-button";
import Link from "next/link";

const RegisterForm = () => {
  const signup = useSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const name = formData.get("name") as string;

      await signup.mutateAsync({ email, password, name });
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
        <div className="flex gap-5 items-center">
          <Input name="name" placeholder="Prénom" />

          <Input name="name" placeholder="Nom de famille" />
        </div>

        <Input placeholder="Email" name="email" type="email" />

        <Input
          name="password"
          type="password"
          min="8"
          placeholder="Mot de passe"
        />

        <Input
          name="password_confirmation"
          type="password"
          min="8"
          placeholder="Confirmer le mot de passe"
        />

        <div className="space-y-2 !mt-10 !mb-8">
          <Button loading={signup.isPending}>S&apos;inscrire</Button>

          <GoogleButton>S&apos;inscrire avec Google</GoogleButton>
        </div>

        <P className="text-sm text-center">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="font-medium">
            Se connecter
          </Link>
        </P>
      </form>
    </div>
  );
};

export default RegisterForm;
