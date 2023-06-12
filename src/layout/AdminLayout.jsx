import React from "react";
import Auth from "../outlet/Auth";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  return (
    <Auth>
      <div className="admin ">
        <div className="sidebar">
          <div className="h-max w-full">
            <h4 className="text-center text-xl font-bold p-4 text-white rounded-md">
              Alumni Connect SKIT
            </h4>
          </div>
          <div className=" w-full">
            <ul className="flex flex-col gap-3">
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
        <div className="main relative">{children}</div>
      </div>
    </Auth>
  );
};

export default AdminLayout;

export const SidebarItem = ({ title, link }) => {
  const router = useRouter();
  const isActive = router.pathname === link;
  return (
    <li
      className={`py-3 w-full flex items-center text-white hover:text-customGray-dark ${
        isActive ? "text-red-600" : ""
      }"}`}
    >
      <a href={link} className=" cursor-pointer py-3 px-6 ">
        {title}
      </a>
    </li>
  );
};
