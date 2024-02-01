"use client";

import Button from "@/components/button";
import { useUploadDocumentsModal } from "./upload-documents-modal";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "./documents-table";
import Label from "@/components/label";
import { DatePickerWithRange } from "@/components/date-picker-with-range";
import MultiSelect from "@/components/multi-select";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import Input from "@/components/input";

type DocumentListProps = React.ComponentProps<"div"> & {
  documents: {
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
  }[];
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
};

const DocumentList = (props: DocumentListProps) => {
  const { setShowUploadDocumentsModal, UploadDocumentsModal } =
    useUploadDocumentsModal();

  const [tagsId, setTagsId] = useState<string[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [search, setSearch] = useState<string>("");

  const filteredDocuments = props.documents.filter((document) => {
    if (tagsId.length) {
      const hasTag = document.tagIds.some((tagId) => tagsId.includes(tagId));

      if (!hasTag) return false;
    }

    if (months.length) {
      const hasMonth = months.includes(document.month);

      if (!hasMonth) return false;
    }

    if (years.length) {
      const hasYear = years.includes(document.year);

      if (!hasYear) return false;
    }

    if (date?.from) {
      const hasDate = document.createdAt >= date.from;

      if (!hasDate) return false;
    }

    if (date?.to) {
      const hasDate = document.createdAt <= date.to;

      if (!hasDate) return false;
    }

    if (search.length) {
      const hasSearch = document.title
        .toLowerCase()
        .includes(search.toLowerCase());

      if (!hasSearch) return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-medium">Documents</h1>
          <span className="text-muted-foreground">
            ({props.documents.length})
          </span>
        </div>

        <Button
          className="px-4 py-2 text-foreground"
          onClick={() => setShowUploadDocumentsModal(true)}
        >
          <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
          Téléverser un document
        </Button>
      </div>

      <div className="flex flex-wrap w-full gap-5 py-4 border-border">
        <Label className="sm:flex-1 text-muted-foreground">
          Titre
          <Input
            className="!h-9"
            placeholder="Rechercher"
            onChange={(e) => setSearch(e.currentTarget.value)}
            value={search}
          />
        </Label>
        <Label className="sm:flex-1 text-muted-foreground">
          Catégories
          <MultiSelect
            className="sm:flex-1"
            options={props.tags.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            onChange={(value) => setTagsId(value)}
            selected={tagsId}
          />
        </Label>
        <Label className="sm:flex-1 text-muted-foreground">
          Mois
          <MultiSelect
            className="sm:flex-1"
            options={[
              {
                value: "january",
                label: "Janvier",
              },
              {
                value: "february",
                label: "Février",
              },
              {
                value: "march",
                label: "Mars",
              },
              {
                value: "april",
                label: "Avril",
              },
              {
                value: "may",
                label: "Mai",
              },
              {
                value: "june",
                label: "Juin",
              },
              {
                value: "july",
                label: "Juillet",
              },
              {
                value: "august",
                label: "Août",
              },
              {
                value: "september",
                label: "Septembre",
              },
              {
                value: "october",
                label: "Octobre",
              },
              {
                value: "november",
                label: "Novembre",
              },
              {
                value: "december",
                label: "Décembre",
              },
            ]}
            onChange={(value) => setMonths(value)}
            selected={months}
          />
        </Label>
        <Label className="sm:flex-1 text-muted-foreground">
          Année
          <MultiSelect
            className=""
            options={[
              { value: "2026", label: "2026" },
              {
                value: "2025",
                label: "2025",
              },
              {
                value: "2024",
                label: "2024",
              },
              {
                value: "2023",
                label: "2023",
              },
              {
                value: "2022",
                label: "2022",
              },
              {
                value: "2021",
                label: "2021",
              },
              {
                value: "2020",
                label: "2020",
              },
            ]}
            onChange={(value) => setYears(value)}
            selected={years}
          />
        </Label>
        <Label className="!w-fit text-muted-foreground">
          Date d'ajout
          <DatePickerWithRange date={date} setDate={setDate} />
        </Label>
      </div>

      {!!props.documents.length && (
        <DocumentsTable documents={filteredDocuments} tags={props.tags} />
      )}

      {props.documents.length === 0 && (
        <p className="text-center mt-5 text-muted-foreground">
          Vous n'avez pas encore téléversé de documents.
        </p>
      )}

      <UploadDocumentsModal />
    </div>
  );
};

export default DocumentList;
