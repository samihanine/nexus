"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader } from "@nexus/ui/modal";
import { useCreateWorkspace } from "@/features/workspace/use-create-workspace";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import Button from "@nexus/ui/button";
import Label from "@nexus/ui/label";
import Input from "@nexus/ui/input";

const CreateWorkspaceModal = ({
  showCreateWorkspaceModal,
  setShowCreateWorkspaceModal,
}: {
  showCreateWorkspaceModal: boolean;
  setShowCreateWorkspaceModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const createWorkspace = useCreateWorkspace();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = new FormData(e.currentTarget).get("name") as string;

    await createWorkspace.mutateAsync({
      name,
    });
  };

  return (
    <Modal
      showModal={showCreateWorkspaceModal}
      setShowModal={setShowCreateWorkspaceModal}
    >
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          <h2 className="flex w-full items-center justify-center gap-2 text-center">
            Créer un nouvel espace de travail
          </h2>
        </ModalHeader>
        <ModalBody>
          <Label className="text-center">
            Nom de l'espace de travail
            <Input name="name" placeholder="ex: nexus" />
          </Label>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="secondary"
            onClick={() => setShowCreateWorkspaceModal(false)}
            type="button"
          >
            Annuler
          </Button>

          <Button type="submit" loading={createWorkspace.isPending}>
            <PlusIcon className="mr-2 h-5 w-5" />
            Créer
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export function useCreateWorkspaceModal() {
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] =
    useState(false);

  const CreateWorkspaceModalCallback = useCallback(() => {
    return (
      <CreateWorkspaceModal
        showCreateWorkspaceModal={showCreateWorkspaceModal}
        setShowCreateWorkspaceModal={setShowCreateWorkspaceModal}
      />
    );
  }, [showCreateWorkspaceModal, setShowCreateWorkspaceModal]);

  return useMemo(
    () => ({
      setShowCreateWorkspaceModal,
      CreateWorkspaceModal: CreateWorkspaceModalCallback,
    }),
    [setShowCreateWorkspaceModal, CreateWorkspaceModalCallback]
  );
}
