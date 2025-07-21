// import SnippetDelButton from "@/components/SnippetDelButton";
import { deleteSnippet } from "@/actions";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  /**
   * 如果是15版本需要使用await
   * const { id } = await params;
   */
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold">{snippet?.title}</h1>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
          {/* 1、通过组件删除 */}
          {/* <SnippetDelButton id={snippet.id} /> */}
          {/* 2、通过action删除 */}
          <form action={deleteSnippet.bind(null, snippet.id)}>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-100 p-4 rounded-md">
        <code className="text-gray-600">{snippet?.code}</code>
      </pre>
    </>
  );
}
