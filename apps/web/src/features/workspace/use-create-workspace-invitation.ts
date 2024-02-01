import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateWorkspaceInvitation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (props: { workspaceId: string; email: string; role: string }) =>
      zodios.createWorkspaceInvitation(props, {
        params: {
          workspaceId: props.workspaceId,
        },
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["workspace-invitations"],
      });

      queryClient.refetchQueries({
        queryKey: ["workspace-users"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
