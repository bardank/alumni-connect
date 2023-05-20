import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import JobPostingCard from "../components/UI/JobPostingCard";

export default function opportunity() {
  return (
    <div>
      <Navbar />
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
