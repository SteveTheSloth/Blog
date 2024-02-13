"use client";

import navigate from "@/components/postform/Action";
import styles from "./buttons.module.css";

const DeleteButton = (props: { id: string }) => {
  // Client side React Component for DeleteButton. On Click Create FormData instance and attach post id.
  // Pass on to delete api endpoint and redirect to success page via navigate function.

  const deletePost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("id", props.id);
      await fetch("/api/delete", {
        method: "DELETE",
        body: formData,
      });
      return navigate({ action: "delete" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.buttondiv}>
      <button className={styles.buttondiv__button} onClick={deletePost}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
