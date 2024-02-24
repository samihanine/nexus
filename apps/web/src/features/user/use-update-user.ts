import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["users"],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.updateUser>[0] & {
        id: string;
      }
    ) => {
      return await zodios.updateUser(data, {
        params: {
          userId: data.id,
        },
      });
    },
  });
};
