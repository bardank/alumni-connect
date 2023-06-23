import Input from "./UI/Input";
import React, { useState } from "react";
import Button from "./UI/Button";
import TextArea from "./UI/TextArea";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Name : ${formData.name} \nDescription :${formData.description}`;
    const mailtoLink = `mailto:alumni@skit.org.in?body=${encodeURIComponent(
      body
    )}`;
    window.open(mailtoLink);
  };
  return (
    <div className="flex justify-center m-10 ">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-lg rounded-lg px-8 py-6"
          onSubmit={onSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <TextArea
            label="Description"
            type="text"
            placeholder="Enter your USN"
            name="description"
            value={formData.description}
            onChange={onChange}
            required={false}
          />
          <button
            type="submit"
            className="bg-secondary mt-6 hover:bg-blue-700 text-white font-bold px-4 w-full py-4 rounded-3xl"
          >
            Submit
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
