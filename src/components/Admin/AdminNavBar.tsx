import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../store";
import { useNavigate } from "react-router-dom";

export const AdminNavBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const salir = () => {
    //useAuth().logout();
    logout();
    navigate("/login");
  };
  return (
    <div className="p-2 flex w-full items-center justify-between">
      <div className="flex items-center">
        <div className="flex text-primary rounded-lg  shadow-xl p-2 items-center space-x-5">
          <button
            id="menuBtn"
            className="px-2  md:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} className=" text-lg" />
          </button>
          <h2 className="font-bold text-xl  ">IFK Colombia</h2>
        </div>
      </div>

      <div className="">
        <button
          onClick={(e) => salir()}
          type="button"
          className="bg-secondary rounded-lg hover:scale-105 transition-transform h-auto py-2 items-center justify-center px-4 text-sm font-semibold text-white"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="text-lg" />
          <span> Logout </span>
        </button>
      </div>
    </div>
  );
};
