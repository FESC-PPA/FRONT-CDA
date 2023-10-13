import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const AdminNavBar = ({ toggleSidebar }) => {
 
  const salir = ()  => {
    const navigate = useNavigate();
    useAuth().logout()
    navigate("/login");
  }
  return (
    <div className="bg-white shadow w-full p-2 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center space-x-5">
          <button
            id="menuBtn"
            className="px-2  md:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-primary-dark text-lg"
            />
          </button>
          <h2 className="font-bold text-xl text-primary-light ">
            IFK Colombia
          </h2>
        </div>

        <div className=" flex items-center"></div>
      </div>

      <div className="space-x-5">
        <button onClick={(e) => salir()} type="button">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="text-primary text-lg"
          />
          <span> Logout </span>
        </button>
      </div>
    </div>
  );
};
