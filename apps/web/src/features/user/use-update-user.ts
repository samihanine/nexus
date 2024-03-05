import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "./use-current-user";

export const useUpdateUser = () => {
  const { refetch } = useCurrentUser();
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
