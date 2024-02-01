import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useGoogleCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const token = searchParams.get("accessToken");
    if (token && localStorage) {
      localStorage.setItem("token", token);
      queryClient.refetchQueries({
        queryKey: ["users"],
      });
      router.push("/");
    }
  }, [searchParams]);

  return null;
};
