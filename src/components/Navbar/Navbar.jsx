import { React, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-screen flex flex-col">
      <div className="flex justify-between p-5 w-full">
        <div className=" ">
          <img
            src="./assests/logo.png"
            alt="Image 1"
            className="object-cover"
          />
        </div>
        <div className="hidden md:flex items-center justify-around gap-4 ">
          <img
            src="./assests/vtulogo.png"
            alt="Image 3"
            className="w-20 h-20 object-cover m-2"
          />
          <img
            src="./assests/aictelogo.png"
            alt="Image 2"
            className="w-20 h-20 object-cover m-2"
          />
          <img
            src="./assests/naaclogo.png"
            alt="Image 3"
            className="w-20 h-20 object-cover m-2"
          />
        </div>
      </div>

      <nav className="flex items-center flex-row justify-end md:justify-normal bg-primary w-full relative">
        <ul className="md:flex  hidden items-center w-full justify-between text-white h-16">
          <NavbarItem link={"/"} title={"Home"} />
          <NavbarItem link="/aboutus" title={"About us"} />
          <NavbarItem link="/alumni-directory" title={"Alumni Directory"} />
          <NavbarItem link="/activities" title={"Activities"} />
          <NavbarItem link="/opportunity" title={"Opportunity"} />
          <NavbarItem link="/contribution" title={"Contribution"} />
          <NavbarItem link="/contactus" title={"Contact Us"} />
        </ul>
        <div
          className="md:hidden text-center flex items-center float-right pr-4"
          onClick={() => setNav(!nav)}
        >
          <p className="bg-green-600 p-1.5 text-white rounded-lg cursor-pointer hover:bg-green-700 px-6">
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </p>
        </div>
      </nav>
      {nav && (
        <nav className="md:hidden flex items-center justify-between bg-primary  w-full h-max relative">
          <div className="absolute z-[10000] bg-primary top-0 w-full py-2">
            <ul className="flex flex-col items-center flex-1 justify-between text-white gap-1">
              <NavbarItem link={"/"} title={"Home"} />
              <NavbarItem link="/aboutus" title={"About us"} />
              <NavbarItem link="/alumni-directory" title={"Alumni Directory"} />
              <NavbarItem link="/activities" title={"Activities"} />
              <NavbarItem link="/opportunity" title={"Opportunity"} />
              <NavbarItem link="/contribution" title={"Contribution"} />
              <NavbarItem link="/contactus" title={"Contact Us"} />
              <NavbarItem link="/login" title={"Login"} />
              <div className="flex items-center justify-center gap-4 ">
                <img
                  src="./assests/vtulogo.png"
                  alt="Image 3"
                  className="w-20 h-20 object-cover m-2"
                />
                <img
                  src="./assests/aictelogo.png"
                  alt="Image 2"
                  className="w-20 h-20 object-cover m-2"
                />
                <img
                  src="./assests/naaclogo.png"
                  alt="Image 3"
                  className="w-20 h-20 object-cover m-2"
                />
              </div>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

export const NavbarItem = ({ title, link }) => {
  const router = useRouter();
  const isActive = router.pathname === link;
  return (
    <a
      href={link}
      className={`cursor-pointer text-center py-2 px-6 md:px-4 w-full lg:px-6 items-center hover:bg-green-300 h-full hover:text-customGray-dark flex justify-center ${
        isActive ? "bg-green-400 text-customGray-dark" : ""
      }`}
    >
      <p>{title}</p>
    </a>
  );
};
