"use client";

import { useState } from "react";
import PostPreview from "../postPreview/PostPreview";
import styles from "./postlist.module.css";

const PostList = ({
  items,
  edit,
}: {
  items: { title: string; id: string; content: string }[];
  edit: boolean;
}) => {
  // Client side React Component for PostList. Takes items and edit as arguments and uses slicing and states to only show 6 posts per page.
  // Display each post as PostPreview component.

  const [posts, setPosts] = useState(
    items.slice(0, items.length < 6 ? items.length : 6)
  );
  const [count, setCount] = useState(0);

  function older() {
    const newCount = count + 6;
    setPosts([
      ...items.slice(
        newCount,
        items.length < newCount + 6 ? items.length : newCount + 6
      ),
    ]);
    setCount(newCount);
  }

  function newer() {
    const newCount = count - 6;
    setPosts([
      ...items.slice(
        newCount,
        items.length < newCount + 6 ? items.length : newCount + 6
      ),
    ]);
    setCount(newCount);
  }

  return (
    <div>
      {posts.map((post) => {
        return <PostPreview post={post} edit={edit} key={post.id} />;
      })}
      <div className={styles.navbuttons}>
        {count >= 6 && (
          <button className={styles.button} onClick={() => newer()}>
            Newer Posts
          </button>
        )}
        {count + 6 <= items.length && (
          <button className={styles.button} onClick={() => older()}>
            Older Posts
          </button>
        )}
      </div>
    </div>
  );
};

export default PostList;
