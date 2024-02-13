import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/app/lib/prisma";
import LogoutButton from "@/components/buttons/LogoutButton";
import Layout from "@/components/Layout";
import PostList from "@/components/postList/PostList";

async function EditList() {
  // React Component for posts/edit page. Check for session to confirm user authentication, get all posts in descending order,
  // then render PostList Component with edit=true flag to enable edit & delete buttons for user interaction.

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/api/auth/signin");
  }

  const posts = await prisma.post.findMany({
    orderBy: [
      {
        created: "desc",
      },
    ],
  });
  return (
    <Layout>
      <LogoutButton />
      <PostList items={posts} edit={true} />
    </Layout>
  );
}
export default EditList;
