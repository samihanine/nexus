import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const usePropertyByProfileId = (profileId?: string) => {
  return useQuery({
    queryKey: ["properties", profileId],
    queryFn: () => {
      if (!profileId) {
        return Promise.resolve(null);
      }

      return zodios.getPropertyByProfileId({
        params: {
          profileId,
        },
      });
    },
  });
};
