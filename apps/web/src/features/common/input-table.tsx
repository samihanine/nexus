import { Card, Input, Switch } from "@nexus/ui";
import { cn } from "@nexus/utils";

export default function InputTable(props: {
  inputs: {
    label: string;
    value: any;
    type: string;
    onChange: (value: any) => void;
  }[];
}) {
  return (
    <div className="flex flex-col">
      {props.inputs.map((input, index) => (
        <div key={index} className="border-t border-t-border flex">
          <div className="w-32 sm:flex-1 font-medium border-r border-r-border py-2 px-4 flex items-center">
            {input.label}
          </div>
          <div className="flex-[2] py-2 px-4">
            {input.type === "SHORT_NUMBER" && (
              <SelectNumber
                value={input.value}
                onSelect={(value) => input.onChange(value)}
              />
            )}

            {input.type === "NUMBER" && (
              <Input
                type="number"
                className="text-sm !h-10"
                value={input.value as number}
                onChange={(e) => input.onChange(Number(e.target.value))}
              />
            )}

            {input.type === "BOOLEAN" && (
              <Switch
                checked={input.value as boolean}
                onCheckedChange={(v) => input.onChange(v)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const SelectNumber = ({
  value,
  onSelect,
}: {
  value: number;
  onSelect: (v: number) => void;
}) => {
  const options = [
    {
      value: 0,
      label: "Tous",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6+",
    },
  ];

  return (
    <div className="flex flex-col py-2 sm:py-0 sm:flex-row">
      {options.map((option, index) => (
        <div
          className={cn(
            "px-3 sm:px-5 h-8 sm:h-10 flex items-center border-l sm:border-l-0 border-y border-input border-r cursor-pointer",
            index === 0 && "sm:!border-l sm:rounded-l-lg",
            index === options.length - 1 && "sm:rounded-r-lg",
            value === option.value &&
              "border-primary bg-secondary bg-opacity-15 !border-l border-r"
          )}
          onClick={() => onSelect(option.value)}
          key={index}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};
