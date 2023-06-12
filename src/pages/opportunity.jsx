import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import JobPostingCard from "../components/UI/JobPostingCard";

export default function opportunity() {
  return (
    <div>
      <Navbar />
      <h2 className="font-bold text-2xl text-blue-600 px-10 py-2 text-center">Opportunities</h2>
      <div className="m-4 flex  flex-wrap gap-5 justify-center">
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
        <JobPostingCard
          jobRole="Software Engineer"
          companyName="TCS"
          location="Bangalore"
        />
      </div>

      <Footer />
    </div>
  );
}
