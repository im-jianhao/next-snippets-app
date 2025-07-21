import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const snippets = await prisma.snippet.findMany();

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold">Next Snippets</h1>
        <Link href="/snippet/new" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {snippets.map((snippet) => (
          <Link key={snippet.id} href={`/snippet/${snippet.id}`} className="flex justify-between items-center p-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-gray-900">
            <span className="text-lg font-bold">{snippet.title}</span>
            <span className="text-sm text-gray-600">View</span>
          </Link>
        ))}
      </div>
    </>
  );
}
