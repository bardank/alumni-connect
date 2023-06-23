import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import DefaultLayout from "./DefaultLayout";

const PageLayout = ({ children, className = "", lable }) => {
  return (
    <DefaultLayout>
      <div className="min-h-screen w-full">
        <Navbar />
        <div className={`!min-h-screen ${className} pb-12`}>
          {lable && (
            <h2 className="text-center text-2xl px-10 pt-10 pb-8  md:pb-12 capitalize   font-bold text-secondary text-">
              {lable}
            </h2>
          )}

          {children}
        </div>
        <Footer />
      </div>
    </DefaultLayout>
  );
};

export default PageLayout;
