import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTagToDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (props: { tagId: string; documentId: string }) =>
      zodios.addTagToDocument(undefined, {
        params: {
          tagId: props.tagId,
          documentId: props.documentId,
        },
      }),
    onSuccess: (data) => {
      queryClient.refetchQueries({
        queryKey: ["documents", data.id],
      });
    },
  });
};
