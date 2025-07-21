import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function NewSnippetPage() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const code = formData.get("code");

    const res = await prisma.snippet.create({
      data: {
        title: title as string,
        code: code as string,
      },
    });
    console.log("res", res);
    redirect("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">现代 CSS 输入框演示</h1>
        <p className="text-gray-600">体验 @property 和 color-mix() 的强大功能</p>
      </div>

      <form className="space-y-6" action={handleSubmit}>
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
