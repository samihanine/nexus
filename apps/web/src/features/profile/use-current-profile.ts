import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useCurrentProfile = () => {
  return useQuery({
    queryKey: ["current-profile"],
    queryFn: zodios.getCurrentProfile,
  });
};
