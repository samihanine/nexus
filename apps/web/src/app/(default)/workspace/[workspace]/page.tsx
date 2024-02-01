"use client";

import LoadingView from "@/components/loading-view";
import Section from "@/components/section";
import DocumentList from "@/features/document/document-list";
import { useDocuments } from "@/features/document/use-documents";
import { useTags } from "@/features/tag/use-tags";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { data: documents = [], isPending } = useDocuments(
    params.workspace as string
  );
  const { data: tags = [], isPending: isTagsPending } = useTags(
    params.workspace as string
  );

  if (isPending || isTagsPending)
    return (
      <Section>
        <LoadingView />
      </Section>
    );

  return (
    <Section>
      <DocumentList
        documents={documents.map((item) => ({
          name: item.name,
          id: item.id,
          title: item.title,
          description: item.description,
          createdAt: new Date(item.createdAt || ""),
          month: item.month,
          year: item.year,
          mimeType: item.mimeType,
          authorImageUrl: item.user?.imageUrl || "",
          authorName: item.user?.name || "",
          tagIds: item.documentTags?.map((tag) => tag.tagId) || [],
        }))}
        tags={tags}
      />
    </Section>
  );
}
