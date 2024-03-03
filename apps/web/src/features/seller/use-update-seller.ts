import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateSeller = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async (data) => {
      queryClient.refetchQueries({
        queryKey: ["profiles", data.profileId],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.updateSeller>[0] & {
        id: string;
      }
    ) => {
      return await zodios.updateSeller(data, {
        params: {
          sellerId: data.id,
        },
      });
    },
  });
};
