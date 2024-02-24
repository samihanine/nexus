"use client";
import { Section, Button, H3 } from "@nexus/ui";
import { useSignOut } from "../auth/use-sign-out";

export default function SettingsPage() {
  const signout = useSignOut();

  return (
    <>
      <Button
        variant={"destructive"}
        className="!w-fit"
        onClick={() => signout.mutate()}
      >
        Sign out
      </Button>
    </>
  );
}
