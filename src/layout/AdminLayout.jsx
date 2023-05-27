import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin">
      <div className="sidebar">
        <div>
          <h4 className="text-center text-xl font-semibold">
            {" "}
            Alumni Connect SKIT
          </h4>
        </div>
        <div className="sidebar__menu">
          <ul className="flex flex-col">
            <SidebarItem title="Dashboard" link="/dashboard" />
            <SidebarItem
              title="Alumni-Directory"
              link="/dashboard/alumni-directory"
            />
            <SidebarItem
              title="Upcoming Events"
              link="/dashboard/upcoming-events"
            />
            <SidebarItem title="Opportunity" link="/dashboard/opportunity" />
          </ul>
        </div>
      </div>
      <div className="main">{children}</div>
    </div>
  );
};

export default AdminLayout;

export const SidebarItem = ({ title, link }) => {
  return (
    <li className="py-3 px-4 w-full">
      <a
        href={link}
        className=" cursor-pointer py-3 px-4 rounded-md hover:bg-green-400 text-white hover:text-customGray-dark"
      >
        {title}
      </a>
    </li>
  );
};
