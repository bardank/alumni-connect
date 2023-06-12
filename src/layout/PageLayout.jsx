import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PageLayout = ({ children, className }) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="!min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
