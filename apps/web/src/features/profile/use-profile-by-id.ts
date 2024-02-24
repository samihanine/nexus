import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useProfileById = (id: string) => {
  return useQuery({
    queryKey: ["profiles", id],
    queryFn: () =>
      zodios.getProfileById({
        params: {
          profileId: id,
        },
      }),
  });
};
