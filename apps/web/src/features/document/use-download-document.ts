import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDownloadDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (documentId: string) =>
      zodios.getDocumentBase64ById({
        params: {
          documentId,
        },
      }),
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
