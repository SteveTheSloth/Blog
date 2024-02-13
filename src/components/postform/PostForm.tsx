"use client";

import { useState } from "react";
import navigate from "@/components/postform/Action";
import styles from "./postform.module.css";

const PostForm = (props: { title: string; content: string; id: string }) => {
  // Client side React Component for PostForm. takes title, content, and id as arguments and returns component for user input (pass empty strings for new creation of post).
  // On submit, FormData instance is created, title and content attached to it (if editing an existing post, id is attached and update api endpoint is called).
  // Create api is called and post created in database. User is then redirected to success page via navigate function.

  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  const savePost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (props.id) {
        formData.append("id", props.id);
        await fetch("/api/update", {
          method: "PUT",
          body: formData,
        });
        return navigate({ action: "update" });
      }

      await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      return navigate({ action: "create" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={savePost} className={styles.form} method="post">
      <input
        className={styles.form__title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoComplete="off"
        type="text"
        placeholder="Titel"
        name="title"
        value={title}
      ></input>
      <textarea
        className={styles.form__content}
        onChange={(e) => setContent(e.target.value)}
        required
        autoComplete="off"
        placeholder="Text"
        name="content"
        value={content}
        spellCheck="false"
      ></textarea>
      <input
        className={styles.form__submit}
        type="submit"
        value="Speichern"
      ></input>
    </form>
  );
};

export default PostForm;
