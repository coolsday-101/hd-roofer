import * as React from "react";
import { Link } from "gatsby";
import TopBanner from "./TopBanner";
import NavigationHeader from "./NavigationHeader";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <header className="sticky top-0 z-10">
        <TopBanner />
        <NavigationHeader />
      </header>
      <div className="font-archivo overflow-x-hidden">
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
