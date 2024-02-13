import styles from "./post.module.css";

const PostView = ({ title, content }: { title: string; content: string }) => {
  // React Component for displaying one individual post. Takes title and content as arguments.

  return (
    <div className={styles.post}>
      <h1 className={styles.post__title}>{title}</h1>
      <p className={styles.post__content}>{content}</p>
    </div>
  );
};
export default PostView;
