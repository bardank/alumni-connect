import React from "react";
import Auth from "../outlet/Auth";

const AdminLayout = ({ children }) => {
  return (
    <Auth>
      <div className="admin">
        <div className="sidebar">
          <div className="h-max w-full">
            <h4 className="text-center text-xl font-bold p-4 text-white bg-black rounded-md">
              Alumni Connect SKIT
            </h4>
          </div>
          <div className="h-max w-full">
            <ul className="flex flex-col gap-3">
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
    </Auth>
  );
};

export default AdminLayout;

export const SidebarItem = ({ title, link }) => {
  return (
    <li className="py-3 px-4 w-full rounded-md bg-red-600 text-white hover:text-customGray-dark">
      <a href={link} className=" cursor-pointer py-3 px-4 ">
        {title}
      </a>
    </li>
  );
};
