"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, Muted } from "@nexus/ui";
import type { Address } from "@nexus/schemas";
import dynamic from "next/dynamic";
import React from "react";
import AddressAutocomplete from "./address-autocomplete";

type AddressSearchProps = {
  address: Address | undefined;
  setAddress: (address: Address) => void;
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
      <div className="flex gap-5 items-center px-5 h-14 rounded-md border border-input">
        <div className="flex-1 flex items-center gap-3">
          <MagnifyingGlassIcon className="w-5 h-5 text-foreground" />
          <AddressAutocomplete
            setAddress={setAddress}
            query={address?.formattedAddress}
            className="w-full h-full"
          />
        </div>

        {Boolean(setRadius && radius !== undefined) && (
          <div className="w-fit border-input border-l gap-1 h-full flex flex-col justify-center px-3">
            <Muted className="text-xs">Rayon</Muted>
            <select
              className="focus:ring-0 focus:outline-none border-none text-base"
              onChange={(e) => setRadius && setRadius(Number(e.target.value))}
              defaultValue={radius}
            >
              <option value="0">Choisir un rayon</option>
              <option value="500">500m</option>
              <option value="1000">1km</option>
              <option value="2000">2km</option>
              <option value="5000">5km</option>
              <option value="10000">10km</option>
              <option value="20000">20km</option>
              <option value="30000">30km</option>
              <option value="50000">50km</option>
              <option value="100000">100km</option>
            </select>
          </div>
        )}
      </div>

      <Map
        radius={radius}
        latitude={address?.latitude}
        longitude={address?.longitude}
      />
    </div>
  );
};

export default AddressSearch;
