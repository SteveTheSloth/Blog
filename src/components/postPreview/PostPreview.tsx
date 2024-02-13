import Link from "next/link";
import styles from "./postpreview.module.css";

const PostPreview = ({
  post,
  edit,
}: {
  post: {
    title: string;
    content: string;
    id: string;
  };
  edit: boolean;
}) => {
  // React Component for PostPreview. Takes post and edit as arguments. Displays post title and first 250 characters.
  // If edit is true, Edit and Delete Buttons are displayed for user interaction. If edit is false, link to full post is displayed.

  const { title, content, id } = post;
  const url = "/posts/" + id;
  const text = content.slice(0, 250) + "...";

  return (
    <div className={styles.postPreview}>
      <h3 className={styles.postPreview__Title}>{title}</h3>
      <p className={styles.postPreview__Paragraph}>{text}</p>
      {edit ? (
        <div className={styles.links}>
          <Link className={styles.links__button} href={url + "/edit"}>
            Edit
          </Link>
          <Link className={styles.links__button} href={url + "/delete"}>
            Delete
          </Link>
        </div>
      ) : (
        <Link className={styles.postPreview__Link} href={url}>
          Show Full Post
        </Link>
      )}
    </div>
  );
};
export default PostPreview;
