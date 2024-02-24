import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useProfiles = () => {
  return useQuery({
    queryKey: ["profiles"],
    queryFn: zodios.getProfiles,
  });
};
