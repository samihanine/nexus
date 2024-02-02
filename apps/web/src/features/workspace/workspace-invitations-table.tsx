import { Chip } from "@nexus/ui/chip";
import DataTable from "@nexus/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Button from "@nexus/ui/button";
import { useDeleteWorkspaceInvitation } from "./use-delete-workspace-invitation";

type Member = {
  email: string;
  role: string;
  id: string;
  workspaceId: string;
  createdAt?: string | null;
};

function WorkspaceInvitationsTable(props: { workspaceInvitations: Member[] }) {
  const deleteWorkspaceInvitation = useDeleteWorkspaceInvitation();

  const columns: ColumnDef<Member>[] = [
    {
      id: "createdAt",
      accessorKey: "createdAt",
      header: "Date d'invitation",
      cell: (ctx) => {
        const row = ctx.row.original;

        return (
          <>
            <p className="text-sm text-foreground font-medium">
              {new Date(row.createdAt || "").toLocaleDateString()}{" "}
              {new Date(row.createdAt || "").toLocaleTimeString().slice(0, 5)}
            </p>
          </>
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
            <Chip className="text-sm font-medium">{row.email}</Chip>
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

          await deleteWorkspaceInvitation.mutateAsync({
            invitationId: row.id,
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
      data={props.workspaceInvitations}
      columns={columns}
      emptyMessage="Aucune données"
    />
  );
}

export default WorkspaceInvitationsTable;
