import Navbar from "./navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // React Component for uniform page Layout.

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
export default Layout;
