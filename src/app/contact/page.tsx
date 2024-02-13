import styles from "./contact.module.css";
import Layout from "@/components/Layout";

const Contact = () => {
  // React Component for Contact page.

  return (
    <Layout>
      <h1>Contact Michael Brüggemann via email!</h1>
      <a className={styles.email} href="mailto:  MA.brueggemann@gmx.de">
        Send Email
      </a>
    </Layout>
  );
};
export default Contact;
