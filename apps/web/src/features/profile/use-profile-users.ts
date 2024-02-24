import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useProfileUsersByUserId = (userId: string) => {
  return useQuery({
    queryKey: ["profile-users", userId],
    queryFn: () =>
      zodios.getProfileUsersByUserId({
        params: {
          userId,
        },
      }),
  });
};
