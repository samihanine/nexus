import BuyerProfileDetails from "@/features/buyer/buyer-profile-details";
import { useProfileById } from "@/features/profile/use-profile-by-id";
import { LoadingView, Section } from "@nexus/ui";
import { notFound } from "next/navigation";

export default function Page(props: {
  params: {
    profile: string;
  };
}) {
  const { data: profile, isPending } = useProfileById(props.params.profile);

  if (isPending) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  if (profile?.buyer) {
    return (
      <Section>
        <BuyerProfileDetails profile={profile} buyer={profile.buyer} />
      </Section>
    );
  }

  return notFound();
}
