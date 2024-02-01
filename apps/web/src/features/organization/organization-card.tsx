/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Card, { CardBody } from "@/components/card";

type OrganizationCardProps = React.ComponentProps<typeof Card> & {
  id: string;
  name: string;
  logoUrl?: string;
  description: string;
};

const OrganizationCard = (props: OrganizationCardProps) => {
  return (
    <Link key={props.id} href={`/${props.id}`}>
      <Card className="flex h-full flex-col gap-3 overflow-hidden">
        <CardBody>
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-semibold">{props.name}</h2>

            {!props.logoUrl && props.logoUrl && (
              <img
                src={props.logoUrl}
                className="h-6 w-6"
                alt={`${props.name}`}
              />
            )}
          </div>

          <p className="overflow-hidden overflow-ellipsis text-justify text-xs text-muted-foreground line-clamp-3">
            {props.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default OrganizationCard;
