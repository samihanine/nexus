import * as React from "react";
import { Check, X, ChevronsUpDown } from "lucide-react";
import { Button } from "./button";
import { Chip } from "./chip";
import { Popover } from "./popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { cn } from "@nexus/utils";

type OptionType = {
  label: string;
  value: string;
  color?: string;
};

type MultiSelectProps = {
  options: OptionType[];
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
};

export function MultiSelect({
  options,
  selected,
  onChange,
  className,
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  return (
    <>
      <Popover
        setOpenPopover={setOpen}
        openPopover={open}
        {...props}
        content={
          <Command>
            <CommandInput placeholder="Search ..." />
            <CommandEmpty>Aucun élément trouvé.</CommandEmpty>
            <CommandGroup className="max-h-64 !overflow-auto">
              {options
                .sort((a, b) =>
                  a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
                )
                .map((option) => (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      onChange(
                        selected.includes(option.value)
                          ? selected.filter((item) => item !== option.value)
                          : [...selected, option.value]
                      );
                      setOpen(true);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selected.includes(option.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </Command>
        }
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between !rounded-full ${
            selected.length > 1 ? "h-full" : "h-10"
          } ${className}`}
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-wrap items-center gap-1">
            {selected.map((item) => (
              <Chip
                key={item}
                className="!text-xs"
                variant={
                  options.find((option) => option.value === item)?.color ||
                  undefined
                }
              >
                {options.find((option) => option.value === item)?.label}
                <button className="ml-1 rounded-full outline-none ring-0 ring-offset-background">
                  <X
                    className="h-4 w-4 text-red-500"
                    onClick={() => handleUnselect(item)}
                  />
                </button>
              </Chip>
            ))}
            {selected.length === 0 && (
              <span className="text-sm text-muted-foreground">Choisir</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </Popover>
    </>
  );
}
