"use client";

import Popover from "@nexus/ui/popover";
import { LogOut } from "lucide-react";
import { useState } from "react";
import Button from "@nexus/ui/button";
import Avatar from "@nexus/ui/avatar";
import { useSignOut } from "features/auth/use-sign-out";

export default function UserDropdown({
  email,
  image,
  name,
}: {
  email: string;
  name: string;
  image?: string;
}) {
  const [openPopover, setOpenPopover] = useState(false);
  const signout = useSignOut();

  return (
    <>
      <Popover
        content={
          <div className="flex w-full flex-col items-center gap-3 rounded-md bg-background p-4 sm:w-56">
            <p className="text-sm font-medium text-muted-foreground">{email}</p>
            <Button
              variant={"destructive"}
              loading={signout.isPending}
              onClick={() => signout.mutate()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <p className="text-sm">Sign out</p>
            </Button>
          </div>
        }
        align="start"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex items-center gap-3 font-medium"
        >
          <p className="capitalize text-muted-foreground">{name}</p>
          <Avatar alt={email} src={image} className="h-8 w-8" />
        </button>
      </Popover>
    </>
  );
}
