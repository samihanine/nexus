import Card from "./card";

export type MultiSelectIconProps<T> = {
  items: {
    label: string;
    value: T;
    Icon: React.FunctionComponent<any>;
    disabled?: boolean;
  }[];
  selected: T[];
  setSelected: (value: T[]) => void;
  maxItems?: number;
};

const MultiSelectIcon = <T extends unknown>({
  items,
  selected,
  setSelected,
  maxItems,
}: MultiSelectIconProps<T>) => {
  return (
    <>
      {items.map((item, index) => {
        const isSelected = selected.includes(item.value);

        return (
          <Card
            key={index}
            className={`flex flex-1 items-center p-6 gap-3 font-medium ${
              item.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } ${isSelected ? "!border-foreground" : ""}`}
            onClick={() => {
              if (!item.disabled) {
                if (isSelected) {
                  setSelected(selected.filter((i) => i !== item.value));
                } else {
                  if (maxItems === 1) {
                    setSelected([item.value]);
                    return;
                  }

                  if (maxItems && selected.length >= maxItems) {
                    return;
                  }
                  setSelected([...selected, item.value]);
                }
              }
            }}
          >
            <item.Icon className="h-5 w-5" />
            {item.label}
          </Card>
        );
      })}
    </>
  );
};

export default MultiSelectIcon;
