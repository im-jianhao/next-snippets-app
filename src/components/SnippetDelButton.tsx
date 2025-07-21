"use client";

import { deleteSnippet } from "@/actions";

interface SnippetDelButtonProps {
  id: string;
}

export default function SnippetDelButton({ id }: SnippetDelButtonProps) {
  const handleDelete = async () => {
    await deleteSnippet(id);
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">
      Delete
    </button>
  );
}
