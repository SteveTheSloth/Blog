import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LogoutButton from "@/components/buttons/LogoutButton";
import Layout from "@/components/Layout";
import PostForm from "@/components/postform/PostForm";

async function Create() {
  // React Component for posts/create page. Check for session to confirm user authentication, then render PostForm Component for user input.

  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/api/auth/signin");
  }

  return (
    <Layout>
      <LogoutButton />
      <PostForm title="" content="" id="" />
    </Layout>
  );
}
export default Create;
