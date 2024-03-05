import { Bed, Chip } from "@nexus/ui";

export default function BedroomsChip({ bedrooms }: { bedrooms: number }) {
  if (!bedrooms) {
    return null;
  }

  return (
    <Chip>
      <Bed className="w-4 h-4" />
      {bedrooms} chambres
    </Chip>
  );
}
