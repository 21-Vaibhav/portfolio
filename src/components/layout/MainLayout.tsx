import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flexGrow: 1,
          padding: "var(--space-8) 0",
        }}
      >
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
