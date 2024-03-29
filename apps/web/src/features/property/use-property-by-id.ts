import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const usePropertyById = (propertyId?: string) => {
  return useQuery({
    queryKey: ["properties", propertyId],
    queryFn: () => {
      if (!propertyId) {
        return Promise.resolve(null);
      }

      return zodios.getPropertyById({
        params: {
          propertyId,
        },
      });
    },
  });
};
