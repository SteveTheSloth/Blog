import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/app/lib/prisma";
import Layout from "@/components/Layout";
import PostForm from "@/components/postform/PostForm";
import LogoutButton from "@/components/buttons/LogoutButton";

async function Edit({ params }: { params: { slug: string } }) {
  // React Component for posts/[slug]/edit page. Check for session to confirm user authentication, get post with corresponding id, then render PostForm Component with corresponding post data.

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/api/auth/signin");
  }
  const post = (await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  })) || { title: "", content: "", id: "" };

  return (
    <Layout>
      <LogoutButton />
      <PostForm title={post.title} content={post.content} id={post.id} />
    </Layout>
  );
}
export default Edit;
