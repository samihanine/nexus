import { Buyer, Profile } from "@nexus/schemas";
import BuyerProfileDetails from "./buyer-profile-details";

export default function BuyerProfileEditor({
  buyer,
  profile,
}: {
  buyer: Buyer;
  profile: Profile;
}) {
  return (
    <>
      <BuyerProfileDetails buyer={buyer} profile={profile} />
    </>
  );
}
