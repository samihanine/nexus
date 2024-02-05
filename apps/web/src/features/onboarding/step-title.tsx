import { ProgressBar, H3, Muted, Logo } from "@nexus/ui";

const StepTitle = ({
  title,
  description,
  percentage,
}: {
  title: string;
  description?: string;
  percentage?: number;
}) => {
  return (
    <>
      <Logo className="self-center text-foreground w-12 h-12" />

      <div className="flex flex-col w-full">
        {percentage && <ProgressBar percentage={percentage} />}

        <H3 className="text-center mt-10 mb-2">{title}</H3>
        {description && <Muted className="text-center">{description}</Muted>}
      </div>
    </>
  );
};

export default StepTitle;
