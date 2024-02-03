"use client";

import { useSignInWithGoogle } from "features/auth/use-sign-in-with-google";
import { Google } from "@nexus/ui";
import { Button } from "@nexus/ui";

const GoogleButton = ({ children }: { children: React.ReactNode }) => {
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
      className="flex gap-5"
      onClick={handleClick}
      loading={signInWithGoogle.isPending}
    >
      <Google className="h-5 w-5 " />
      {children}
    </Button>
  );
};

export default GoogleButton;
