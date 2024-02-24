import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const usePropertyById = (propertyId: string) => {
  return useQuery({
    queryKey: ["properties", propertyId],
    queryFn: () =>
      zodios.getPropertyById({
        params: {
          propertyId,
        },
      }),
  });
};
