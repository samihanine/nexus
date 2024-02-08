"use client";

import { LoadingView } from "@nexus/ui";
import { useCurrentUser } from "@/features/user/use-current-user";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: user, isPending, isFetching } = useCurrentUser();

  if (isPending || isFetching)
    return (
      <div className="h-screen w-screen">
        <LoadingView />
      </div>
    );

  if (!user) return redirect("/login");

  if (user.profile?.type === "DEFAULT") return redirect("/onboarding");

  return redirect("/dashboard");
}
