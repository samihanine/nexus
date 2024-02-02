"use client";

import {
  ChartBarIcon,
  EnvelopeIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "@nexus/ui/menu-item";

const WorkspaceSidebar = ({ workspaceId }: { workspaceId: string }) => {
  return (
    <div className="hidden h-full w-64 flex-col justify-between border-r border-border bg-background sm:flex">
      <div className="flex flex-grow flex-col justify-between">
        <nav className="flex flex-col gap-2 p-5">
          <MenuItem exact href={`/workspace/${workspaceId}`}>
            <HomeIcon className="h-5 w-5" /> Accueil
          </MenuItem>

          <MenuItem href={`/workspace/${workspaceId}/upload`}>
            <UserCircleIcon className="h-5 w-5" /> Téléverser
          </MenuItem>

          <MenuItem href={`/workspace/${workspaceId}/document`}>
            <EnvelopeIcon className="h-5 w-5" /> Documents
          </MenuItem>

          <MenuItem href={`/workspace/${workspaceId}/user`}>
            <ChartBarIcon className="h-5 w-5" /> Utilisateurs
          </MenuItem>
        </nav>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;
