import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: zodios.getCurrentUser,
  });
};
