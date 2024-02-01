import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./button";
import Divider from "./divider";

type StepsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  steps: string[];
  currentStep: number;
  handlePreviousStep: () => void;
  isLoading?: boolean;
  isNextStepHidden?: boolean;
  isPreviousStepHidden?: boolean;
};

const Steps = ({
  steps,
  currentStep,
  isNextStepHidden,
  isPreviousStepHidden,
  handlePreviousStep,
  children,
  isLoading,
  ...props
}: StepsProps) => {
  return (
    <div
      {...props}
      className={`flex h-full w-full flex-col ${props.className || ""}`}
    >
      <div className="flex h-12 items-center justify-between gap-2">
        {!isPreviousStepHidden ? (
          <Button
            className="flex !h-full gap-4"
            type="button"
            variant={"outline"}
            onClick={handlePreviousStep}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span className="hidden sm:flex">Previous</span>
          </Button>
        ) : (
          <div></div>
        )}

        <h2 className="flex gap-2 text-center text-base font-medium sm:text-xl">
          {steps.length > 1 && (
            <span className="mr-3">
              {currentStep} / {steps.length}
            </span>
          )}
          {steps[currentStep - 1]}
        </h2>

        {!isNextStepHidden ? (
          <Button
            loading={isLoading}
            type="submit"
            className={`flex gap-4 ${
              currentStep === steps.length ? "!bg-purple-500 !text-white " : ""
            }`}
          >
            {currentStep === steps.length ? (
              <>
                <span className="hidden sm:flex">Finish</span>
                <CheckIcon className="h-5 w-5" />
              </>
            ) : (
              <>
                <span className="hidden sm:flex">Next</span>{" "}
                <ChevronRightIcon className="h-5 w-5" />
              </>
            )}
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <Divider className="w-full" />
      <div className="flex h-full w-full items-center gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={{
              enter: { opacity: 0, y: 100 },
              center: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 0 },
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Steps;
