import React, { FC } from "react";
import Modal from ".";
import Button from "../components/UI/Button";

const SuccessRegistration = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Modal id="SuccessRegistration" title={"Dear Alumni"}>
      <div className="gap-8">
        <h2 className="text-2xl font-semibold">Thank you for Registering</h2>
        <p className="text-md">
          {" We'll soon verify your details and update it in our Website."}
        </p>
      </div>
    </Modal>
  );
};

export default SuccessRegistration;
