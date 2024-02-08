import { Button } from "@nexus/ui";

const StepButtons = (
  props: React.ComponentProps<"div"> & {
    handleNextStep?: () => void;
    handlePreviousStep?: () => void;
    isNextStepDisabled?: boolean;
    isPreviousStepDisabled?: boolean;
    isLastStep?: boolean;
  }
) => {
  return (
    <div className="flex gap-4 self-center flex-col w-full justify-center items-center">
      <Button
        variant={"secondary"}
        className="max-w-[280px]"
        disabled={props.isNextStepDisabled}
        onClick={props.handleNextStep}
      >
        {props.isLastStep ? "Terminer" : "Suivant"}
      </Button>

      {!props.isPreviousStepDisabled && (
        <Button
          className="!w-fit"
          variant={"ghost"}
          onClick={props.handlePreviousStep}
        >
          Précédent
        </Button>
      )}
    </div>
  );
};

export default StepButtons;
