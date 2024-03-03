import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateBroker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async (data) => {
      queryClient.refetchQueries({
        queryKey: ["profiles", data.profileId],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.updateBroker>[0] & {
        id: string;
      }
    ) => {
      return await zodios.updateBroker(data, {
        params: {
          brokerId: data.id,
        },
      });
    },
  });
};
