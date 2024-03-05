"use client";

import React, { useMemo } from "react";
import { CardContent, Card, Avatar, Chip, Muted } from "@nexus/ui";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@nexus/utils";
import { Buyer, Property } from "@nexus/schemas";
import BedroomsChip from "../property/bedrooms-chip";
import BathroomsChip from "../property/bathrooms-chip";

type BuyerCardProps = {
  mimimumBedrooms: number;
  minimumBathrooms: number;
  profileId: string;
  firstName: string;
  lastName: string;
  propertyType: Property["type"];
  imageUrl?: string;
  matchPercentage?: number;
};

const BuyerCard: React.FC<BuyerCardProps> = ({
  mimimumBedrooms,
  minimumBathrooms,
  profileId,
  firstName,
  lastName,
  propertyType,
  imageUrl,
  matchPercentage = 100,
}) => {
  const title = useMemo(() => {
    if (propertyType === "CONDO") {
      return "Condo";
    }

    if (propertyType === "LAND") {
      return "Terrain";
    }

    if (propertyType === "MULTIFAMILY") {
      return "Multiplexe";
    }

    if (propertyType === "TOWNHOUSE") {
      return "Maison de ville";
    }

    return "Maison à vendre";
  }, [propertyType]);

  return (
    <Link href={`/profiles/${profileId}`}>
      <Card className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl !border-0">
        <CardContent className="!pt-3 flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <Avatar
              className="w-16 h-16"
              src={imageUrl}
              alt={`${firstName} ${lastName}`}
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl">
                {firstName} {lastName}
              </h3>

              <Chip variant="green">Match {matchPercentage}%</Chip>
            </div>
          </div>
          <div>
            <Muted>A la recherche de</Muted>
            <h4 className="text-xl font-medium">{title}</h4>
          </div>
          <div className="flex gap-3">
            <BedroomsChip bedrooms={mimimumBedrooms} />
            <BathroomsChip bathrooms={minimumBathrooms} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BuyerCard;
