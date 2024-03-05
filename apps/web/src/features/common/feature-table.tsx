import { Chip } from "@nexus/ui";

export default function FeatureTable(props: {
  features: {
    label: string;
    value?: string | number | boolean;
    percentage?: number;
  }[];
}) {
  return (
    <div className="flex flex-col">
      {props.features.map((feature, index) => {
        if (!feature.value) return <></>;

        return (
          <div key={index} className="border-t border-t-border flex">
            <div className="w-32 sm:flex-1 border-r border-r-border font-medium py-2 px-4">
              {feature.label}
            </div>
            <div className="flex-[2] py-2 px-4 flex items-center gap-3">
              <p className="">
                {typeof feature.value === "boolean" && "Yes"}
                {typeof feature.value === "number" && feature.value}
                {typeof feature.value === "string" && feature.value}
              </p>
              {feature.percentage && (
                <Chip
                  variant={
                    feature.percentage > 0
                      ? feature.percentage >= 100
                        ? "green"
                        : "yellow"
                      : "red"
                  }
                >
                  {feature.percentage}%
                </Chip>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
