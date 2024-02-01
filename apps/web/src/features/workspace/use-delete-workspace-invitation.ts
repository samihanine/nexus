import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteWorkspaceInvitation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (props: { workspaceId: string; invitationId: string }) =>
      zodios.deleteWorkspaceInvitation(undefined, {
        params: {
          workspaceId: props.workspaceId,
          invitationId: props.invitationId,
        },
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["workspace-invitations"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
