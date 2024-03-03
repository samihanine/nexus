"use client";
import { Profile, Property, Buyer } from "@nexus/schemas";
import { Avatar, Card, Chip, Detail, H3, H4, Input, Switch } from "@nexus/ui";
import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("../address/map"), { ssr: false });

export default function BuyerProfileDetails({
  profile,
  buyer,
}: {
  profile: Profile;
  buyer: Buyer;
}) {
  const features = [
    {
      label: "Looking for",
      value: "House",
      percentage: 100,
    },
    {
      label: "Buying period",
      value: "Now",
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <ProfileHeader
        firstName={profile.firstName}
        lastName={profile.lastName}
        imageUrl={profile.imageUrl || undefined}
        propertyTypes={buyer?.propertyTypes || []}
        buyingPeriod={buyer.buyingPeriod}
      />

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
        latitude={buyer.latitude}
        longitude={buyer.longitude}
        radius={buyer.radius}
      />
    </div>
  );
}

function ProfileDescription(props: { description: string }) {
  return (
    <div className="flex flex-col gap-5">
      <p>{props.description}</p>
    </div>
  );
}

function ProfileHeader(props: {
  firstName: string;
  lastName: string;
  imageUrl?: string;
  propertyTypes: Property["type"][];
  buyingPeriod: Buyer["buyingPeriod"];
}) {
  return (
    <Card className="bg-secondary flex items-center px-10 py-5 gap-10 !border-0">
      <Avatar
        src={props.imageUrl}
        alt={`${props.firstName} ${props.lastName}`}
        className="w-24 h-24"
      />

      <div className="flex flex-col gap-1">
        <H3 className="!text-3xl">
          {props.firstName} {props.lastName.charAt(0)}.
        </H3>
        <p>Looking for a house for sale</p>
        <p>Ready to buy now</p>
      </div>

      <div className="flex gap-5"></div>
    </Card>
  );
}

function FeatureTable(props: {
  features: {
    label: string;
    value?: string;
    percentage?: number;
  }[];
}) {
  return (
    <div className="flex flex-col">
      {props.features.map((feature, index) => {
        if (!feature.value) return <></>;

        return (
          <div key={index} className="border-t border-t-border flex">
            <div className="flex-1 bg-gray-100 border-r border-r-border p-3">
              {feature.label}
            </div>
            <div className="flex-1 py-2 px-4 flex items-center gap-3">
              <p className="font-medium">{feature.value}</p>
              {feature.percentage && (
                <Chip
                  variant={
                    feature.percentage > 0
                      ? feature.percentage === 100
                        ? "green"
                        : "yellow"
                      : "red"
                  }
                >
                  {feature.percentage}%
                </Chip>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function EditTable(props: {
  features: {
    label: string;
    value: number | boolean;
    type: "NUMBER" | "PRICE" | "BOOLEAN";
    onChange: (value: number | boolean) => void;
  }[];
}) {
  return (
    <div className="flex flex-col">
      {props.features.map((feature, index) => (
        <div key={index} className="border-t border-t-border flex">
          <div className="flex-1 bg-gray-100 border-r border-r-border">
            {feature.label}
          </div>
          <div className="flex-1">
            {feature.type === "NUMBER" && (
              <Input
                type="number"
                value={feature.value as number}
                onChange={(e) => feature.onChange(Number(e.target.value))}
              />
            )}

            {feature.type === "PRICE" && (
              <Input
                type="number"
                value={feature.value as number}
                onChange={(e) => feature.onChange(Number(e.target.value))}
              />
            )}

            {feature.type === "BOOLEAN" && (
              <Switch
                checked={feature.value as boolean}
                onChange={(e) =>
                  feature.onChange(e.currentTarget.value === "true")
                }
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
