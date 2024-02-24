import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUploadImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["uploadImage"],
      });
    },
    mutationFn: async (data: Parameters<typeof zodios.uploadImage>[0]) => {
      return await zodios.uploadImage(data);
    },
  });
};
