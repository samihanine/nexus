import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useWorkspaceInvitations = (workspaceId: string) => {
  return useQuery({
    queryKey: ["workspace-invitations"],
    queryFn: () =>
      zodios.getWorkspaceInvitations({
        params: {
          workspaceId,
        },
      }),
  });
};
