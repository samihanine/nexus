"use client";

import { LoadingView } from "@nexus/ui";
import { useCurrentUser } from "@/features/user/use-current-user";
import { redirect } from "next/navigation";
import { useProfiles } from "../../features/profile/use-profiles";
import { useCurrentProfile } from "@/features/profile/use-current-profile";

export default function Home() {
  const { data: user, isPending, isFetching } = useCurrentUser();
  const { data: profiles = [], isPending: isProfilesPending } = useProfiles();
  const { data: profile, isPending: isProfilePending } = useCurrentProfile();

  if (isPending || isFetching || isProfilesPending || isProfilePending) {
    return <LoadingView />;
  }

  if (!user) return redirect("/login");

  if (profiles.length === 0) return redirect("/onboarding");

  if (profile?.type) {
    return redirect(`/conversations`);
  }

  return <LoadingView />;
}
