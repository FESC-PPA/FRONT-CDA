import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUsers,
  faStore,
  faExchangeAlt,
  faSignOutAlt,
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
          to="#"
          className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Inicio
        </Link>

        <Link
          className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="#"
        >
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
          Autorizaciones
        </Link>

        <Link
          className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="#"
        >
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          Usuarios
        </Link>

        <Link
          className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="#"
        >
          <FontAwesomeIcon icon={faStore} className="mr-2" />
          Comercios
        </Link>

        <Link
          className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          to="#"
        >
          <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
          Transacciones
        </Link>
      </nav>

      <Link
        className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
        to="#"
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Cerrar sesión
      </Link>

      <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

      <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
        Copyright WCSLAT@2023
      </p>
    </div>
  );
};
