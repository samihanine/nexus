"use client";

import React, { useMemo } from "react";
import { CardContent, Card } from "@nexus/ui";
import Image from "next/image";
import housePlaceholder from "../../public/images/property/house-placeholder.svg";
import Link from "next/link";
import { cn } from "@nexus/utils";
import { Property } from "@nexus/schemas";

type PropertyCardProps = {
  price: string;
  type: Property["type"];
  formattedAddress: string;
  imageUrls: string[];
  id: string;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  price,
  type,
  formattedAddress,
  imageUrls,
  id,
}) => {
  const images = [...imageUrls];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const title = useMemo(() => {
    if (type === "CONDO") {
      return "Condo à vendre";
    }

    if (type === "LAND") {
      return "Terrain à vendre";
    }

    if (type === "MULTIFAMILY") {
      return "Immeuble à revenus à vendre";
    }

    if (type === "TOWNHOUSE") {
      return "Maison de ville à vendre";
    }

    return "Maison à vendre";
  }, [type]);

  return (
    <Link href={`/properties/${id}`}>
      <Card className="w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl !border-0">
        <Image
          alt="House"
          className="w-full bg-gray-200"
          height="204"
          src={images[currentIndex] || housePlaceholder}
          style={{
            aspectRatio: "430/204",
            objectFit: "cover",
          }}
          width="430"
        />
        <CardContent className="!pt-3 flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-semibold text-primary">{price}$</h3>
            <div className="flex space-x-1">
              {images.length > 1 &&
                images.map((_, index) => (
                  <CircleIcon
                    className={cn(
                      "h-2 w-2 fill-current",
                      currentIndex === index ? "text-gray-500" : "text-gray-300"
                    )}
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
            </div>
          </div>
          <h4 className="text-base font-medium">{title}</h4>
          <p className="text-xs text-muted-foreground">{formattedAddress}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;

function CircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
