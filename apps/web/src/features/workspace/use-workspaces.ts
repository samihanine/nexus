import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "../user/use-current-user";

export const useWorkspaces = () => {
  const { data: user } = useCurrentUser();

  return useQuery({
    queryKey: ["workspaces", user?.id],
    queryFn: async () => {
      if (!user?.id) {
        return [];
      }

      return await zodios.getWorkspacesByUserId({
        params: {
          userId: user?.id,
        },
      });
    },
  });
};
