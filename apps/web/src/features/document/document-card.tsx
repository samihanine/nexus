import Card, { CardBody } from "@/components/card";
import { DocumentIcon } from "@heroicons/react/24/outline";

export default function DocumentCard({
  name,
  mimeType,
  month,
  year,
  tags,
  createdAt,
  authorName,
  authorImageUrl,
  id,
  title,
  description,
}: {
  name: string;
  mimeType: string;
  month: string;
  year: string;
  tags: string[];
  createdAt: Date;
  authorName: string;
  authorImageUrl: string;
  id: string;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardBody>
        <DocumentIcon className="h-20 w-20 mr-2" />
      </CardBody>
    </Card>
  );
}
