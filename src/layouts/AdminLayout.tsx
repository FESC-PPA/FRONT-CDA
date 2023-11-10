import {
  AppFooter,
  Container,
  AdminSidebar,
  AdminNavBar,
  AppFondo,
} from "../components";

import { useAuth } from "../storage";
import { Children } from "../types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AdminLayout = ({ children }: Children) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <>
      <AppFondo />
      <div className="flex flex-col h-screen bg-w">
        <AdminNavBar toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-wrap">
          <AdminSidebar isSidebarVisible={isSidebarVisible} />
          <div className="flex-1 p-4 w-full md:w-1/2 ">{children}</div>
        </div>
      </div>
    </>
  );
};
