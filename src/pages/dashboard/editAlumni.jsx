import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import Select from "../../components/UI/Select";
import Input from "../../components/UI/Input";
import TextArea from "../../components/UI/TextArea";
import Button from "../../components/UI/Button";
import { useMutation } from "@apollo/client";
import CREATE_ALUMNI from "../../graphql/mutation/CREATE_ALUMNI.JSX";
import { useRouter } from "next/router";

const EditAlumni = () => {
  const router = useRouter();

  const { id } = router.query;

  const [inputData, setInputVariable] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
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
    branch: "",
  });

  const getAlumnibyId = async (id) => {
    console.log(id);
    try {
      const response = await client.query({
        query: GET_ALUMNI_BY_ID,
        variables: { getAlumniId: id },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
    console.log(data);
  };

  const [createAlumni, { loading, error, data }] = useMutation(CREATE_ALUMNI, {
    variables: {},
    onCompleted: (data) => {
      if (data.createAlumni.success) {
        setNotification(uuid(), "Registration Successfull", "Success", 3000);
        resetForm();
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

  const handleRegisteration = (e) => {
    e.preventDefault();
    console.log({ inputData });
    createAlumni({
      variables: {
        createAlumniInput: {
          fullName: `${inputData.firstName.trim()} ${inputData.middleName.trim()} ${inputData.lastName.trim()}`,
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
          isApproved: true,
          branch: inputData.branch,
          isPlacementProvidedBySkit: inputData.isPlacementProvidedBySkit,
        },
      },
    });
  };

  return (
    <div>
      <h1 className="p-4 font-bold text-center text-3xl">
        {" "}
        Edit Alumni Details
      </h1>
      <AdminLayout>
        <div className="px-8">
          <div className="">
            <h4 className="text-center font-semibold text-2xl pt-6 ">
              Register Alumni
            </h4>
            <form className="pb-4 ">
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
                    placeholder="Alumni suggestion"
                    value={inputData.suggestion}
                    onChange={onChange}
                    name="suggestion"
                  />
                </div>
              </div>
              <Button type="submit" label="Submit" />
            </form>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default EditAlumni;

const FormHeading = ({ title }) => {
  return (
    <div>
      <h5 className="text-xl pb-3 underline">{title}</h5>
    </div>
  );
};
