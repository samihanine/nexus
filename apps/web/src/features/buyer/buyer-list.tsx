"use client";

import { Buyer } from "@nexus/schemas";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BuyerCard from "./buyer-card";

export default function BuyerList(props: { buyers: Buyer[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateSearchParam = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {props.buyers.map((buyer) => {
        return (
          <BuyerCard
            key={buyer.id}
            profileId={buyer.profileId}
            propertyType={buyer.propertyType}
            mimimumBedrooms={buyer.minimumBedrooms}
            minimumBathrooms={buyer.minimumBathrooms}
            imageUrl={buyer.profile?.imageUrl || undefined}
            firstName={buyer.profile?.firstName || ""}
            lastName={buyer.profile?.lastName || ""}
          />
        );
      })}
    </div>
  );
}
