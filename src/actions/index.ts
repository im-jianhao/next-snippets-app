"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: string) {
  await prisma.snippet.delete({
    where: { id },
  });
  redirect("/");
}
