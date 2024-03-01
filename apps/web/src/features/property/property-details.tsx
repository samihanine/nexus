import { Property } from "@nexus/schemas";
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
} from "@nexus/ui";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../address/map"), { ssr: false });

export default function PropertiesDetails({
  property,
}: {
  property: Property;
}) {
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

      <PropertySummary
        type={property.type}
        yearBuilt={property.yearBuilt}
        parkingSpots={property.parkingSpots}
        stories={property.stories}
        livableAreaInSquareFeet={property.livableAreaInSquareFeet}
        landAreaInSquareFeet={property.landAreaInSquareFeet}
        mlsNumber={property.mlsNumber || undefined}
        garages={property.garages}
        rooms={property.rooms}
        createdAt={new Date(property.createdAt)}
      />

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

function PropertySummary(property: {
  type: Property["type"];
  yearBuilt: number;
  parkingSpots: number;
  stories: number;
  livableAreaInSquareFeet: number;
  landAreaInSquareFeet: number;
  mlsNumber?: string;
  garages: number;
  rooms: number;
  createdAt: Date;
}) {
  return (
    <div className="flex flex-col gap-5">
      <H4>Informations général</H4>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <Detail label="Type" value={property.type} />
        <Detail label="Année de construction" value={property.yearBuilt} />
        <Detail label="Nombre de stationnement" value={property.parkingSpots} />
        <Detail label="Nombre d'étages" value={property.stories} />
        <Detail
          label="Superficie habitable"
          value={property.livableAreaInSquareFeet}
        />
        <Detail
          label="Superficie du terrain"
          value={property.landAreaInSquareFeet}
        />
        {property.mlsNumber && (
          <Detail label="Numéro MLS" value={property.mlsNumber} />
        )}
        <Detail label="Nombre de garages" value={property.garages} />
        <Detail label="Nombre de pièces" value={property.rooms} />
        <Detail
          label="Date de création"
          value={property.createdAt.toLocaleDateString()}
        />
      </div>
    </div>
  );
}

function Detail(property: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-muted-foreground">{property.label}</p>
      <p className="text-base font-medium">{property.value}</p>
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
          <Chip>
            <Bed className="w-4 h-4" />
            {property.bedrooms} chambres
          </Chip>
          <Chip>
            <Bathroom className="w-4 h-4" />
            {property.bathrooms} salles de bain
          </Chip>
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
