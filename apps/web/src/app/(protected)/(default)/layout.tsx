"use client";

import Header from "@/features/common/header";
import { useCurrentUser } from "@/features/user/use-current-user";
import { LoadingView } from "@nexus/ui";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: user, isPending } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isPending) {
      router.push("/login");
    }
  }, [user, isPending]);

  if (isPending) return <LoadingView />;

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
