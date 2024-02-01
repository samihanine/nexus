import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Workspace } from "@nexus/schemas";
import Link from "next/link";
import WorkspaceDropdown from "@/features/workspace/workspace-dropdown";
import Logo from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";
import UserDropdown from "@/features/user/user-dropdown";

const Header = ({
  workspaces,
  workspaceId,
  userEmail,
  userImageUrl,
  userName,
  isUserAdmin,
}: {
  workspaces: Workspace[];
  workspaceId?: string;
  userName: string;
  userEmail: string;
  userImageUrl?: string;
  isUserAdmin: boolean;
}) => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-b border-r border-border border-b-border bg-background px-7">
      <Link href="/" className="flex items-center gap-3">
        <Logo className="h-6 w-6" />
        <h1 className="hidden text-xl font-medium sm:flex">nexus</h1>
      </Link>

      <div className="flex items-center gap-2">
        {workspaces.length > 0 && !!workspaceId && (
          <>
            <WorkspaceDropdown
              workspaces={workspaces.map((item) => ({
                name: item.name,
                id: item.id,
              }))}
              workspaceId={workspaceId}
            />

            {isUserAdmin && (
              <Link href={`/workspace/${workspaceId}/settings`}>
                <Cog6ToothIcon className="h-5 w-5" />
              </Link>
            )}
          </>
        )}
      </div>

      <div className="flex items-center gap-5">
        <ThemeSwitcher />

        <UserDropdown name={userName} email={userEmail} image={userImageUrl} />
      </div>
    </div>
  );
};

export default Header;
