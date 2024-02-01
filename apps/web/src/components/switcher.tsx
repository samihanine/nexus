export const SwitcherTab = ({
  active,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  active?: boolean;
}) => {
  return (
    <div
      {...props}
      className={`flex h-9 cursor-pointer flex-1 items-center justify-center rounded-md text-center text-sm font-medium hover:bg-secondary ${
        active ? "bg-secondary" : ""
      } ${className}`}
    />
  );
};

const Switcher = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={`flex gap-2 rounded-lg bg-background p-2 ${className}`}
    />
  );
};

export default Switcher;
