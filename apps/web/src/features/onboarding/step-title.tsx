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
      <div className="self-center">
        <Logo className=" text-foreground w-12 h-12" />
      </div>

      <div className="flex flex-col w-full">
        {percentage !== undefined && <ProgressBar percentage={percentage} />}

        <H3 className="text-center mt-10 mb-2">{title}</H3>
        {description && <Muted className="text-center">{description}</Muted>}
      </div>
    </>
  );
};

export default StepTitle;
