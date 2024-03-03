import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentProfile } from "../profile/use-current-profile";

export const useCreateBroker = () => {
  const queryClient = useQueryClient();
  const { refetch } = useCurrentProfile();

  return useMutation({
    onSuccess: async (data) => {
      queryClient.refetchQueries({
        queryKey: ["profiles"],
      });
    },
    mutationFn: async (data: Parameters<typeof zodios.createBroker>[0]) => {
      const result = await zodios.createBroker(data);
      await refetch();
      return result;
    },
  });
};
