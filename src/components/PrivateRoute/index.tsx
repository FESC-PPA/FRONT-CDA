import { ReactNode } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks"
import { Loader } from "../"
import { Children } from "../../utils/types"


const PrivateRoute = ({ children }) => {
  const { hasLogged } = useAuth()
  const navigate = useNavigate();

  if (hasLogged === false) {
    // Redirige al usuario a la página "/admin"
    navigate("/login");
  }

  console.log("private router", hasLogged)

  return children
  
}

export default PrivateRoute
