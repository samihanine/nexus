"use client";

import WorkspaceCard from "./workspace-card";
import Button from "@/components/button";
import { useCreateWorkspaceModal } from "./create-workspace-modal";
import { PlusIcon } from "@heroicons/react/24/outline";

type WorkspaceListProps = React.ComponentProps<"div"> & {
  workspaces: {
    id: string;
    name: string;
    createdAt: Date;
  }[];
  isUserAdmin: boolean;
};

const WorkspaceList = (props: WorkspaceListProps) => {
  const { setShowCreateWorkspaceModal, CreateWorkspaceModal } =
    useCreateWorkspaceModal();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-3xl font-medium">Espaces de travail</h1>
        {props.isUserAdmin && (
          <Button
            className="px-4 py-2 text-foreground"
            onClick={() => setShowCreateWorkspaceModal(true)}
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Créer un espace de travail
          </Button>
        )}
      </div>

      {props.workspaces.map((workspace) => (
        <WorkspaceCard
          key={workspace.id}
          id={workspace.id}
          name={workspace.name}
          description={workspace.createdAt.toLocaleDateString()}
          isUserAdmin={props.isUserAdmin}
        />
      ))}

      {props.workspaces.length === 0 && (
        <p className="text-center mt-5 text-muted-foreground">
          Vous n'avez pas encore d'espace de travail
        </p>
      )}

      <CreateWorkspaceModal />
    </div>
  );
};

export default WorkspaceList;
