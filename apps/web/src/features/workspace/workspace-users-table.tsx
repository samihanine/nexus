import Avatar from "@nexus/ui/avatar";
import { Chip } from "@nexus/ui/chip";
import DataTable from "@nexus/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Button from "@nexus/ui/button";
import { useDeleteWorkspaceUser } from "./use-delete-workspace-user";

type Member = {
  user?: {
    name: string;
    email: string;
    imageUrl?: string | null;
    id: string;
  } | null;
  role: string;
  userId: string;
  workspaceId: string;
};

function WorkspaceUsersTable(props: { workspaceUsers: Member[] }) {
  const deleteWorkspaceUser = useDeleteWorkspaceUser();

  const columns: ColumnDef<Member>[] = [
    {
      id: "title",
      accessorKey: "title",
      header: "Titre",
      cell: (ctx) => {
        const row = ctx.row.original;

        return (
          <div className="text-sm font-medium flex items-center">
            {row.user?.imageUrl && (
              <Avatar className="mr-2 w-7 h-7" src={row.user?.imageUrl} />
            )}
            {row.user?.name}
          </div>
        );
      },
    },
    {
      id: "email",
      accessorKey: "email",
      header: "Email",
      cell: (ctx) => {
        const row = ctx.row.original;

        return (
          <>
            <Chip className="text-sm font-medium">{row.user?.email}</Chip>
          </>
        );
      },
    },
    {
      id: "role",
      accessorKey: "role",
      header: "Role",
      cell: (ctx) => {
        const row = ctx.row.original;

        return (
          <>
            {row.role === "ADMINISTRATOR" && (
              <Chip variant="yellow" className="text-sm font-medium">
                {row.role}
              </Chip>
            )}
            {row.role === "CUSTOMER" && (
              <Chip variant="blue" className="text-sm font-medium">
                {row.role}
              </Chip>
            )}
            {row.role === "MANAGER" && (
              <Chip variant="red" className="text-sm font-medium">
                {row.role}
              </Chip>
            )}
          </>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: (ctx) => {
        const row = ctx.row.original;

        const handleDelete = async () => {
          const confirm = window.confirm(
            "Êtes-vous sûr de vouloir retirer ce membre ?"
          );

          if (!confirm) {
            return;
          }

          await deleteWorkspaceUser.mutateAsync({
            userId: row.userId,
            workspaceId: row.workspaceId,
          });
        };

        return (
          <div className="flex gap-2">
            <Button
              type="button"
              variant={"destructive"}
              onClick={handleDelete}
            >
              Retirer
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <DataTable
      data={props.workspaceUsers}
      columns={columns}
      emptyMessage="Aucune données"
    />
  );
}

export default WorkspaceUsersTable;
