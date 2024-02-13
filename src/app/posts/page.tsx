import { revalidatePath } from "next/cache";
import Layout from "@/components/Layout";
import prisma from "@/app/lib/prisma";
import PostList from "@/components/postList/PostList";

async function Posts() {
  // React Component for posts page. Force revalidation on reload to load potential new posts. Get all posts except 'about' in descending order and display in PostList component.

  revalidatePath("/posts");
  const posts = await prisma.post.findMany({
    where: {
      title: {
        not: "about",
      },
    },
    orderBy: [
      {
        created: "desc",
      },
    ],
  });

  return (
    <Layout>
      <PostList items={posts} edit={false} />
    </Layout>
  );
}
export default Posts;
