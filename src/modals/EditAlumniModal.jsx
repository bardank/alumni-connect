import React, { useState } from "react";
import Select from "../components/UI/Select";
import Input from "../components/UI/Input";
import TextArea from "../components/UI/TextArea";
import Button from "../components/UI/Button";
import { GrClose } from "react-icons/gr";
import { useMutation } from "@apollo/client";
import { useNotification } from "../customHooks/useNotification";
import { uuid } from "uuidv4";
import EDIT_ALUMNI from "../graphql/mutation/EDIT_ALUMNI";

export default function EditAlumniModal({ isOpen, onClose, alumniData }) {
  const { setNotification } = useNotification();
  const [inputData, setInputData] = useState({
    fullName: alumniData.fullName,
    birthDate: alumniData.birthDate,
    email: alumniData.email,
    phoneNumber: alumniData.phoneNumber,
    currentAddress: alumniData.currentAddress,
    usn: alumniData.usn,
    isApproved: true,
    linkedIn: alumniData.linkedIn || "",
    yearOfCompletion: alumniData.yearOfCompletion,
    presentOrganization: alumniData.presentOrganization,
    currentPosition: alumniData.currentPosition,
    offerLetterLink: alumniData.offerLetterLink || "",
    suggestion: alumniData.suggestion,
    isPlacementProvidedBySkit: alumniData.isPlacementProvidedBySkit,
    branch: alumniData.branch,
  });

  const [updateAlumni, { loading, error, data }] = useMutation(EDIT_ALUMNI, {
    variables: {},
    onCompleted: (data) => {
      if (data.updateAlumuni.success) {
        setNotification(
          uuid(),
          "Update and Approve Successfull",
          "Success",
          3000
        );
        onClose();
      } else {
        setNotification(uuid(), "Something went Wrong", "Error", 3000);
      }
    },
  });

  const onChange = (e) => {
    setInputData((prevs) => ({
      ...inputData,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeFloat = (e) => {
    setInputData((prevs) => ({
      ...inputData,
      [e.target.name]: parseFloat(e.target.value),
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log({ inputData });
    updateAlumni({
      variables: {
        data: inputData,
        updateAlumuniId: alumniData._id,
      },
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`${
          isOpen ? "translate-y-0" : "translate-y-full"
        } fixed top-0 left-0   z-[99999] transition-all duration-300 transform w-screen flex overflow-y-auto justify-center items-center h-screen`}
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="rounded-md p-6"
          style={{
            width: "60%",
            height: "90%",
            backgroundColor: "#eeeeee",
            overflowY: "scroll",
          }}
        >
          <div className="flex justify-between p-4 items-center">
            <h4 className="text-center font-semibold text-2xl ">Edit Alumni</h4>
            <div
              className="flex items-center justify-center h-full p-2 cursor-pointer"
              onClick={onClose}
            >
              <GrClose />
            </div>
          </div>
          {console.log(alumniData)}

          <form className="pb-4 " onSubmit={(e) => handleEdit(e)}>
            <div className=" pb-4 ">
              <div className=" ">
                <FormHeading title="Personal Details" />
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
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

              <div className="grid grid-cols-3 gap-4 ">
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
                  id="yearOfCompletion"
                  name="yearOfCompletion"
                  placeholder="eg:2022 "
                  min="2000"
                  value={inputData.yearOfCompletion}
                  onChange={onChangeFloat}
                />
                <Input
                  label="Branch"
                  type="text"
                  id="branch"
                  name="branch"
                  placeholder=""
                  value={inputData.branch}
                  onChange={onChange}
                />
              </div>
              <FormHeading title=" Present Working Details :" />
              <div className="grid gap-4 ">
                <div className=" ">
                  <div className="flex align-middle  flex-row">
                    <h5 className="">Placement Provided by SKIT:</h5>
                    <label className="radio-button flex flex-row">
                      <input
                        value={true}
                        name="isPlacementProvidedBySkit"
                        type="radio"
                        checked={inputData.isPlacementProvidedBySkit === true}
                        onChange={() => {
                          setInputData((prev) => ({
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
                        checked={inputData.isPlacementProvidedBySkit === false}
                        onChange={() => {
                          setInputData((prev) => ({
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
              </div>
            </div>
            <div className="flex justify-between gap-4 w-full">
              <Input
                label="Present organization "
                type="text"
                id="presentOrganization"
                name="presentOrganization"
                placeholder="organization "
                value={inputData.presentOrganization}
                onChange={onChange}
              />
              <Input
                label="Current Position/Designation "
                type="text"
                id="currentPosition"
                name="currentPosition"
                placeholder="eg: web Devloper "
                value={inputData.currentPosition}
                onChange={onChange}
              />
            </div>
            <div className="w-full md:w-auto pb-4">
              <TextArea
                label="Suggestion"
                placeholder="Alumni suggestion"
                value={inputData.suggestion}
                onChange={onChange}
                name="suggestion"
              />
            </div>
            <Button
              type="submit"
              label={alumniData.isApproved ? "Save" : "Approve and Save"}
            />
          </form>
        </div>
      </div>
    </>
  );
}

const FormHeading = ({ title }) => {
  return (
    <div>
      <h5 className="text-xl pb-3 underline">{title}</h5>
    </div>
  );
};
