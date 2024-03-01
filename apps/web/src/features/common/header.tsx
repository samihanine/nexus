"use client";

import Link from "./link";
import {
  Avatar,
  Button,
  Chip,
  LogoText,
  Muted,
  Popover,
  IconButton,
  Section,
} from "@nexus/ui";
import { useCurrentUser } from "../user/use-current-user";
import { useCurrentProfile } from "../profile/use-current-profile";
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  ChevronUpIcon,
  PlusIcon,
  EnvelopeIcon,
  UserIcon,
  UserGroupIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {  useState } from "react";
import { useProfiles } from "../profile/use-profiles";
import { Profile } from "@nexus/schemas";
import { cn } from "@nexus/utils";
import { useRouter } from "next/navigation";
import { useUpdateUser } from "../user/use-update-user";
import { useMediaQuery } from "@nexus/hooks";

const Header = () => {
  const updateUserMutation = useUpdateUser();
  const { data: user, isPending: isUserPending } = useCurrentUser();
  const { data: profile, isPending, refetch } = useCurrentProfile();
  const { data: profiles = [], isPending: isProfilesPending } = useProfiles();
  const [openPopover, setOpenPopover] = useState(false);
  const router = useRouter();
  const media = useMediaQuery();

  if (isPending || isUserPending || isProfilesPending) {
    return <></>;
  }

  const handleSwitchProfile = async (id: string) => {
    try {
      if (!user) return;
      await updateUserMutation.mutateAsync({
        id: user.id,
        currentProfileId: id,
      });
      await refetch();
      setOpenPopover(false);
      router.push(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  const tabs: {
    label: string;
    href: string;
    Icon: React.ComponentProps<any>;
  }[] = (() => {
    if (!profile) {
      return [];
    }

    if (profile.type === "BROKER") {
      return [
        { label: "Prospection", href: "/profiles", Icon: UserGroupIcon },
        { label: "Conversations", href: "/conversations", Icon: EnvelopeIcon },
        { label: "Mon profil public", href: "/my-profile", Icon: UserIcon },
      ];
    }

    if (profile.type === "SELLER") {
      return [
        { label: "Acheteurs", href: "/profiles", Icon: UserGroupIcon },
        { label: "Conversations", href: "/conversations", Icon: EnvelopeIcon },
        { label: "Ma propriété", href: "/my-property", Icon: HomeModernIcon },
      ];
    }

    if (profile.type === "BUYER") {
      return [
        { label: "Propriétés", href: "/properties", Icon: MagnifyingGlassIcon },
        { label: "Conversations", href: "/conversations", Icon: EnvelopeIcon },
        { label: "Mes critères", href: "/criteria", Icon: UserIcon },
      ];
    }

    return [];
  })();

  const PopoverContent = () => {
    if (!profile) {
      return <></>;
    }

    return (
      <div className="flex w-full flex-col gap-3 rounded-md p-3 bg-background sm:w-56">
        {profiles.map((p) => (
          <div
            key={p.id}
            className="w-full flex flex-col gap-3"
            onClick={() => handleSwitchProfile(p.id)}
          >
            <div
              className={cn(
                p.id === profile.id && "bg-gray-100",
                "rounded-xl p-2 cursor-pointer hover:bg-gray-100"
              )}
            >
              <ProfileCard
                imageUrl={p.imageUrl || undefined}
                type={p.type}
                firstName={p.firstName}
                lastName={p.lastName}
                id={p.id}
              />
            </div>
          </div>
        ))}
        <Link
          href="/onboarding"
          className="text-primary"
          onClick={() => setOpenPopover(false)}
        >
          <Button variant="outline" className="!outline-none !ring-0">
            <PlusIcon className="h-5 w-5 mr-2" />
            Ajouter un profil
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <>
      {(media.width || 0) > 768 && (
        <div className="border-b border-b-input !p-0 !w-full">
          <div className="flex py-3 w-full items-center justify-between bg-background max-w-7xl px-10 mx-auto">
            <Link href="/">
              <LogoText />
            </Link>

            {user && (
              <>
                <div className="flex items-center gap-8">
                  {tabs.map((tab) => (
                    <Link key={tab.href} href={tab.href}>
                      {tab.label}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {profile && (
                    <ProfileCard
                      imageUrl={profile.imageUrl || undefined}
                      type={profile.type}
                      firstName={profile.firstName}
                      lastName={profile.lastName}
                      id={profile.id}
                    />
                  )}

                  {profile && (
                    <Popover
                      content={<PopoverContent />}
                      align="end"
                      openPopover={openPopover}
                      setOpenPopover={setOpenPopover}
                    >
                      <div>
                        {openPopover && <IconButton Icon={ChevronUpIcon} />}
                        {!openPopover && <IconButton Icon={ChevronDownIcon} />}
                      </div>
                    </Popover>
                  )}

                  <Link href="/settings">
                    <IconButton Icon={Cog8ToothIcon} />
                  </Link>
                </div>
              </>
            )}

            {!user && (
              <div className="flex items-center gap-3">
                <Link href="/login">
                  <Button className="!w-fit !px-12">Se connecter</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {(media.width || 0) < 768 && (
        <nav className="z-[10000] text-gray-400 bg-white border-t border-input fixed bottom-0 left-0 right-0 flex justify-evenly px-4 py-4">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href}>
              <tab.Icon className="w-10 h-10" />
            </Link>
          ))}

          <Link href="/settings">
            <Cog8ToothIcon className="w-10 h-10" />
          </Link>

          {profile && (
            <Popover
              content={<PopoverContent />}
              align="end"
              openPopover={openPopover}
              setOpenPopover={setOpenPopover}
            >
              <Avatar
                src={profile.imageUrl || undefined}
                className="w-10 h-10 cursor-pointer"
                onClick={() => setOpenPopover(!openPopover)}
              />
            </Popover>
          )}
        </nav>
      )}
    </>
  );
};

function ProfileCard(props: {
  type: Profile["type"];
  imageUrl?: string;
  firstName: string;
  lastName: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-3 w-full">
      <Avatar className="w-11 h-11" src={props.imageUrl || undefined} />

      <div className="flex gap-[2px] flex-col">
        <Muted className="font-medium !text-sm">
          {props.firstName} {props.lastName}
        </Muted>

        {props.type === "BROKER" && (
          <Chip className="!py-[4px]" variant="green">
            Courtier
          </Chip>
        )}
        {props.type === "SELLER" && <Chip variant="blue">Vendeur</Chip>}
        {props.type === "BUYER" && <Chip variant="yellow">Acheteur</Chip>}
      </div>
    </div>
  );
}

export default Header;
