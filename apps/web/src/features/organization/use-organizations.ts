import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useOrganizations = () => {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: zodios.getOrganizations,
  });
};
