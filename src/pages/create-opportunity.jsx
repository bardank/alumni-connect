import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import JobPostingCard from "../components/UI/JobPostingCard";
import FETCH_OPPORTUNITIES from "..//graphql/query/FETCH_OPPORTUNITIES";
import { useQuery } from "@apollo/client";
import Pagination from "../components/Pagination/Pagination";
import { useModal } from "../customHooks/useModal";
import PageLayout from "../layout/PageLayout";
import OpportunityForm from "@/components/OpportunityForm";
import { client } from "@/graphql/client";
import { uuid } from "uuidv4";
import { useNotification } from "../customHooks/useNotification";
import CREATE_OPPORTUNITY from "../graphql/mutation/CREATE_OPPORTUNITY";
import { useRouter } from "next/router";

export default function CreateOpp() {
  const { setNotification } = useNotification();

  const [formData, setformData] = useState({
    title: "",
    location: "",
    companyName: "",
    link: "",
    description: "",
  });
  const onChange = (e) => {
    console.log(e.target.value);
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setformData({
      title: "",
      location: "",
      companyName: "",
      link: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await client.mutate({
        mutation: CREATE_OPPORTUNITY,
        variables: {
          createOpportunityInput: {
            ...formData,
          },
        },
      });
      console.log(response);
      if (response.data.createOpportunity.success) {
        setNotification(
          uuid(),
          "Opportunity created successfully",
          "Success",
          3000
        );
      } else {
        setNotification(uuid(), "Opportunity creation failed", "Error", 3000);
      }
      resetForm();
    } catch (error) {
      setNotification(uuid(), "Opportunity creation failed", "Error", 3000);
      console.log(error);
    }
  };

  return (
    <PageLayout className={"pt-6"} lable="Opportunities">
      <div className="m-4 flex  flex-wrap gap-5 justify-center">
        <OpportunityForm
          formData={formData}
          onChange={onChange}
          onSubmit={(e) => handleSubmit(e)}
          resetForm={() =>
            setformData({
              title: "",
              location: "",
              companyName: "",
              link: "",
              description: "",
            })
          }
        />
      </div>
    </PageLayout>
  );
}
