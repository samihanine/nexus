import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteWorkspaceUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (props: { workspaceId: string; userId: string }) =>
      zodios.deleteWorkspaceUser(undefined, {
        params: {
          workspaceId: props.workspaceId,
          userId: props.userId,
        },
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["workspace-users"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
