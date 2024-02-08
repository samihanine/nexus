"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, Muted } from "@nexus/ui";
import type { Address } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";
import AddressAutocomplete from "./address-autocomplete";

type AddressSearchProps = {
  address: Partial<Address> | undefined;
  setAddress: (address: Partial<Address>) => void;
  radius?: number;
  setRadius?: (radius: number) => void;
};

const Map = dynamic(() => import("./map"), { ssr: false });

const AddressSearch: React.FC<AddressSearchProps> = ({
  address,
  setAddress,
  radius,
  setRadius,
}) => {
  return (
    <div className="flex flex-col gap-10 max-w-2xl w-full self-center">
      <Card className="flex gap-5 items-center px-5 h-16 rounded-md">
        <div className="flex-1 flex items-center gap-3">
          <MagnifyingGlassIcon className="w-5 h-5 text-foreground" />
          <AddressAutocomplete
            setAddress={setAddress}
            className="w-full h-full"
          />
        </div>

        {Boolean(setRadius && radius !== undefined) && (
          <div className="w-fit border-border border-l gap-1 h-full flex flex-col justify-center px-3">
            <Muted className="text-xs">Rayon</Muted>
            <select
              className="focus:ring-0 focus:outline-none border-none text-base"
              onChange={(e) => setRadius && setRadius(Number(e.target.value))}
              defaultValue={radius}
            >
              <option value="0">Choisir un rayon</option>
              <option value="100">100m</option>
              <option value="500">500m</option>
              <option value="1000">1000m</option>
            </select>
          </div>
        )}
      </Card>

      <Map
        radius={radius}
        latitude={address?.latitude}
        longitude={address?.longitude}
      />
    </div>
  );
};

export default AddressSearch;
