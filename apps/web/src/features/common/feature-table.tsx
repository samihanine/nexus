import { Chip } from "@nexus/ui";

export default function FeatureTable(props: {
  features: {
    label: string;
    value?: string | number;
    percentage?: number;
  }[];
}) {
  return (
    <div className="flex flex-col">
      {props.features.map((feature, index) => {
        if (!feature.value) return <></>;

        return (
          <div key={index} className="border-t border-t-border flex">
            <div className="flex-1 bg-gray-100 border-r border-r-border text-sm font-medium py-2 px-4">
              {feature.label}
            </div>
            <div className="flex-1 py-2 px-4 flex items-center gap-3">
              <p className="font-medium text-sm">{feature.value}</p>
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
