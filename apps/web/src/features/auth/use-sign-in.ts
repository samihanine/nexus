import zodios from "@/lib/zodios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../user/use-current-user";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { refetch } = useCurrentUser();

  return useMutation({
    mutationFn: zodios.signIn,
    onSuccess: async (data) => {
      localStorage.setItem("token", data.accessToken);
      queryClient.refetchQueries({
        queryKey: ["users"],
      });
      await refetch();
      router.push("/");
    },
  });
};
