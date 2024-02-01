import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useCreateOrganization = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: zodios.createOrganization,
    onSuccess: (data) => {
      queryClient.refetchQueries({
        queryKey: ["organizations"],
      });
      router.push(`/${data.id}`);
    },
  });
};
