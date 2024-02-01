"use client";

import LoadingView from "@/components/loading-view";
import Section from "@/components/section";
import { useCurrentUser } from "@/features/user/use-current-user";
import { useWorkspaces } from "@/features/workspace/use-workspaces";
import WorkspaceList from "@/features/workspace/workspace-list";

export default function Home() {
  const { data: workspaces = [], isPending } = useWorkspaces();
  const { data: user } = useCurrentUser();
  if (isPending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  return (
    <Section>
      <WorkspaceList
        isUserAdmin={user?.privilege === "ADMINISTRATOR"}
        workspaces={workspaces.map((workspace) => ({
          name: workspace.name,
          id: workspace.id,
          createdAt: new Date(workspace.createdAt || ""),
        }))}
      />
    </Section>
  );
}
