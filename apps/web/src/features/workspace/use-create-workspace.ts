import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: zodios.createWorkspace,
    onSuccess: (workspace) => {
      queryClient.refetchQueries({
        queryKey: ["workspaces"],
      });

      router.push(`/workspace/${workspace.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
