import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks"
import Loader from "../Loader"


const PrivateRoute = (props: { component: any }) => {
  const { isLoading, hasLogged } = useAuth()

  return isLoading ? (
  <Loader />
) : !isLoading && !hasLogged ? (
  <Navigate to="/login" />
) : (
  // Wrap props.component in curly braces to render it
  props.component
)
}

export default PrivateRoute