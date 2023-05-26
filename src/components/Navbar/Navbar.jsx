import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between  ">
        <div className="">
          <img src="./assests/logo.png" alt="Image 1" />
        </div>
        <div className=" flex items-center justify-around gap-4 ">
          <img
            src="./assests/vtulogo.png"
            alt="Image 3"
            className="w-16 h-16 object-cover m-2"
          />
          <img
            src="./assests/aictelogo.png"
            alt="Image 2"
            className="w-16 h-16 object-cover m-2"
          />

          <img
            src="./assests/naaclogo.png"
            alt="Image 3"
            className="w-16 h-16 object-cover m-2"
          />
        </div>
      </div>

      <nav className="flex items-center flex-row justify-between bg-primary py-2 ">
        <ul className="flex items-center flex-1 justify-between text-white">
          <NavbarItem link={"/"} title={"Home"} />
          <NavbarItem link="/aboutus" title={"About us"} />
          <NavbarItem link="/alumni-directory" title={"Alumni Directory"} />
          <NavbarItem link="/activities" title={"Activities"} />
          <NavbarItem link="/opportunity" title={"opportunity"} />
          <NavbarItem link="/contribution" title={"Contribution"} />
          <NavbarItem link="/contactus" title={"contact us"} />
          <NavbarItem link="/login" title={"Login"} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

export const NavbarItem = ({ title, link }) => {
  return (
    <a
      href={link}
      className=" cursor-pointer mx-4 py-3 px-4 rounded-md hover:bg-green-400  hover:text-customGray-dark"
    >
      {title}
    </a>
  );
};
