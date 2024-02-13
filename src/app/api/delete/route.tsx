import { authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/app/lib/prisma";

export async function DELETE(request: Request) {
  // API endpoint for deleting individual posts from the database. Check for session to confirm user authentication, then delete post with id submitted via formData.

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/api/auth/signin");
  }
  const formData = await request.formData();

  const result = await prisma.post.delete({
    where: { id: String(formData.get("id")) },
  });
  return Response.json({});
}
