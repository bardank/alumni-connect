import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import Select from "../components/UI/Select";
import Input from "../components/UI/Input";
import TextArea from "../components/UI/TextArea";
import { useMutation } from "@apollo/client";
import CREATE_ALUMNI from "../graphql/mutation/CREATE_ALUMNI.JSX";

export default function Home() {
  const [inputData, setInputVariable] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    currentAddress: "",
    usn: "",
    graduationYear: "",
    organization: "",
    designation: "",
    offerLetter: "",
    suggestion: "",
    isPlacementProvidedBySkit: true,
  });

  const [createAlumni, { loading, error, data }] = useMutation(CREATE_ALUMNI, {
    variables: {},
  });
  const onChange = (e) => {
    setInputVariable((prevs) => ({
      ...inputData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisteration = (e) => {
    e.preventDefault();
    createAlumni({
      variables: {},
    });
  };

  return (
    <div>
      <Navbar />
      <div className="px-8">
        <div className="">
          <h4 className="text-center font-semibold text-2xl pt-6 ">
            Register As Alumni
          </h4>
          <form className=" " onSubmit={(e) => handleRegisteration(e)}>
            <div className="  ">
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
                    label="Date of Birth "
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    placeholder="Date of birth "
                    value={inputData.birthDate}
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

                <Select title="Courses" />
              </div>
              <FormHeading title=" Present Working Details :" />
              <div className="grid grid-cols-3 gap-4 ">
                <div className=" ">
                  <div className="flex align-middle  flex-row">
                    <h5 className="">Placement Provided by SKIT:</h5>
                    <label className="radio-button flex flex-row">
                      <input
                        value="option1"
                        name="example-radio"
                        type="radio"
                      />
                      <span className=" pr-2 radio"></span>
                      Yes
                    </label>
                    <label className="radio-button flex flex-row">
                      <input
                        value="option1"
                        name="example-radio"
                        type="radio"
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
                <Input
                  label="  Upload offer letter / Appointment Letter "
                  type="file"
                  id="offerLetter"
                  name="offerLetter"
                  value={inputData.offerLetter}
                  multiple
                  onChange={onChange}
                />
              </div>

              <div className="w-full md:w-auto">
                <TextArea
                  label="Suggestion"
                  suggestion="send your suggestion"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const FormHeading = ({ title }) => {
  return (
    <div>
      <h5 className="text-xl pb-3 underline">{title}</h5>
    </div>
  );
};
