"use client";

import Header from "@/features/common/header";
import { useCurrentUser } from "@/features/user/use-current-user";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Header
        userEmail={user?.email || ""}
        userName={user?.name || ""}
        userImageUrl={user?.imageUrl || ""}
      />
      {children}
    </>
  );
}
