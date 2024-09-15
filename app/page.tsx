import { LandingContainer } from "@/components/landing-container";
import type { Metadata, ResolvingMetadata } from "next";

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
      <LandingContainer />
    </>
  );
}
