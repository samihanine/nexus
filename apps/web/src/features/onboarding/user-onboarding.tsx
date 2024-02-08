import { Card, CardContent, CardHeader, H3, Muted } from "@nexus/ui";
import StepButtons from "./step-buttons";
import { cn } from "@nexus/utils";
import StepTitle from "./step-title";
import { useCurrentUser } from "../user/use-current-user";

const UserOnboarding = ({
  setUserType,
  userType,
  setStep,
}: {
  setUserType: React.Dispatch<React.SetStateAction<string | undefined>>;
  userType: string | undefined;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data: user } = useCurrentUser();

  return (
    <>
      <StepTitle
        title={`Bonjour ${
          user?.name || ""
        }, répondez à quelques questions rapides pour voir comment
        nous pouvons vous aider.`}
      />

      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3">
        <AccountCard
          title="Je suis vendeur"
          description="Entrez en contact avec des milliers d'acheteurs pour vendre votre maison au meilleur prix."
          onClick={() => {
            setUserType("SELLER");
          }}
          active={userType === "SELLER"}
        />
        <AccountCard
          title="Je suis acheteur"
          description="Laissez-nous vous aider à trouver rapidement la maison de vos rêves."
          onClick={() => {
            setUserType("BUYER");
          }}
          active={userType === "BUYER"}
        />
        <AccountCard
          title="Je suis courtier immobilier"
          description="Laissez-nous vous aider à trouver rapidement la maison de vos rêves."
          onClick={() => {
            setUserType("BROKER");
          }}
          active={userType === "BROKER"}
        />
      </div>

      <StepButtons
        handleNextStep={() => setStep((oldStep) => oldStep + 1)}
        isNextStepDisabled={!userType}
        isPreviousStepDisabled={true}
      />
    </>
  );
};

const AccountCard = ({
  title,
  description,
  active,
  ...props
}: React.ComponentProps<typeof Card> & {
  title: string;
  description: string;
  active?: boolean;
}) => {
  return (
    <Card
      {...props}
      className={cn(
        "flex flex-col gap-4 hover:bg-secondary cursor-pointer transition-colors duration-200 ease-in-out",
        active && "bg-secondary"
      )}
    >
      <CardHeader>
        <div className="w-full mx-auto max-w-[220px] aspect-square bg-gray-300 rounded-xl" />
      </CardHeader>
      <CardContent className="space-y-2">
        <H3 className="text-center">{title}</H3>
        <Muted className="text-center">{description}</Muted>
      </CardContent>
    </Card>
  );
};

export default UserOnboarding;
