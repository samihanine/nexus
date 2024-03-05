import zodios from "@/lib/zodios";
import { useQuery } from "@tanstack/react-query";

export const useSearchBuyers = (props: {
  profileId: string;
  limit?: number;
  offset?: number;
}) => {
  return useQuery({
    queryKey: ["buyers", props.profileId, props.limit, props.offset],
    queryFn: () =>
      zodios.searchBuyers({
        queries: props,
      }),
  });
};
