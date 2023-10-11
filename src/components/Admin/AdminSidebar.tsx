import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faFileDownload,
  faUsers,
  faStore,
  faExchangeAlt,
  faSignOutAlt,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div
      className="p-2 bg-white w-full md:w-60 flex flex-col md:flex"
      id="sideNav"
    >
      <nav>
        <Link
          to="/dashboard"
          className="block text-primary py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-primary hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faGauge} className="mr-2" />
          Dashboard
        </Link>

        <Link
          className="block text-primary py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-primary hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="/management"
        >
          <FontAwesomeIcon icon={faLock} className="mr-2" />
          Management
        </Link>

        <Link
          className="block text-primary py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-primary hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="/users"
        >
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          Usuarios
        </Link>

        <Link
          className="block text-primary py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-primary hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="/reports"
        >
          <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
          Reports
        </Link>
      </nav>
    </div>
  );
};
