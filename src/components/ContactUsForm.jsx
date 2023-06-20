import Input from "./UI/Input";
import React from "react";
import Button from "./UI/Button";

const ContactUsForm = () => {
  return (
    <div className="flex justify-center m-10 ">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded-lg px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your Name"
            id="name"
            value=""
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your Email"
            id="email"
            value=""
          />
          <Input
            label="USN"
            type="text"
            placeholder="Enter your USN"
            id="usn"
            value=""
          />
          <button className="bg-secondary  hover:bg-blue-700 text-white font-bold px-4 w-full py-4 rounded-3xl">
            <a href="mailto:alumni@skit.org.in">Submit</a>
          </button>
          {/* <a href="mailto:bhujajay9@gmail.com">
            <Button type="submit" label="Submit" />
          </a> */}
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
