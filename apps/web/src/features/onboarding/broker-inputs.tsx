import { Input, Muted } from "@nexus/ui";
import React from "react";

export default function BrokerInputs({
  setPhone,
  phone,
  oaciqNumber,
  setOaciqNumber,
  centrisUrl,
  setCentrisUrl,
}: {
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  oaciqNumber: string;
  setOaciqNumber: React.Dispatch<React.SetStateAction<string>>;
  centrisUrl: string;
  setCentrisUrl: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Muted className="flex-1">Entrez votre # de permis</Muted>

        <Input
          className="flex-1"
          placeholder="Numéro OACIQ"
          value={oaciqNumber}
          onChange={(e) => setOaciqNumber(e.target.value)}
          minLength={7}
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <Muted className="flex-1">Numéro de téléphone</Muted>

        <Input
          className="flex-1"
          placeholder="Entrez votre numéro de téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <Muted className="flex-1">Centris Url</Muted>

        <Input
          className="flex-1"
          placeholder="Entrez votre URL Centris"
          value={centrisUrl}
          onChange={(e) => setCentrisUrl(e.target.value)}
          type="url"
        />
      </div>
    </>
  );
}
