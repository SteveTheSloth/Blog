import Layout from "@/components/Layout";
import prisma from "@/app/lib/prisma";
import PostView from "@/components/post/PostView";

async function About() {
  const post = (await prisma.post.findFirst({
    where: {
      title: "about",
    },
  })) || { title: "not found", content: "" };
  // React Component for About page. To simplify databse structure, post with title 'about' is used as content for this page.

  return (
    <Layout>
      <PostView title={post.title} content={post.content} />
    </Layout>
  );
}
export default About;
