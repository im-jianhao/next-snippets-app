import { prisma } from "@/lib/prisma";
import SnippetEditor from "@/components/SnippetEditor";
// import SnippetDelButton from "@/components/SnippetDelButton";
import { notFound } from "next/navigation";

export default async function EditSnippetPage({ params }: { params: { id: string } }) {
  const snippet = await prisma.snippet.findUnique({
    where: { id: params.id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditor snippet={snippet} />
      {/* <SnippetDelButton id={params.id} /> */}
    </div>
  );
}
