"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { CreateSnippetFormState } from "./types";
import { revalidatePath } from "next/cache";

/**
 * 删除代码片段
 * @param id 代码片段id
 */
export async function deleteSnippet(id: string) {
  await prisma.snippet.delete({
    where: { id },
  });
  redirect("/");
}

/**
 * 更新代码片段
 * @param id 代码片段id
 * @param code 代码
 */
export async function updateSnippet(id: string, code: string) {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippet/${id}`);
}

/**
 * 创建代码片段
 * @param formData 表单数据
 */
export async function createSnippet(prevState: CreateSnippetFormState, formData: FormData) {
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return {
      success: false,
      message: "标题不能小于3个字符",
    };
  }

  if (typeof code !== "string" || code.length < 5) {
    return {
      success: false,
      message: "代码不能小于5个字符",
    };
  }

  await prisma.snippet.create({
    data: {
      title: title as string,
      code: code as string,
    },
  });

  revalidatePath("/");
  redirect("/");
}
