import { Navigate} from "react-router-dom"
import { useAuth } from "../hooks"
//import { Children } from "../utils/types"


const PrivateRoute = ({ children }) => {
  const { getHasLogged, hasLogged } = useAuth()

  return getHasLogged() ? <>{hasLogged.toString()}  {children}</> : <Navigate to="/login"></Navigate>
  
}

export default PrivateRoute
