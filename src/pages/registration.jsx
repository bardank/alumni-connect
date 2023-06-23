import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Select from "../components/UI/Select";
import Input from "../components/UI/Input";
import TextArea from "../components/UI/TextArea";
import Button from "../components/UI/Button";
import { useMutation } from "@apollo/client";
import CREATE_ALUMNI from "../graphql/mutation/CREATE_ALUMNI.JSX";
import { useNotification } from "../customHooks/useNotification";
import { uuid } from "uuidv4";
import PageLoader from "next/dist/client/page-loader";
import PageLayout from "@/layout/PageLayout";
import { useModal } from "@/customHooks/useModal";
import SuccessRegistration from "@/modals/SuccessRegistration";

function Registration() {
  const { setNotification } = useNotification();
  const [inputData, setInputVariable] = useState({
    fullName: "",
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
    branch: "CSE",
  });

  const { openModal } = useModal();

  const [createAlumni, { loading, error, data }] = useMutation(CREATE_ALUMNI, {
    variables: {},
    onCompleted: (data) => {
      if (data.createAlumni.success) {
        setNotification(uuid(), "Successfull Submitted", "Success", 3000);
        resetForm();
        openModal(<SuccessRegistration />);
      } else {
        setNotification(uuid(), "Something went Wrong", "Error", 3000);
      }
    },
  });

  const onChange = (e) => {
    setInputVariable((prevs) => ({
      ...inputData,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setInputVariable({
      fullName: "",
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
      branch: "CSE",
    });
  };

  const handleRegisteration = (e) => {
    e.preventDefault();
    console.log({ inputData });
    setNotification(uuid(), "Submitting", "Success", 3000);
    createAlumni({
      variables: {
        createAlumniInput: {
          fullName: inputData.fullName,
          currentAddress: inputData.currentAddress,
          currentPosition: inputData.designation,
          email: inputData.email,
          offerLetterLink: "",
          phoneNumber: inputData.phoneNumber,
          presentOrganization: inputData.organization,
          suggestion: inputData.suggestion,
          usn: inputData.usn,
          yearOfCompletion: parseInt(inputData.graduationYear),
          linkedIn: "",
          isApproved: false,
          branch: inputData.branch,
          isPlacementProvidedBySkit: inputData.isPlacementProvidedBySkit,
        },
      },
    });
  };

  return (
    <PageLayout>
      <div className="px-8">
        <div className="">
          <h4 className="text-center font-semibold text-2xl pt-6 ">
            Register As Alumni
          </h4>
          <form className="pb-4 " onSubmit={(e) => handleRegisteration(e)}>
            <div className=" pb-4 ">
              <div className=" pt-4">
                {/* <FormHeading title="Personal Details" /> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="fullName"
                    placeholder="Fulll Name"
                    value={inputData.fullName}
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
                    // label="Current Address"
                    label="Residence City"
                    type="text"
                    id="currentAddress"
                    name="currentAddress"
                    placeholder="Residence City "
                    value={inputData.currentAddress}
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* <FormHeading title="Academic Details:" /> */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
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
              {/* <FormHeading title=" Present Working Details :" /> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
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
                  required={false}
                />
                <Input
                  label="Current Position/Designation "
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="eg: web Devloper "
                  value={inputData.designation}
                  onChange={onChange}
                  required={false}
                />
                {/* <Input
                  label="  Upload offer letter / Appointment Letter "
                  type="file"
                  id="offerLetter"
                  name="offerLetter"
                  value={inputData.offerLetter}
                  multiple
                  onChange={onChange}
                /> */}
              </div>

              <div className="w-full md:w-auto">
                <TextArea
                  label="Suggestion"
                  placeholder="send your suggestion"
                  value={inputData.suggestion}
                  onChange={onChange}
                  name="suggestion"
                  required={false}
                />
              </div>
            </div>
            <Button type="submit" label="Submit" className="my-4  w-20" />
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
export default Registration;
const FormHeading = ({ title }) => {
  return (
    <div>
      <h5 className="text-xl pb-3 underline">{title}</h5>
    </div>
  );
};
