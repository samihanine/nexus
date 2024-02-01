import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useWorkspace = (workspaceId: string) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId],

    queryFn: () =>
      zodios.getWorkspaceById({
        params: {
          workspaceId,
        },
      }),
  });
};
