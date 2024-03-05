import { Bed, Chip } from "@nexus/ui";

export default function BathroomsChip({ bathrooms }: { bathrooms: number }) {
  if (!bathrooms) {
    return null;
  }

  return (
    <Chip>
      <Bed className="w-4 h-4" />
      {bathrooms} chambres
    </Chip>
  );
}
