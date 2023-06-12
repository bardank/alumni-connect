import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import JobPostingCard from "../../components/UI/JobPostingCard";
import OpportunityForm from "../../components/OpportunityForm";
const Opportunity = () => {
  return (
    <AdminLayout>
    <h1 className="p-4 font-bold text-center text-3xl">Opportunities</h1>
      <div>
        <OpportunityForm />
      </div>
      <JobPostingCard jobRole="SDE" companyName="TCS" location="blr" />
    </AdminLayout>
  );
};

export default Opportunity;
