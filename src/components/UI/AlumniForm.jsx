import React from "react";
import Input from "./UI/Input";
import Select from "./Select";
import TextArea from "./UI/TextArea";
import Button from "./Button";

const AlumniForm = () => {
  return (
    <form className="pb-4 " onSubmit={(e) => handleRegisteration(e)}>
      <div className=" pb-4 ">
        <div className=" ">
          <FormHeading title="Personal Details" />
          <div className="grid grid-cols-4 gap-4">
            <Input
              label="First Name"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={inputData.firstName}
              onChange={onChange}
            />

            <Input
              label="Middle Name"
              type="text"
              id="middleName"
              name="middleName"
              placeholder="middle Name"
              value={inputData.middleName}
              onChange={onChange}
            />
            <Input
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={inputData.lastName}
              onChange={onChange}
            />

            <Input
              label=" Email "
              type="email"
              id="email"
              name="email"
              placeholder="email "
              value={inputData.email}
              onChange={onChange}
            />
            <Input
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="phone Number"
              value={inputData.phoneNumber}
              onChange={onChange}
            />
            <Input
              label="Current Address"
              type="text"
              id="currentAddress"
              name="currentAddress"
              placeholder="currentAddress "
              value={inputData.currentAddress}
              onChange={onChange}
            />
          </div>
        </div>
        <FormHeading title="Academic Details:" />

        <div className="grid grid-cols-4 gap-4 ">
          <Input
            label="USN "
            type="text"
            id="usn"
            name="usn"
            placeholder="USN "
            value={inputData.usn}
            onChange={onChange}
          />
          <Input
            label="Year of Completion "
            type="number"
            id="graduationYear"
            name="graduationYear"
            placeholder="eg:2022 "
            min="2000"
            value={inputData.graduationYear}
            onChange={onChange}
          />

          <Select label="Branch" name="branch" onChange={onChange} />
        </div>
        <FormHeading title=" Present Working Details :" />
        <div className="grid grid-cols-3 gap-4 ">
          <div className=" ">
            <div className="flex align-middle  flex-row">
              <h5 className="">Placement Provided by SKIT:</h5>
              <label className="radio-button flex flex-row">
                <input
                  value={true}
                  name="isPlacementProvidedBySkit"
                  type="radio"
                  onChange={() => {
                    setInputVariable((prev) => ({
                      ...inputData,
                      isPlacementProvidedBySkit: true,
                    }));
                  }}
                />
                <span className=" pr-2 radio"></span>
                Yes
              </label>
              <label className="radio-button flex flex-row">
                <input
                  value={false}
                  name="isPlacementProvidedBySkit"
                  type="radio"
                  onChange={() => {
                    setInputVariable((prev) => ({
                      ...inputData,
                      isPlacementProvidedBySkit: false,
                    }));
                  }}
                />
                <span className="pl-2 radio"></span>
                NO
              </label>
            </div>
          </div>

          <Input
            label="Present organization "
            type="text"
            id="organization"
            name="organization"
            placeholder="organization "
            value={inputData.organization}
            onChange={onChange}
          />
          <Input
            label="Current Position/Designation "
            type="text"
            id="designation"
            name="designation"
            placeholder="eg: web Devloper "
            value={inputData.designation}
            onChange={onChange}
          />
        </div>

        <div className="w-full md:w-auto">
          <TextArea
            label="Suggestion"
            placeholder="Alumni suggestion"
            value={inputData.suggestion}
            onChange={onChange}
            name="suggestion"
          />
        </div>
      </div>
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default AlumniForm;

const FormHeading = ({ title }) => {
  return (
    <div>
      <h5 className="text-xl pb-3 underline">{title}</h5>
    </div>
  );
};
