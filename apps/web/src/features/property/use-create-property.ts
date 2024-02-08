import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateProperty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["properties"],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.createProperty>[0]
    ) => {
      return await zodios.createProperty(data);
    },
  });
};
