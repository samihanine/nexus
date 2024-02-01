import zodios from "@/lib/zodios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: zodios.signUpWithPassword,
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      router.push("/");
    },
  });
};
