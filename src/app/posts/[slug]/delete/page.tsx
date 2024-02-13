import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Layout from "@/components/Layout";
import DeleteButton from "@/components/buttons/DeleteButton";

async function Delete({ params }: { params: { slug: string } }) {
  // React Component for posts/[slug]/delete page. Check for session to confirm user authentication, then render DeleteButton Component with corresponding post id.
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/api/auth/signin");
  }

  const post = await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  });

  if (!post) {
    return (
      <Layout>
        <h1>Something went wrong (Post not found)</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Delete Post {post.title}?</h1>
      <DeleteButton id={params.slug} />
    </Layout>
  );
}
export default Delete;
