"use client";

import Header from "@/features/common/header";
import { useCurrentUser } from "@/features/user/use-current-user";
import { useWorkspaces } from "@/features/workspace/use-workspaces";
import { useParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: user } = useCurrentUser();
  const { data: workspaces = [] } = useWorkspaces();
  const params = useParams();

  return (
    <>
      <Header
        userEmail={user?.email || ""}
        userName={user?.name || ""}
        userImageUrl={user?.imageUrl || ""}
        workspaces={workspaces}
        workspaceId={params.workspace as string}
        isUserAdmin={user?.privilege === "ADMINISTRATOR"}
      />
      {children}
    </>
  );
}
