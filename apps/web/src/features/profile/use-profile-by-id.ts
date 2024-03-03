import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useProfileById = (id: string) => {
  return useQuery({
    queryKey: ["profiles", id],
    queryFn: () => {
      if (!id) return Promise.resolve(null);

      return zodios.getProfileById({
        params: {
          profileId: id,
        },
      });
    },
  });
};
