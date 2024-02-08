import zodios from "@/lib/zodios";
import { useMutation } from "@tanstack/react-query";

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: async (
      data: Parameters<typeof zodios.createAddress>[0]
    ) => {
      return await zodios.createAddress(data);
    },
  });
};
