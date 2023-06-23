import React, { FC } from "react";
import Modal from ".";
import Button from "../components/UI/Button";
import Lottie from "react-lottie";
import animationData from "../assets/thank-you-animation.json";

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
        <Lottie options={defaultOptions} height={200} width={200} />
        <p className="text-md">
          We'll soon verify your details and update it in our Website.
        </p>
      </div>
    </Modal>
  );
};

export default SuccessRegistration;
