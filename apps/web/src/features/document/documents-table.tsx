import Button from "@nexus/ui/button";
import Checkbox from "@nexus/ui/checkbox";
import { Chip } from "@nexus/ui/chip";
import DataTable from "@nexus/ui/data-table";
import { ArchiveBoxIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useDownloadDocument } from "./use-download-document";
import { useDeleteDocument } from "./use-delete-document";

type Documents = {
  name: string;
  mimeType: string;
  month: string;
  year: string;
  tagIds: string[];
  createdAt: Date;
  authorName: string;
  authorImageUrl: string;
  id: string;
  title: string;
  description: string;
};

export default function DocumentsTable({
  documents,
  tags,
}: {
  documents: Documents[];
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
}) {
  const downloadDocument = useDownloadDocument();
  const deleteDocument = useDeleteDocument();
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const columns: ColumnDef<Documents>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "title",
      accessorKey: "title",
      header: "Titre",
      cell: (ctx) => {
        const row = ctx.row.original;

        return <p className="text-sm font-medium">{row.title}</p>;
      },
    },
    {
      id: "tags",
      header: "Catégories",
      cell: (ctx) => {
        const row = ctx.row.original;
        const tagsFilter = row.tagIds
          .map((tagId) => tags.find((tag) => tag.id === tagId))
          .filter(Boolean);

        if (!tagsFilter.length)
          return (
            <p className="text-sm text-muted-foreground">Aucune catégorie</p>
          );
        return (
          <p className="text-sm font-medium">
            {tagsFilter.map((tag) => (
              <Chip className="text-sm font-medium" variant={tag?.color as any}>
                {tag?.name}
              </Chip>
            ))}
          </p>
        );
      },
    },
    {
      id: "month",
      accessorKey: "month",
      header: "Mois",
      cell: (ctx) => {
        const row = ctx.row.original;

        return <Chip className="text-sm font-medium">{row.month}</Chip>;
      },
    },
    {
      id: "year",
      accessorKey: "year",
      header: "Année",
      cell: (ctx) => {
        const row = ctx.row.original;

        return <Chip className="text-sm font-medium">{row.year}</Chip>;
      },
    },
    {
      id: "createdAt",
      accessorKey: "createdAt",
      header: "Date d'ajout",
      cell: (ctx) => {
        const row = ctx.row.original;

        return (
          <p className="text-sm text-muted-foreground">
            {new Date(row.createdAt).toLocaleDateString()}
          </p>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: (ctx) => {
        const row = ctx.row.original;

        const handleDownload = async () => {
          const result = await downloadDocument.mutateAsync(row.id);

          downloadPdf({
            base64: result.base64,
            mimeType: row.mimeType,
            fileName: row.name,
          });
        };

        const handleArchive = async () => {
          const confirm = window.confirm(
            "Êtes-vous sûr de vouloir archiver ce document ?"
          );

          if (!confirm) return;

          await deleteDocument.mutateAsync(row.id);
        };

        return (
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleDownload}
              className="!border-foreground"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Télécharger
            </Button>
            <Button
              variant="destructive"
              onClick={handleArchive}
              loading={deleteDocument.isPending}
            >
              <ArchiveBoxIcon className="h-5 w-5 mr-2" />
              Archiver
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={documents}
      selectedIndexes={selectedIndexes}
      setSelectedIndexes={setSelectedIndexes}
    />
  );
}

function downloadPdf({
  base64,
  mimeType,
  fileName,
}: {
  base64: string;
  mimeType: string;
  fileName: string;
}) {
  console.log(base64);

  const url = `data:${mimeType};base64,${base64}`;
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
