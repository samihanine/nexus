import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateWorkspace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      props: Parameters<typeof zodios.updateWorkspace>[0] & {
        id: string;
      }
    ) =>
      zodios.updateWorkspace(props, {
        params: {
          workspaceId: props.id,
        },
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["workspaces"],
      });
    },
  });
};
