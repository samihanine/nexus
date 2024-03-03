export function Detail(property: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-muted-foreground">{property.label}</p>
      <p className="text-base font-medium">{property.value}</p>
    </div>
  );
}
