"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/modal";
import { useCreateWorkspaceInvitation } from "@/features/workspace/use-create-workspace-invitation";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import Button from "@/components/button";
import Label from "@/components/label";
import Input from "@/components/input";
import Select from "@/components/select";
import { useParams } from "next/navigation";

const CreateWorkspaceInvitationModal = ({
  showCreateWorkspaceInvitationModal,
  setShowCreateWorkspaceInvitationModal,
}: {
  showCreateWorkspaceInvitationModal: boolean;
  setShowCreateWorkspaceInvitationModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const createWorkspaceInvitation = useCreateWorkspaceInvitation();
  const params = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = new FormData(e.currentTarget).get("email") as string;
    const role = new FormData(e.currentTarget).get("role") as string;

    await createWorkspaceInvitation.mutateAsync({
      role,
      email,
      workspaceId: params.workspace as string,
    });

    setShowCreateWorkspaceInvitationModal(false);
  };

  return (
    <Modal
      showModal={showCreateWorkspaceInvitationModal}
      setShowModal={setShowCreateWorkspaceInvitationModal}
    >
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <ModalHeader>
          <h2 className="flex w-full items-center justify-center gap-2 text-center">
            Inviter un collaborateur
          </h2>
        </ModalHeader>
        <ModalBody>
          <Label className="text-center">
            Email du collaborateur
            <Input name="email" placeholder="ex: test@gmail.com" type="email" />
          </Label>

          <Label className="text-center">
            Role du collaborateur
            <Select name="role">
              <option value="CUSTOMER">Client</option>
              <option value="MANAGER">Référent</option>
              <option value="ADMINISTRATOR">Administrateur</option>
            </Select>
          </Label>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="secondary"
            onClick={() => setShowCreateWorkspaceInvitationModal(false)}
            type="button"
          >
            Annuler
          </Button>

          <Button type="submit" loading={createWorkspaceInvitation.isPending}>
            <PlusIcon className="mr-2 h-5 w-5" />
            Inviter
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export function useCreateWorkspaceInvitationModal() {
  const [
    showCreateWorkspaceInvitationModal,
    setShowCreateWorkspaceInvitationModal,
  ] = useState(false);

  const CreateWorkspaceInvitationModalCallback = useCallback(() => {
    return (
      <CreateWorkspaceInvitationModal
        showCreateWorkspaceInvitationModal={showCreateWorkspaceInvitationModal}
        setShowCreateWorkspaceInvitationModal={
          setShowCreateWorkspaceInvitationModal
        }
      />
    );
  }, [
    showCreateWorkspaceInvitationModal,
    setShowCreateWorkspaceInvitationModal,
  ]);

  return useMemo(
    () => ({
      setShowCreateWorkspaceInvitationModal,
      CreateWorkspaceInvitationModal: CreateWorkspaceInvitationModalCallback,
    }),
    [
      setShowCreateWorkspaceInvitationModal,
      CreateWorkspaceInvitationModalCallback,
    ]
  );
}
