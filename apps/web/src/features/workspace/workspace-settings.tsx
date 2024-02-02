"use client";

import Button from "@nexus/ui/button";
import Input from "@nexus/ui/input";
import { useDeleteWorkspace } from "@/features/workspace/use-delete-workspace";
import { useUpdateWorkspace } from "@/features/workspace/use-update-workspace";
import Card, { CardBody, CardFooter } from "@nexus/ui/card";
import { useState } from "react";
import { useWorkspaceInvitations } from "./use-workspace-invitations";
import { useWorkspaceUsers } from "./use-worspace-users";
import {
  ArrowLeftIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import WorkspaceUsersTable from "./workspace-users-table";
import WorkspaceInvitationsTable from "./workspace-invitations-table";
import { useCreateWorkspaceInvitationModal } from "./create-workspace-invitation-modal";
import { useRouter } from "next/navigation";

const WorkspaceSettings = ({
  workspaceId,
  name,
}: {
  workspaceId: string;
  name: string;
}) => {
  const {
    CreateWorkspaceInvitationModal,
    setShowCreateWorkspaceInvitationModal,
  } = useCreateWorkspaceInvitationModal();
  const deleteWorkspace = useDeleteWorkspace();
  const updateWorkspace = useUpdateWorkspace();
  const { data: workspaceInvitations = [] } =
    useWorkspaceInvitations(workspaceId);
  const { data: workspaceUsers = [] } = useWorkspaceUsers(workspaceId);
  const [newName, setNewName] = useState(name);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updateWorkspace.mutateAsync({
      id: workspaceId,
      name: newName,
    });
  };

  const handleSubmitDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const confirm = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet espace de travail ?"
    );

    if (!confirm) return;

    await deleteWorkspace.mutateAsync(workspaceId);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center flex-col flex-wrap gap-4">
        <Button variant={"outline"} onClick={() => router.back()}>
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour
        </Button>
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-medium">Paramètre de {name}</h1>
        </div>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardBody className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Nom de l'espace de travail
              </h2>
              <p className="text-sm text-muted-foreground">
                Entrez un nom pour votre espace de travail.
              </p>
            </div>

            <Input
              name={"name"}
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </CardBody>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Le nom ne doit pas dépasser 50 caractères.
            </p>
            <Button
              type="submit"
              loading={updateWorkspace.isPending}
              disabled={newName === name}
            >
              <CheckIcon className="w-5 h-5 mr-2" />
              Sauvegarder
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardBody className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-medium">Membres</h2>
          </div>

          <WorkspaceUsersTable workspaceUsers={workspaceUsers || []} />

          <div className="space-y-2">
            <h2 className="text-xl font-medium">Invitations en attente</h2>
          </div>

          <WorkspaceInvitationsTable
            workspaceInvitations={workspaceInvitations || []}
          />
        </CardBody>
        <CardFooter>
          <p className="text-sm text-muted-foreground"></p>
          <Button
            type="submit"
            onClick={() => setShowCreateWorkspaceInvitationModal(true)}
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Inviter un membre
          </Button>
        </CardFooter>
        <CreateWorkspaceInvitationModal />
      </Card>

      <Card>
        <form onSubmit={handleSubmitDelete}>
          <CardBody className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">
                Supprimer l'espace de travail
              </h2>
              <p className="text-sm text-muted-foreground">
                Supprimer de façon permanente l'espace de travail.
              </p>
            </div>
          </CardBody>
          <CardFooter>
            <p className="text-sm text-muted-foreground"></p>
            <Button
              type="submit"
              loading={deleteWorkspace.isPending}
              variant="destructive"
            >
              Supprimer
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default WorkspaceSettings;
