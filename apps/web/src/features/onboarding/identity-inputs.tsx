import { Avatar, Input } from "@nexus/ui";
import React from "react";

const fileToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

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
  return (
    <>
      <Avatar src={imageUrl} className="w-20 h-20" />

      <Input
        type="file"
        accept="image/*"
        className="!w-fit"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const base64Url = await fileToBase64(file as File);
          setImageUrl(base64Url);
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
