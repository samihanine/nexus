"use client";

import { useRouter } from "next/navigation";

type GoBackLinkProps = React.HTMLAttributes<HTMLAnchorElement>;

const GoBackLink = ({ ...props }: GoBackLinkProps) => {
  const router = useRouter();

  return (
    <a {...props} onClick={() => router.back()}>
      Go back
    </a>
  );
};

export default GoBackLink;
