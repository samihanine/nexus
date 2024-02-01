import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useDocuments = (workspaceId: string) => {
  return useQuery({
    queryKey: ["documents", workspaceId],
    queryFn: () =>
      zodios.getDocumentsByWorkspaceId({
        params: {
          workspaceId,
        },
      }),
  });
};
