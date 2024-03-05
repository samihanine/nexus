import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useBuyerByProfileId = (profileId?: string) => {
  return useQuery({
    queryKey: ["buyers", profileId],
    queryFn: () => {
      if (!profileId) {
        return Promise.resolve(null);
      }

      return zodios.getBuyerByProfileId({
        params: {
          profileId,
        },
      });
    },
  });
};
