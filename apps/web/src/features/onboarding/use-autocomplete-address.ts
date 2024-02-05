import zodios from "@/lib/zodios";
import { useMutation } from "@tanstack/react-query";

export const useAutocompleteAddress = () => {
  return useMutation({
    mutationFn: (query: string) =>
      zodios.autocompleteAddress({
        queries: {
          query,
        },
      }),
  });
};
