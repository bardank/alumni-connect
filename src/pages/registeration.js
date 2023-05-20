import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RegisterationInput from "../components/UI/registerationInput";
import Select from "../components/UI/Select";
import Input from "../components/UI/Input";
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
  });
  const onChange = (e) => {
    setInputVariable((prevs) => ({
      ...inputData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="border-black border-2 m-3 mr-3">
        <h4 className="text-center text-2xl underline">
          Registeration Form for Alumni
        </h4>
        <form
          method=""
          action=""
          className=""
          onSubmit={(e) => handleRegisteration(e)}
        >
          <div className=" p-5 flex-row  ">
            <div className=" ">
              <h5 className="text-xl pb-3 underline">Personal Details:</h5>

              <Input
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={registerVariable.firstName}
                onChange={onChange}
              />
              <Input
                label="Middle Name"
                type="text"
                id="middleName"
                name="middleName"
                placeholder="middle Name"
                value={registerVariable.middleName}
                onChange={onChange}
              />
              <Input
                label="Last Name"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={registerVariable.lastName}
                onChange={onChange}
              />
              <Input
                label="Date of Birth "
                type="date"
                id="birthDate"
                name="birthDate"
                placeholder="Date of birth "
                value={registerVariable.birthDate}
                onChange={onChange}
              />
              <Input
                label=" Email "
                type="email"
                id="email"
                name="email"
                placeholder="email "
                value={registerVariable.email}
                onChange={onChange}
              />
              <Input
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="phone Number"
                value={registerVariable.phoneNumber}
                onChange={onChange}
              />
              <Input
                label="Current Address"
                type="text"
                id="currentAddress"
                name="currentAddress"
                placeholder="currentAddress "
                value={registerVariable.currentAddress}
                onChange={onChange}
              />
            </div>
            <hr className="m-5 border-t-1 border-black" />

            <h5 className="text-xl pb-3 underline">Academic Details:</h5>
            <div className=" ">
              <Input
                label="USN "
                type="text"
                id="usn"
                name="usn"
                placeholder="USN "
                value={registerVariable.usn}
                onChange={onChange}
              />
              <Input
                label="Year of Completion "
                type="number"
                id="graduationYear"
                name="graduationYear"
                placeholder="eg:2022 "
                min="2000"
                value={registerVariable.graduationYear}
                onChange={onChange}
              />

              <div className="w-full md:w-auto pb-3">
                <label>Branch:</label>
                <select className="  ">
                  <option value="cse">Computer Science & Engg (CSE)</option>
                  <option value="ise">Information Science & Engg (ISE)</option>
                  <option value="">Mechanical Engg (ME)</option>
                  <option value="ece">
                    Electronics & Communication Engg (ECE)
                  </option>
                  <option value="eee">
                    Electrical & Electronics Engineering (EEE)
                  </option>
                  <option value="civil">Civil Engg (Civil)</option>
                </select>
              </div>
            </div>

            <hr className="m-5 border-t-1 border-black" />
            <h5 className="text-xl pb-3 underline">
              Present Working Details :
            </h5>
            <div className="">
              <h5>Placement Provided by SKIT:</h5>
              <div className="w-full md:w-auto pb-3 ">
                <label className="  inline" htmlFor="yes">
                  YES:
                </label>
                <input
                  className=" radio inline "
                  id="yes"
                  type="radio"
                  name="choice"
                />
                <label className="inline" htmlfor="NO">
                  NO:
                </label>
                <input
                  className=" radio inline"
                  id="No"
                  type="radio"
                  name="choice"
                />
              </div>
              <Input
                label="Present organization "
                type="text"
                id="organization"
                name="organization"
                placeholder="organization "
                value={registerVariable.organization}
                onChange={onChange}
              />
              <Input
                label="Current Position/Designation "
                type="text"
                id="designation"
                name="designation"
                placeholder="eg: web Devloper "
                value={registerVariable.designation}
                onChange={onChange}
              />
              <Input
                label="  Upload offer letter / Appointment Letter "
                type="file"
                id="offerLetter"
                name="offerLetter"
                value={registerVariable.offerLetter}
                multiple
                onChange={onChange}
              />
            </div>
            <hr className="m-5 border-t-1 border-black" />
            <div className="w-full md:w-auto">
              <label>Your Suggestions:</label>
              <textarea
                id="suggestion"
                name="suggestion"
                rows="10"
                cols="40"
                className="border"
                value={registerVariable.suggestion}
                onChange={on}
                ChaonChange
                placeholder="Give your Suggestion here!!"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
