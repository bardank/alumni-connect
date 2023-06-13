import React, { FC } from "react";
import Modal from ".";
import Button from "../components/UI/Button";



const ConfirmationModal= ({
}) => {
  return (
    <Modal id="confirmationModal" title={"HI"}>
      <div className="flex justify-between gap-8">
        <p>Hello world</p>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
