import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className=" ">

        <div className="bg-primary p-2 w-screen pt-6">
          <ul className="flex flex-row gap-8 justify-center pb-3 ">
            <SocialLink
              link="https://www.facebook.com/skit.org.in?modal=admin_todo_tour"
              iconSrc="./assests/icons/facebook.png"
            />
            <SocialLink
              link="https://www.linkedin.com/company/72587599/admin/"
              iconSrc="./assests/icons/linkedin.png"
            />
            <SocialLink
              link="https://www.instagram.com/skit.org.in/"
              iconSrc="./assests/icons/instagram.png"
            />

            <SocialLink
              link="https://twitter.com/skit_org_in"
              iconSrc="./assests/icons/twitter.png"
            />
            <SocialLink
              link="https://in.pinterest.com/skit_org_in/"
              iconSrc="./assests/icons/pinterest.png"
            />
          </ul>
          <p className="text-center text-white">
            &copy; Copyright 2023 · All rights reserved.
          </p>
        </div>
        <div className="bg-gray-800 text-center">
            <p className="text-center text-white py-2 ">Created by CSE Departement</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
const FooterLink = ({ linkText, link }) => {
  return (
    <li>
      <a className="font-sans font-poppins text-base " href={link}>
        {linkText}
      </a>
    </li>
  );
};
const SocialLink = ({ link, iconSrc }) => {
  return (
    <li>
      <a href={link} target="_blank">
        <img className="w-10 h-10" src={iconSrc} alt="icon" />
      </a>
    </li>
  );
};
