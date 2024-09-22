import { FillingComponent } from "@/components/filling-Component";
import type { GenerateMetadataProps } from "@/lib";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const user = await fetch(`https://api.github.com/users/${id}`);

  const data: {
    name: string;
    id: number;
  } = await user.json();

  // optionally access and extend (rather than replace) parent metadata
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
  // agente passa um loader aqui tambem !
  // aquele baseado na tela ou fazer isso na "/" rota.
  return (
    <>
      <FillingComponent params={params.id} />
    </>
  );
}
