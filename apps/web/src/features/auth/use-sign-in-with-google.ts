import zodios from "@/lib/zodios";
import { useMutation } from "@tanstack/react-query";

export const useSignInWithGoogle = () => {
  return useMutation({
    mutationFn: zodios.signInWithGoogle,
    onSuccess: (data) => {
      window.location.href = data.url;
    },
  });
};
