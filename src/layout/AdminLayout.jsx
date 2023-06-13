import React from "react";
import Auth from "../outlet/Auth";
import { useRouter } from "next/router";
import { useAuth } from "../customHooks/useAuth";
import { useNotification } from "@/customHooks/useNotification";
import { uuid } from "uuidv4";

const AdminLayout = ({ children }) => {
  const { removeUser, user } = useAuth();
  const { setNotification } = useNotification();
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
              <li
                className={`py-3 w-full flex items-center text-white hover:bg-green-500 `}
              >
                <button
                  className=" cursor-pointer px-6 text-center w-full"
                  onClick={() => {
                    removeUser();
                    setNotification(
                      uuid(),
                      "Logged out successfully",
                      "Success",
                      3000
                    );
                  }}
                >
                  Logout
                </button>
              </li>
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
      className={`py-3 w-full flex items-center text-white hover:bg-green-500 ${
        isActive ? "bg-green-800" : ""
      }`}
    >
      <a href={link} className=" cursor-pointer px-6 text-center w-full">
        {title}
      </a>
    </li>
  );
};
