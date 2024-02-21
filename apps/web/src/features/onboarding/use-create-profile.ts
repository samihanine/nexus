import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["profiles"],
      });
    },
    mutationFn: async (data: Parameters<typeof zodios.createProfile>[0]) => {
      return await zodios.createProfile(data);
    },
  });
};
