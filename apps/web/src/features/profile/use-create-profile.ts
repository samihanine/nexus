import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentProfile } from "./use-current-profile";

export const useCreateProfile = () => {
  const queryClient = useQueryClient();
  const { refetch } = useCurrentProfile();
  return useMutation({
    onSuccess: async (data) => {
      queryClient.refetchQueries({
        queryKey: ["profiles"],
      });
      await refetch();
    },
    mutationFn: async (data: Parameters<typeof zodios.createProfile>[0]) => {
      return await zodios.createProfile(data);
    },
  });
};
