"use client";

import { useCurrentProfile } from "@/features/profile/use-current-profile";
import {
  Section,
  LoadingView,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
} from "@nexus/ui";
import BuyerList from "@/features/buyer/buyer-list";
import PropertiesList from "@/features/property/properties-list";
import { useSearchProperties } from "@/features/property/use-search-properties";
import { useSearchBuyers } from "@/features/buyer/use-search-buyers";

export default function Page(props: {
  params: {
    offset: string;
    limit: string;
  };
}) {
  const { data: profile, isPending } = useCurrentProfile();
  const { data: buyers, isPending: isPendingBuyers } = useSearchBuyers({
    profileId: profile?.id as string,
  });
  const { data: properties = [], isPending: isPendingProperties } =
    useSearchProperties({
      profileId: profile?.id as string,
    });

  if (isPending || isPendingBuyers || isPendingProperties) {
    return (
      <Section>
        <LoadingView />
      </Section>
    );
  }

  if (profile?.type === "SELLER") {
    return (
      <Section>
        <BuyerList buyers={buyers || []} />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>
    );
  }

  if (profile?.type === "BROKER") {
    return (
      <Section>
        <PropertiesList properties={properties || []} />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>
    );
  }

  return <></>;
}
