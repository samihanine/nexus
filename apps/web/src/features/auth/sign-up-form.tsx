"use client";

import { useSignUp } from "features/auth/use-sign-up";
import toast from "react-hot-toast";
import Button from "@nexus/ui/button";
import Input from "@nexus/ui/input";
import Label from "@nexus/ui/label";

const SignUpForm = () => {
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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input name="name" />
      </Label>

      <Label>
        <span>Email</span>
        <Input name="email" type="email" />
      </Label>

      <Label>
        <span>Password</span>
        <Input name="password" type="password" />
      </Label>

      <Label>
        <span>Confirm Password</span>
        <Input name="confirm-password" type="password" />
      </Label>

      <Button className="mt-5 w-fit self-end" loading={signup.isPending}>
        S&apos;inscrire
      </Button>
    </form>
  );
};

export default SignUpForm;
