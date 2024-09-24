import { Suspense } from "react";
// import { FillingComponent } from "@/components/filling-Component";
import type { GenerateMetadataProps } from "@/lib";
import type { Metadata, ResolvingMetadata } from "next";
import { FillingComponent } from "@/components/filling-Component";
import { GlassLoadingScreen } from "@/components/glass-loading-screen";

// Dynamic import of the FillingComponent with a loading fallback

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const id = params.id;

  // Fetch data
  const user = await fetch(`https://api.github.com/users/${id}`);
  const data: { name: string; id: number } = await user.json();

  // Optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    openGraph: {
      images: [
        `https://avatars.githubusercontent.com/u/${data.id}?v=4`,
        ...previousImages,
      ],
    },
  };
}

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <Suspense fallback={<GlassLoadingScreen />}>
      <FillingComponent params={params.id} />
    </Suspense>
  );
}
