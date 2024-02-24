import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useProfileUserById = (id: string) => {
  return useQuery({
    queryKey: ["profile-users", id],
    queryFn: () =>
      zodios.getProfileUserById({
        params: {
          profileUserId: id,
        },
      }),
  });
};
