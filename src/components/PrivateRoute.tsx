import { Navigate } from "react-router-dom";
import { useAuth } from "../store";
//import { Children } from "../utils/types"

const PrivateRoute = ({ children }) => {
  const { getHasLogged, hasLogged } = useAuth();

  return getHasLogged() ? <>{children}</> : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
