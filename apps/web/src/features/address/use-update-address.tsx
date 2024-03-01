import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["addresses"],
      });
    },
    mutationFn: async (data: Parameters<typeof zodios.updateAddress>[0]) => {
      return await zodios.updateAddress(data, {
        params: {
          addressId: data.id,
        },
      });
    },
  });
};
