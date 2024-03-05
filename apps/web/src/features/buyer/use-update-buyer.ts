import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateBuyer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async (data) => {
      queryClient.refetchQueries({
        queryKey: ["buyers", data.profileId],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.updateBuyer>[0] & {
        id: string;
      }
    ) => {
      return await zodios.updateBuyer(data, {
        params: {
          buyerId: data.id,
        },
      });
    },
  });
};
