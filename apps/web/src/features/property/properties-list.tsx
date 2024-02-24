import { Property } from "@nexus/schemas";
import PropertyCard from "./property-card";
import Link from "../common/link";

export default function PropertiesList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          mainImageUrl={property.mainImageUrl || undefined}
          type={property.type}
          formattedAddress={property.address?.formattedAddress || ""}
          price={String(property.price)}
          imageUrls={property.imageUrls}
          id={property.id}
        />
      ))}
    </div>
  );
}
