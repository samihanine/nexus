import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useWorkspaceUsers = (workspaceId: string) => {
  return useQuery({
    queryKey: ["workspace-users"],
    queryFn: () =>
      zodios.getWorkspaceUsers({
        params: {
          workspaceId,
        },
      }),
  });
};
