import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUploadDocuments = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: zodios.uploadDocuments,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["documents"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
