import { ReactNode } from "react";
import { AppFooter, Container, AdminSidebar, AdminNavBar, AppFondo } from "../components";

import { useAuth } from "../hooks";
import { Children } from "../utils/types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AdminLayout = ({ children }: Children) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <AdminNavBar toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-wrap">
          <AdminSidebar isSidebarVisible={isSidebarVisible} />
          <div className="flex-1 p-4 w-full md:w-1/2 bg-gray-100">{children}</div>
        </div>
      </div>
    </>
  );
};
