import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Brüggeman",
  description: "Ein Blog um die Welt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
