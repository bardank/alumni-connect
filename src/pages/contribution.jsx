import React, { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PageLayout from "../layout/PageLayout";

const Donation = () => {
  return (
    <PageLayout>
      <h1 className="text-center font-semibold">Ways to Contribute</h1>
      <div className="containerContribution m-4">
        <div className="left bg-black w-72 h-72"></div>
        <div className="right"></div>
      </div>
    </PageLayout>
  );
};

export default Donation;
