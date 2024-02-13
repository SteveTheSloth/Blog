import prisma from "@/app/lib/prisma";
import Layout from "@/components/Layout";
import PostView from "@/components/post/PostView";

async function Post({ params }: { params: { slug: string } }) {
  // React Component for dynamic posts/[slug] page. Get post with corresponding id and display as PostView component.

  const post = (await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  })) || { title: "not found", content: "" };

  return (
    <Layout>
      <PostView title={post.title} content={post.content} />
    </Layout>
  );
}
export default Post;
