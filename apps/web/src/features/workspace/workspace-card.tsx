import Card from "@/components/card";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type WorkspaceCardProps = React.ComponentProps<typeof Card> & {
  id: string;
  name: string;
  description: string;
  isUserAdmin: boolean;
};

const WorkspaceCard = (props: WorkspaceCardProps) => {
  return (
    <Card
      className={`flex h-full w-full justify-between p-0 overflow-hidden hover:!border-foreground ${props.className}`}
    >
      <Link
        href={`/workspace/${props.id}`}
        className="flex flex-col gap-2 flex-1 p-5"
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl font-semibold">{props.name}</h2>
        </div>

        <p className="overflow-hidden overflow-ellipsis text-justify text-xs text-muted-foreground line-clamp-3">
          {props.description}
        </p>
      </Link>
      {props.isUserAdmin && (
        <Link
          href={`/workspace/${props.id}/settings`}
          className="flex justify-center items-center px-10"
        >
          <Cog8ToothIcon className="h-8 w-8 text-foreground" />
        </Link>
      )}
    </Card>
  );
};

export default WorkspaceCard;
