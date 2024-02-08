import { cn } from "@nexus/utils";
import type { Address } from "@prisma/client";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { useAutocompleteAddress } from "./use-autocomplete-address";
import { P } from "@nexus/ui";
import { MapPin } from "lucide-react";

const AddressAutocomplete = ({
  setAddress,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input"> & {
  setAddress: (address: Partial<Address>) => void;
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Partial<Address>[]>([]);
  const autocompleteAddressMutation = useAutocompleteAddress();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedQueryChange = useCallback(
    debounce(async (query) => {
      const result = await autocompleteAddressMutation.mutateAsync(query);
      setLoading(false);
      setSuggestions(result);
    }, 1000),
    []
  );

  const handleQueryChange = (query: string) => {
    setQuery(query);
    if (query.length < 3) return;
    setLoading(true);
    if (!open) setOpen(true);
    debouncedQueryChange(query);
  };

  return (
    <div className="relative w-full">
      <input
        {...props}
        type="text"
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        placeholder="Entrez une adresse ou une ville"
        className={cn("outline-none border-none ring-0", className)}
      />
      {open && (
        <div className="absolute bg-background mt-2 w-full h-fit z-[999] shadow-lg border border-border rounded-md p-3 flex flex-col gap-3">
          {!loading && (
            <>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setAddress(suggestion);
                    setQuery(suggestion.formattedAddress || query);
                    setOpen(false);
                  }}
                  className="font-medium flex items-center"
                >
                  <div className="w-max">
                    <MapPin className="w-5 h-5 mr-2" />
                  </div>
                  <span className="line-clamp-1 cursor-pointer">
                    {suggestion.formattedAddress}
                  </span>
                </div>
              ))}

              {suggestions.length === 0 && (
                <P className="text-center">Aucune addresse trouvée</P>
              )}
            </>
          )}

          {loading && (
            <P className="text-center">Chargement des addresses...</P>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
