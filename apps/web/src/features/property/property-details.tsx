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
import Map from "../address/map";

export default function PropertiesDetails(props: Property) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <PropertyImages
        mainImageUrl={props.mainImageUrl || undefined}
        imageUrls={props.imageUrls}
      />

      <PropertyHeader
        price={props.price}
        formattedAddress={props.address?.formattedAddress || ""}
        bedrooms={props.bedrooms}
        bathrooms={props.bathrooms}
        squareFeet={props.squareFeet}
      />

      {Boolean(props.description?.length) && (
        <PropertyDescription description={props.description} />
      )}

      <PropertySummary
        type={props.type}
        yearBuilt={props.yearBuilt}
        parkingSpots={props.parkingSpots}
        stories={props.stories}
        livableAreaInSquareFeet={props.livableAreaInSquareFeet}
        landAreaInSquareFeet={props.landAreaInSquareFeet}
        mlsNumber={props.mlsNumber || undefined}
        garages={props.garages}
        rooms={props.rooms}
        createdAt={new Date(props.createdAt)}
      />

      <div className="my-3" />

      <PropertyMap
        latitude={props.address?.latitude || 0}
        longitude={props.address?.longitude || 0}
        porfileImageUrl={props.profile?.imageUrl || undefined}
        profileFullName={`${props.profile?.firstName} ${props.profile?.lastName}`}
      />
    </div>
  );
}

function PropertyDescription(props: { description: string }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-base font-medium">Description de la propriété</h2>
      <p className="text-foreground">{props.description}</p>
    </div>
  );
}

function PropertySummary(props: {
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
        <Detail label="Type" value={props.type} />
        <Detail label="Année de construction" value={props.yearBuilt} />
        <Detail label="Nombre de stationnement" value={props.parkingSpots} />
        <Detail label="Nombre d'étages" value={props.stories} />
        <Detail
          label="Superficie habitable"
          value={props.livableAreaInSquareFeet}
        />
        <Detail
          label="Superficie du terrain"
          value={props.landAreaInSquareFeet}
        />
        {props.mlsNumber && (
          <Detail label="Numéro MLS" value={props.mlsNumber} />
        )}
        <Detail label="Nombre de garages" value={props.garages} />
        <Detail label="Nombre de pièces" value={props.rooms} />
        <Detail
          label="Date de création"
          value={props.createdAt.toLocaleDateString()}
        />
      </div>
    </div>
  );
}

function Detail(props: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-muted-foreground">{props.label}</p>
      <p className="text-base font-medium">{props.value}</p>
    </div>
  );
}

function PropertyImages(props: { mainImageUrl?: string; imageUrls: string[] }) {
  const images: string[] = useMemo(() => {
    let array = props.mainImageUrl
      ? [props.mainImageUrl, ...props.imageUrls]
      : props.imageUrls;

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
  }, [props.mainImageUrl, props.imageUrls]);

  return (
    <div className="flex gap-8">
      <div className="flex-[2]">
        <Image
          src={images[0]}
          className="rounded-2xl max-h-[32rem] object-cover w-auto h-full mx-auto"
          alt="property"
        />
      </div>

      <div className="flex-1 grid-rows-2 gap-8 hidden sm:grid">
        <Image
          src={images[1]}
          className="rounded-2xl object-contain"
          alt="property"
        />

        <Image src={images[2]} className="rounded-2xl" alt="property" />
      </div>
    </div>
  );
}

function PropertyHeader(props: {
  price: number;
  formattedAddress: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-medium text-primary">
          {props.price.toLocaleString("fr-Fr", {
            style: "currency",
            currency: "CAD",
          })}
        </p>

        <p className="text-xl text-foreground font-medium">
          {props.formattedAddress}
        </p>

        <div className="flex gap-3 flex-wrap">
          <Chip>
            <Bed className="w-4 h-4" />
            {props.bedrooms} chambres
          </Chip>
          <Chip>
            <Bathroom className="w-4 h-4" />
            {props.bathrooms} salles de bain
          </Chip>
          <Chip>{props.squareFeet} pi²</Chip>
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
