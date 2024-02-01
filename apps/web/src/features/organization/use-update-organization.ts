import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateOrganization = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      props: Parameters<typeof zodios.updateOrganization>[0] & {
        id: string;
      }
    ) =>
      zodios.updateOrganization(props, {
        params: {
          organizationId: props.id,
        },
      }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["organizations"],
      });
    },
  });
};
