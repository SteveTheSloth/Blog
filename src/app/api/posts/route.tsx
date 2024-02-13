import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
  // API endpoint for creating new posts. Check for session to confirm user authentication, then get post data from formData and create new post.

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/api/auth/signin");
  }
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  const result = await prisma.post.create({
    data: {
      title: String(title),
      content: String(content),
    },
  });
  return Response.json({ title, content });
}
