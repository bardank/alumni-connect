import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import JobPostingCard from "../../components/UI/JobPostingCard";
import OpportunityForm from "../../components/OpportunityForm";
const Opportunity = () => {
  return (
    <AdminLayout>
      <div>
        <OpportunityForm />
      </div>
      <JobPostingCard jobRole="SDE" companyName="TCS" location="blr" />
    </AdminLayout>
  );
};

export default Opportunity;
