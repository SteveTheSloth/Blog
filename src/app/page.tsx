import { revalidatePath } from "next/cache";
import prisma from "./lib/prisma";
import { Post } from "@prisma/client";
import Layout from "@/components/Layout";
import PostPreview from "@/components/postPreview/PostPreview";

async function Home() {
  // React Component for posts page. Force revalidation on reload to load potential new posts. Get all posts except 'about' in descending order and display first five
  // in PostPreview component.

  revalidatePath("/");
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
      {posts.map((post: Post, index: number) => {
        while (index < 5) {
          return <PostPreview key={post.id} post={post} edit={false} />;
        }
      })}
    </Layout>
  );
}

export default Home;
