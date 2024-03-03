"use client";
import { Buyer, Profile, Property } from "@nexus/schemas";
import { Avatar, Card, H3, H4 } from "@nexus/ui";
import dynamic from "next/dynamic";
import FeatureTable from "../common/feature-table";

const Map = dynamic(() => import("../address/map"), { ssr: false });

export default function BuyerProfileDetails({
  profile,
  buyer,
  property,
}: {
  profile: Profile;
  buyer: Buyer;
  property?: Property;
}) {
  const features = [
    {
      label: "Looking for",
      value: buyer.propertyTypes.join(", "),
      percentage: property
        ? buyer.propertyTypes.includes(property.type)
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Parking spots",
      value: buyer.minimumParkingSpots,
      percentage: property
        ? (buyer.minimumParkingSpots / property.parkingSpots) * 100
        : undefined,
    },
    {
      label: "Bedrooms",
      value: buyer.minimumBedrooms,
      percentage: property
        ? (buyer.minimumBedrooms / property.bedrooms) * 100
        : undefined,
    },
    {
      label: "Bathrooms",
      value: buyer.minimumBathrooms,
      percentage: property
        ? (buyer.minimumBathrooms / property.bathrooms) * 100
        : undefined,
    },
    {
      label: "Rooms",
      value: buyer.minimumRooms,
      percentage: property
        ? (buyer.minimumRooms / property.rooms) * 100
        : undefined,
    },
    {
      label: "Livable area in square feet",
      value: buyer.minimumLivableAreaInSquareFeet,
      percentage: property
        ? (buyer.minimumLivableAreaInSquareFeet /
            property.livableAreaInSquareFeet) *
          100
        : undefined,
    },
    {
      label: "Land area in square feet",
      value: buyer.minimumLandAreaInSquareFeet,
      percentage: property
        ? (buyer.minimumLandAreaInSquareFeet / property.landAreaInSquareFeet) *
          100
        : undefined,
    },
    {
      label: "Year built",
      value: buyer.minimumYearBuilt,
      percentage: property
        ? (buyer.minimumYearBuilt / property.yearBuilt) * 100
        : undefined,
    },
    {
      label: "Has basement",
      value: buyer.hasBasement ? "Yes" : undefined,
      percentage: property
        ? buyer.hasBasement === property.hasBasement
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has elevator",
      value: buyer.hasElevator ? "Yes" : undefined,
      percentage: property
        ? buyer.hasElevator === property.hasElevator
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has sauna",
      value: buyer.hasSauna ? "Yes" : undefined,
      percentage: property
        ? buyer.hasSauna === property.hasSauna
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has pool",
      value: buyer.hasPool ? "Yes" : undefined,
      percentage: property
        ? buyer.hasPool === property.hasPool
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has fireplace",
      value: buyer.hasFireplace ? "Yes" : undefined,
      percentage: property
        ? buyer.hasFireplace === property.hasFireplace
          ? 100
          : 0
        : undefined,
    },
    {
      label: "Has gym",
      value: buyer.hasGym ? "Yes" : undefined,
      percentage: property
        ? buyer.hasGym === property.hasGym
          ? 100
          : 0
        : undefined,
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <Card className="bg-secondary flex items-center px-10 py-5 gap-10 !border-0">
        <Avatar
          src={profile.imageUrl || undefined}
          alt={`${profile.firstName} ${profile.lastName}`}
          className="w-24 h-24"
        />

        <div className="flex flex-col gap-1">
          <H3 className="!text-3xl">
            {profile.firstName} {profile.lastName.charAt(0)}.
          </H3>
          <p>Looking for a house for sale</p>
          <p>Ready to buy now</p>
        </div>

        <div className="flex gap-5"></div>
      </Card>

      {Boolean(buyer.description?.length) && (
        <>
          <H4>Description</H4>
          <p className="text-muted-foreground">{buyer.description}</p>
        </>
      )}

      <H4 className="mt-5">Critères de recherches</H4>
      <FeatureTable features={features} />

      <H4 className="mt-5">Zone de recherches</H4>
      <Map
        latitude={buyer.address?.latitude}
        longitude={buyer.address?.longitude}
        radius={buyer.radius}
      />
    </div>
  );
}
