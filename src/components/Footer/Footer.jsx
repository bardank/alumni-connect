import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className=" ">
        {/* <div className=" flex item-center justify-evenly grid md:grid-cols-4">
          <div className=" gap-5  m-5">
            <h5 className="text-black underline text-3xl font-bold p-1">
              Important Links
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink linkText="Exams" link="#" />
              <FooterLink linkText="Downloads" link="#" />
              <FooterLink linkText="Proctorial System" link="#" />
              <FooterLink linkText=" Service Rules" link="#" />
              <FooterLink linkText="Grievances" link="#" />
              <FooterLink linkText="Route Map" link="#" />
              <FooterLink linkText="Best Practices" link="#" />
              <FooterLink linkText="Faculty Sanctioned List" link="#" />
              <FooterLink linkText="Green Audit" link="#" />
            </ol>
          </div>
          <div className=" gap-3 m-5">
            <h5 className="text-black underline text-3xl p-4  font-bold">
              Courses
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink
                linkText="Artificial Intelligence and Machine Learning"
                link="#"
              />
              <FooterLink
                linkText="Computer Science and Engineering"
                link="#"
              />
              <FooterLink
                linkText=" Information Science and Engineering
"
                link="#"
              />
              <FooterLink
                linkText="Electronics and Communication Engineering"
                link="#"
              />
              <FooterLink linkText="Mechanical Engineering" link="#" />
              <FooterLink linkText="Civil Engineering" link="#" />
            </ol>
          </div>
          <div className=" gap-3 m-5">
            <h5 className="text-black underline text-3xl font-bold">
              Mandatory Committees
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink
                linkText="Anti Ragging Committee
"
                link="#"
              />
              <FooterLink
                linkText="Anti Sexual Harassment Committee
"
                link="#"
              />
              <FooterLink
                linkText="Grievance Redressal Committee
 "
                link="#"
              />
              <FooterLink linkText=" SC/ST cell Rules" link="#" />
              <FooterLink
                linkText="Women and Equal Opportunity Cell
"
                link="#"
              />
            </ol>
          </div>
          <div className=" gap-3 m-5">
            <h5 className="text-black underline text-3xl font-bold">
              Reports & Notifications
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink linkText="NBA" link="#" />
              <FooterLink linkText="NAAC" link="#" />
              <FooterLink linkText="VTU " link="#" />
              <FooterLink linkText="  AICTE" link="#" />
              <FooterLink linkText="IQAC" link="#" />
              <FooterLink linkText="Feed Back Analysisp" link="#" />
              <FooterLink linkText="MOU" link="#" />
              <FooterLink linkText="Event Reports" link="#" />
              <FooterLink
                linkText="National and Commemorative Events"
                link="#"
              />
            </ol>
          </div>
        </div> */}

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
        <div className="bg-black text-white w-full text-center py-4 ">
          Created by CSE Department
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
