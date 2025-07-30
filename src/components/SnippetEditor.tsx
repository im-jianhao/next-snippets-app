"use client";

import { useState } from "react";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { updateSnippet } from "@/actions";

export default function SnippetEditor({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string | undefined) {
    if (value) {
      setCode(value);
    }
  }

  function handleSave() {
    updateSnippet(snippet.id, code);
  }

  return (
    <div>
      <Editor height="90vh" theme="vs-dark" defaultLanguage="javascript" defaultValue={code} onChange={handleEditorChange} />
      <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </div>
  );
}
