import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useSearchProperties = (props: {
  profileId: string;
  limit?: number;
  offset?: number;
}) => {
  return useQuery({
    queryKey: ["properties", props.profileId, props.limit, props.offset],
    queryFn: () =>
      zodios.searchProperties({
        queries: props,
      }),
  });
};
