import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faFileDownload,
  faUsers,
  faStore,
  faExchangeAlt,
  faSignOutAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const AdminSidebar = ({ isSidebarVisible }) => {
  const links = [
    { label: "Baseds", to: "/baseds", icon: faBuilding, active: false },
    { label: "Management", to: "/management", icon: faLock, active: false },
    { label: "Usuarios", to: "/users", icon: faUsers, active: false },
    { label: "Reports", to: "/reports", icon: faFileDownload, active: false },
  ];

  return (
    <div
      className={`rounded-lg shadow-lg px-2 mx-2 my-1 bg-gray-200 w-auto flex flex-col md:flex ${
        isSidebarVisible ? "hidden" : ""
      }`}
      id="sideNav"
    >
      <nav>
        {links.map((l, i) => (
          <Link
            key={`LinkBar${i}`}
            to={l.to}
            className="block text-primary py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-primary hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          >
            <FontAwesomeIcon icon={l.icon} className="mr-2" />
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
