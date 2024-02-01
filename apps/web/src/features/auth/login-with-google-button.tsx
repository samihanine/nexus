"use client";

import { useSignInWithGoogle } from "features/auth/use-sign-in-with-google";
import { Google } from "../../components/icon";
import Button from "@/components/button";

const LoginWithGoogleButton = () => {
  const signInWithGoogle = useSignInWithGoogle();

  const handleClick = async () => {
    try {
      await signInWithGoogle.mutateAsync(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant={"outline"}
      className="flex !h-12 gap-5"
      onClick={handleClick}
      loading={signInWithGoogle.isPending}
    >
      <Google className="h-5 w-5 " />
      <p>Se connecter avec google</p>
    </Button>
  );
};

export default LoginWithGoogleButton;
