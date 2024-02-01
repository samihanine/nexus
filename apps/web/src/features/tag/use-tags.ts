import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useTags = (workspaceId: string) => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () =>
      zodios.getTagsByWorkspaceId({
        params: {
          workspaceId,
        },
      }),
  });
};
