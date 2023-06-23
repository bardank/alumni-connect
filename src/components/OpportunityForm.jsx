import React from "react";
import Input from "./UI/Input";
import { useState } from "react";
import Button from "./UI/Button";
import CREATE_OPPORTUNITY from "../graphql/mutation/CREATE_OPPORTUNITY";
import { client } from "../graphql/client";
import { uuid } from "uuidv4";
import { useNotification } from "../customHooks/useNotification";
import TextArea from "./UI/TextArea";

const OpportunityForm = ({
  onSubmit,
  onChange,
  formData,
  edit,
  setEdit,
  resetForm,
  onEdit,
}) => {
  return (
    <div>
      <h2 className="px-10">
        {edit ? "Update Opportunity" : "Create New Opportunity"}
      </h2>
      <form
        action=""
        onSubmit={edit ? (e) => onEdit(e) : (e) => onSubmit(e)}
        className="flex flex-col w-full px-10 py-4"
      >
        <Input
          label="Designation"
          type="text"
          placeholder="Enter job title"
          onChange={onChange}
          name="title"
          value={formData.title}
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
          name="location"
          value={formData.location}
        />
        <Input
          label="Job Link "
          type="text"
          placeholder="Enter the link of job "
          onChange={onChange}
          name={"link"}
          value={formData.link}
        />
        <TextArea
          label="Job Description"
          type="text"
          placeholder="Enter the description of job "
          onChange={onChange}
          name="description"
          value={formData.description}
        />
        <div className="flex w-full px-4 justify-center mt-4 gap-4">
          <Button
            type="submit"
            label={edit ? "Update Opportunity" : "Create Opportunity"}
            className="px-6"
          />
          {edit ? (
            <Button
              onClick={() => {
                setEdit(false), resetForm();
              }}
              label="Cancel"
              className="px-6"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};
export default OpportunityForm;
