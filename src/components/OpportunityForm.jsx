import React from "react";
import Input from "./UI/Input";
import { useState } from "react";
import Button from "./UI/Button";
const OpportunityForm = () => {
  const [formData, setOpportunityData] = useState({
    job: "",
    companyName: "",
    companyLocation: "",
    jobFormLink: "",
  });
  const onChange = (e) => {
    console.log(e.target.value);
    setOpportunityData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form action="" className="flex flex-col w-full px-10 py-4">
        <Input
          label="Designation"
          type="text"
          placeholder="Enter job title"
          onChange={onChange}
          name={"job"}
          value={formData.job}
        />
        <Input
          label="Company Name"
          type="text"
          placeholder="Enter company Name"
          onChange={onChange}
          name={"companyName"}
          value={formData.companyName}
        />
        <Input
          label="Location "
          type="text"
          placeholder="Enter company Location"
          onChange={onChange}
          name={"companyLocation"}
          value={formData.companyLocation}
        />
        <Input
          label="JOb Link "
          type="text"
          placeholder="Enter the link of job "
          onChange={onChange}
          name={"jobFormLink"}
          value={formData.jobFormLink}
        />
        <div className="flex w-full px-4 justify-center">
          <Button type="submit" label="Create job Posting" className="px-6" />
        </div>
      </form>
    </div>
  );
};
export default OpportunityForm;
