import { LandingContainer } from "@/components/landing-container";
import type { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
) {
  return (
    <>
      <Suspense>
        <LandingContainer />
      </Suspense>
    </>
  );
}
