import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["profiles"],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.updateProfile>[0] & {
        id: string;
      }
    ) => {
      return await zodios.updateProfile(data, {
        params: {
          profileId: data.id,
        },
      });
    },
  });
};
