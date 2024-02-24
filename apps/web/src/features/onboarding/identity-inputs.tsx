import { Avatar, Input } from "@nexus/ui";
import React from "react";
import { useUploadImage } from "../upload/useUploadImage";
import toast from "react-hot-toast";

export default function IdentityInputs({
  imageUrl,
  setImageUrl,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const uploadImage = useUploadImage();

  return (
    <>
      <Avatar src={imageUrl} className="w-20 h-20" />

      <Input
        type="file"
        accept="image/*"
        className="!w-fit"
        onChange={async (e) => {
          const formData = new FormData();
          if (!e.target.files) return;
          formData.append("file", e.target.files[0]);
          const idToast = toast.loading("Chargement de l'image...");
          try {
            const data = await uploadImage.mutateAsync(formData);
            setImageUrl(data.fileUrl);
            toast.success("Image chargée avec succès");
          } catch (error) {
            console.error(error);
          } finally {
            toast.dismiss(idToast);
          }
        }}
      />

      <Input
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <Input
        placeholder="Nom de famille"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
}
