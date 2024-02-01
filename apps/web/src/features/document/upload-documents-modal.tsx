"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader } from "@/components/modal";
import { useUploadDocuments } from "@/features/document/use-upload-documents";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
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
import UploadFile from "./upload-file";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { useTags } from "../tag/use-tags";
import { useAddTagToDocument } from "../tag/use-add-tag-to-document";

const UploadDocumentsModal = ({
  showUploadDocumentsModal,
  setShowUploadDocumentsModal,
}: {
  showUploadDocumentsModal: boolean;
  setShowUploadDocumentsModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const uploadDocuments = useUploadDocuments();
  const addTagToDocument = useAddTagToDocument();
  const [files, setFiles] = useState<File[]>([]);
  const params = useParams();
  const { data: tags = [] } = useTags(params.workspace as string);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!files.length) return toast.error("Veuillez sélectionner des fichiers");

    const description =
      (new FormData(e.currentTarget).get("description") as string) || "";
    const month = new FormData(e.currentTarget).get("month") as string;
    const year = new FormData(e.currentTarget).get("year") as string;
    const title = new FormData(e.currentTarget).get("title") as string;
    const tagId = new FormData(e.currentTarget).get("tagId") as string;

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    formData.append("workspaceId", params.workspace as string);
    formData.append("description", description);
    formData.append("month", month);
    formData.append("year", year);
    formData.append("title", title);

    try {
      const documents = await uploadDocuments.mutateAsync(formData);

      if (tagId) {
        for (const document of documents) {
          await addTagToDocument.mutateAsync({
            documentId: document.id,
            tagId,
          });
        }
      }
      setShowUploadDocumentsModal(false);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Modal
      showModal={showUploadDocumentsModal}
      setShowModal={setShowUploadDocumentsModal}
    >
      <ModalHeader>
        <h2 className="flex w-full items-center justify-center gap-2 text-center">
          Téléverser des documents
        </h2>
      </ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <div className="flex flex-col gap-5">
            <Label className="">
              <div className="flex items-center gap-1">
                Titre
                <span className="text-red-500">*</span>
              </div>
              <Input
                name="title"
                type="text"
                placeholder="ex: nexus"
                required
              />
            </Label>
            <Label>
              <div className="flex items-center gap-1">
                Catégorie
                <span className="text-red-500">*</span>
              </div>
              <Select name="tagId" required>
                <option value="">Aucune</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </Select>
            </Label>
            <div className="flex items-center gap-2">
              <Label className="">
                <div className="flex items-center gap-1">
                  Month
                  <span className="text-red-500">*</span>
                </div>

                <Select
                  required
                  name="month"
                  defaultValue={new Date().getMonth() + 1}
                >
                  <option value="january">Janvier</option>
                  <option value="february">Février</option>
                  <option value="march">Mars</option>
                  <option value="april">Avril</option>
                  <option value="may">Mai</option>
                  <option value="june">Juin</option>
                  <option value="july">Juillet</option>
                  <option value="august">Août</option>
                  <option value="september">Septembre</option>
                  <option value="october">Octobre</option>
                  <option value="november">Novembre</option>
                  <option value="december">Décembre</option>
                </Select>
              </Label>
              <Label className="">
                <div className="flex items-center gap-1">
                  Year
                  <span className="text-red-500">*</span>
                </div>
                <Select
                  required
                  name="year"
                  defaultValue={new Date().getFullYear()}
                >
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </Select>
              </Label>
            </div>
            <Label className="">
              <div className="flex items-center gap-1">
                Fichiers
                <span className="text-red-500">*</span>
              </div>
            </Label>

            <UploadFile
              name="files"
              type="file"
              multiple
              files={files}
              setFiles={setFiles}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="secondary"
            onClick={() => setShowUploadDocumentsModal(false)}
            type="button"
          >
            Annuler
          </Button>

          <Button
            type="submit"
            loading={uploadDocuments.isPending || addTagToDocument.isPending}
          >
            <ArrowUpTrayIcon className="mr-2 h-5 w-5" />
            Téléverser
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export function useUploadDocumentsModal() {
  const [showUploadDocumentsModal, setShowUploadDocumentsModal] =
    useState(false);

  const UploadDocumentsModalCallback = useCallback(() => {
    return (
      <UploadDocumentsModal
        showUploadDocumentsModal={showUploadDocumentsModal}
        setShowUploadDocumentsModal={setShowUploadDocumentsModal}
      />
    );
  }, [showUploadDocumentsModal, setShowUploadDocumentsModal]);

  return useMemo(
    () => ({
      setShowUploadDocumentsModal,
      UploadDocumentsModal: UploadDocumentsModalCallback,
    }),
    [setShowUploadDocumentsModal, UploadDocumentsModalCallback]
  );
}
