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
      <div className="m-10 p-5 border flex flex-col gap-10  bg-white rounded-lg shadow-lg w-10/12  ">
        <div
          className="firstSection flex justify-between flex-wrap gap-10
        "
        >
          <div className="location">
            <img
              className="w-10 h-10"
              src="./assests/icons/location.png"
              alt="location logo"
            />
            <p className="font-medium">Location</p>
            <h3>Sri Krishna Institute of Technology</h3>
            <address>
              <p> N0.29,Chimney Hills, Hesaraghatta Main Road,</p>{" "}
              <p>Chikkabanavara post</p>
              <p>Bangalore -560090,</p>
            </address>
          </div>

          <div className="phone">
            <img
              className="w-10 h-10"
              src="./assests/icons/telephone.png"
              alt="phonelogo"
            />
            <p className="font-medium">Phone</p>
            <p>
              <a href="tel:9606091262">9606091262</a>
            </p>
            <p>
              <a href="tel:08028392221">08028392221</a>
            </p>
          </div>

          <div className="fax">
            <img
              className="w-10 h-10"
              src="./assests/icons/fax.png"
              alt="faxlogo"
            />
            <p className="font-medium">Fax</p>
            <p>
              <a href="tel:08023721477"> 08023721477</a>
            </p>
          </div>
          <div className="email">
            <img
              className="w-10 h-10"
              src="./assests/icons/email.png"
              alt="emaillogo"
            />
            <p className="font-medium">Email</p>
            <p>
              <a href="mailto:principal@skit.org.in">principal@skit.org.in</a>
            </p>
            <p>
              <a href="mailto:info@skit.org.in">info@skit.org.in</a>
            </p>
            <p>
              <a href="mailto:skitlprinci@gmail.com">skitlprinci@gmail.com</a>
            </p>
          </div>
        </div>
        <hr />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15392.918291273707!2d77.5020918381955!3d13.086273315778925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23fc40000001%3A0x16faf65b66b0a492!2sSri%20Krishna%20Institute%20Of%20Technology(SKIT)%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1684594110729!5m2!1sen!2sin"
          width="500"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
