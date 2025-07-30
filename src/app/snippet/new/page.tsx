"use client";
import { useFormState } from "react-dom";
import { createSnippet } from "@/actions";
import { CreateSnippetFormState } from "@/actions/types";

const initialState: CreateSnippetFormState = {
  success: false,
  message: "",
  errors: null,
};

export default function NewSnippetPage() {
  const [state, formAction] = useFormState(createSnippet, initialState);
  // TODO button按钮使用useFormStatus优化
  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-8">
      <form className="space-y-6" action={formAction}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="title">
              标题
            </label>
            <input id="title" className="modern-input w-full" type="text" placeholder="输入标题..." name="title" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">代码输入区域</h2>
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="code">
              代码内容
            </label>
            <textarea id="code" className="modern-input w-full min-h-[120px] font-mono" placeholder="在这里输入你的代码..." name="code" />
          </div>
        </div>
        <div>{state.message}</div>
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          type="submit"
        >
          创建代码片段 ✨
        </button>
      </form>
    </div>
  );
}
