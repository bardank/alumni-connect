import React from "react";

const Navbar = () => {
  return (
    <div>
      <img src="./assests/logo.png" alt="SKIT logo" />

      <nav className="flex items-center justify-between bg-primary py-2">
        <ul className="flex items-center flex-1 justify-between text-white">
          <NavbarItem link={"/"} title={"Home"} />
          <NavbarItem link="/alumni-directory" title={"Alumni Directory"} />
          <NavbarItem link="/activities" title={"Activities"} />
          <NavbarItem link="/aboutus" title={"About us"} />
          <NavbarItem link="/login" title={"Login"} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

export const NavbarItem = ({ title, link }) => {
  return (
    <li
      href={link}
      className=" cursor-pointer mx-4 py-3 px-4 rounded-md hover:bg-green-400  hover:text-customGray-dark"
    >
      {title}
    </li>
  );
};
