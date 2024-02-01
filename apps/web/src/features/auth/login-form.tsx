"use client";

import { useSignIn } from "features/auth/use-sign-in";
import toast from "react-hot-toast";
import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import { useGoogleCallback } from "features/auth/use-google-callback";
import { KeyIcon } from "@heroicons/react/24/outline";

const LoginForm = () => {
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Label>
        <span>Email</span>
        <Input name="email" type="email" />
      </Label>

      <Label>
        <span>Password</span>
        <Input name="password" type="password" />
      </Label>

      <Button className="mt-5 w-fit self-end" loading={login.isPending}>
        <KeyIcon className="h-5 w-5 mr-2" />
        Se connecter
      </Button>
    </form>
  );
};

export default LoginForm;
