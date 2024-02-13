"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import LogoutButton from "@/components/buttons/LogoutButton";
import Layout from "@/components/Layout";
import styles from "./success.module.css";

const Success = () => {
  // Client-Side React Component for success page. User sees this page after successfully creating/updating/deleting a post.
  // The action is determined by search parameters and the page's headline changed accordingly.

  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  return (
    <Layout>
      <LogoutButton />
      <h1>Post {action}d successfully!</h1>
      <Link className={styles.link} href="/posts/edit">
        Back to Post overview
      </Link>
    </Layout>
  );
};
export default Success;
