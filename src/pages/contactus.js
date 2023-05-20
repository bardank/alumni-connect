import React from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import TextArea from "../components/UI/TextArea";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function contactus() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center m-10 w-10/12  shadow-lg shadow-indigo-500/50	">
        <form className="form m-5">
          <div className="title">Contact us</div>
          <Input
            id="email"
            value=""
            placeholder="enter your email"
            type="email"
          />
          <TextArea label="Message" suggestion="send your message" />

          <Button label="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
