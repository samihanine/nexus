"use client";

import LoadingView from "@/components/loading-view";
import Section from "@/components/section";
import { useWorkspace } from "@/features/workspace/use-workspace";
import WorkspaceSettings from "@/features/workspace/workspace-settings";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    workspace: string;
  };
}) {
  const { data: workspace, isPending } = useWorkspace(params.workspace);

  if (isPending)
    return (
      <Section>
        <LoadingView />
      </Section>
    );

  if (!workspace) return notFound();

  return (
    <Section>
      <WorkspaceSettings workspaceId={workspace.id} name={workspace.name} />
    </Section>
  );
}
