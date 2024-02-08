import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProperty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: async () => {
      queryClient.refetchQueries({
        queryKey: ["properties"],
      });
    },
    mutationFn: async (
      data: Parameters<typeof zodios.updateProperty>[0] & {
        id: string;
      }
    ) => {
      return await zodios.updateProperty(data, {
        params: {
          propertyId: data.id,
        },
      });
    },
  });
};
