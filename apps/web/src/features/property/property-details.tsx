import { Property, Buyer } from "@nexus/schemas";
import Image from "next/image";
import React, { useMemo } from "react";
import housePlaceholder from "../../public/images/property/house-placeholder.svg";
import {
  Avatar,
  Bathroom,
  Bed,
  Button,
  Chip,
  H4,
  IconButton,
  Input,
  Muted,
  P,
  Detail,
} from "@nexus/ui";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import dynamic from "next/dynamic";
import FeatureTable from "../common/feature-table";
import BedroomsChip from "./bedrooms-chip";
import BathroomsChip from "./bathrooms-chip";

const Map = dynamic(() => import("../address/map"), { ssr: false });

export default function PropertiesDetails({
  property,
  buyer,
}: {
  property: Property;
  buyer?: Buyer;
}) {
  const features = [
    {
      label: "Type de propriété",
      value: property.type,
      percentage: buyer
        ? buyer.propertyType === property.type
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Parking spots",
      value: property.parkingSpots,
      percentage: buyer?.minimumParkingSpots
        ? (property.parkingSpots / buyer.minimumParkingSpots) * 100
        : undefined,
    },
    {
      label: "Bedrooms",
      value: property.bedrooms,
      percentage: buyer?.minimumBedrooms
        ? (property.bedrooms / buyer.minimumBedrooms) * 100
        : undefined,
    },
    {
      label: "Bathrooms",
      value: property.bathrooms,
      percentage: buyer?.minimumBathrooms
        ? (property.bathrooms / buyer.minimumBathrooms) * 100
        : undefined,
    },
    {
      label: "Rooms",
      value: property.rooms,
      percentage: buyer?.minimumRooms
        ? (property.rooms / buyer.minimumRooms) * 100
        : undefined,
    },
    {
      label: "Livable area in square feet",
      value: property.livableAreaInSquareFeet,
      percentage: buyer?.minimumLivableAreaInSquareFeet
        ? (property.livableAreaInSquareFeet /
            buyer.minimumLivableAreaInSquareFeet) *
          100
        : undefined,
    },
    {
      label: "Year built",
      value: property.yearBuilt,
      percentage: buyer?.minimumYearBuilt
        ? (property.yearBuilt / buyer.minimumYearBuilt) * 100
        : undefined,
    },
  ];

  const secondaryFeatures = [
    {
      label: "Has basement",
      value: property.hasBasement,
      percentage: buyer?.hasBasement
        ? property.hasBasement
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has pool",
      value: property.hasPool,
      percentage: buyer?.hasPool ? (property.hasPool ? 100 : 0) : undefined,
    },
    {
      label: "Has elevator",
      value: property.hasElevator,
      percentage: buyer?.hasElevator
        ? property.hasElevator
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has sauna",
      value: property.hasSauna,
      percentage: buyer?.hasSauna ? (property.hasSauna ? 100 : 0) : undefined,
    },
    {
      label: "Has fireplace",
      value: property.hasFireplace,
      percentage: buyer?.hasFireplace
        ? property.hasFireplace
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has air conditioning",
      value: property.hasAirConditioning,
      percentage: buyer?.hasAirConditioning
        ? property.hasAirConditioning
          ? 100
          : 0
        : undefined,
    },
  ];

  return (
    <div className="flex flex-col gap-10 w-full">
      <PropertyImages imageUrls={property.imageUrls} />

      <PropertyHeader
        price={property.price}
        formattedAddress={property.address?.formattedAddress || ""}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        livableAreaInSquareFeet={property.livableAreaInSquareFeet}
      />

      {Boolean(property.description?.length) && (
        <PropertyDescription description={property.description} />
      )}

      <div className="flex flex-col gap-5">
        <H4>Caractéristiques généraux</H4>
        <FeatureTable features={features} />
      </div>

      {secondaryFeatures.filter((item) => item.value).length > 0 && (
        <div className="flex flex-col gap-5">
          <H4>Caractéristiques secondaires</H4>
          <FeatureTable features={secondaryFeatures} />
        </div>
      )}

      <div className="my-3" />

      <PropertyMap
        latitude={property.address?.latitude || 0}
        longitude={property.address?.longitude || 0}
        porfileImageUrl={property.profile?.imageUrl || undefined}
        profileFullName={`${property.profile?.firstName} ${property.profile?.lastName}`}
      />
    </div>
  );
}

function PropertyDescription(property: { description: string }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-base font-medium">Description de la propriété</h2>
      <p className="text-foreground">{property.description}</p>
    </div>
  );
}

function PropertyImages(property: { imageUrls: string[] }) {
  const images: string[] = useMemo(() => {
    let array = property.imageUrls;

    if (!array.length) {
      return [housePlaceholder, housePlaceholder, housePlaceholder];
    }

    if (array.length === 1) {
      return [array[0], housePlaceholder, housePlaceholder];
    }

    if (array.length === 2) {
      return [array[0], array[1], housePlaceholder];
    }

    return array;
  }, [property.imageUrls]);

  return (
    <div className="flex gap-8 items-stretch h-96">
      <div className="flex flex-[2]">
        <Image
          src={images[0]}
          className="rounded-2xl max-h-full object-cover w-full h-full"
          alt="property"
          width={800}
          height={600}
        />
      </div>

      <div className="flex-[1] grid-rows-2 gap-8 hidden sm:grid">
        <Image
          src={images[1]}
          className="rounded-2xl object-cover h-full w-full"
          alt="property"
          width={800}
          height={600}
        />

        <Image
          src={images[2]}
          className="rounded-2xl object-cover h-full w-full"
          alt="property"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}

function PropertyHeader(property: {
  price: number;
  formattedAddress: string;
  bedrooms: number;
  bathrooms: number;
  livableAreaInSquareFeet: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-medium text-primary">
          {property.price.toLocaleString("fr-Fr", {
            style: "currency",
            currency: "CAD",
          })}
        </p>

        <p className="text-xl text-foreground font-medium">
          {property.formattedAddress}
        </p>

        <div className="flex gap-3 flex-wrap">
          <BedroomsChip bedrooms={property.bedrooms} />
          <BathroomsChip bathrooms={property.bathrooms} />
          <Chip>{property.livableAreaInSquareFeet} pi²</Chip>
        </div>
      </div>

      <div className="flex w-full sm:w-fit gap-7 flex-wrap">
        <div className="flex gap-1 items-center flex-col">
          <IconButton Icon={EyeSlashIcon} size="lg" />
          <P className="font-medium text-sm">Cacher</P>
        </div>
        <div className="flex gap-1 items-center flex-col">
          <IconButton Icon={ShareIcon} size="lg" />
          <P className="font-medium text-sm">Partager</P>
        </div>
        <Link
          href="/conversations"
          className="flex gap-1 items-center flex-col"
        >
          <IconButton Icon={EnvelopeIcon} size="lg" />
          <P className="font-medium text-sm">Contacter</P>
        </Link>
      </div>
    </div>
  );
}

function PropertyMap({
  latitude,
  longitude,
  porfileImageUrl,
  profileFullName,
}: {
  latitude: number;
  longitude: number;
  porfileImageUrl?: string;
  profileFullName: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <Map latitude={latitude} longitude={longitude} />

      <div className="flex flex-col justify-center gap-5 sm:gap-12">
        <div className="flex gap-5">
          <Avatar
            src={porfileImageUrl}
            alt={profileFullName}
            className="w-16 h-16"
          />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">{profileFullName}</p>
            <Muted>Propriétaire</Muted>
          </div>
        </div>

        <div className="flex gap-5">
          <Input placeholder="Message" className="flex-[3]" />
          <Button className="flex-1" variant={"secondary"}>
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  );
}
