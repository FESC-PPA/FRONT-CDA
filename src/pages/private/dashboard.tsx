import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Layout from "../../layouts/layout";

const DashboardPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { getHasLogged } = useAuth()
  console.log("page DashboardPage", getHasLogged())

  if (getHasLogged() === false) {
    // Redirige al usuario a la página "/admin"
    navigate("/login");
  }

  console.log("page DashboardPage 2", getHasLogged())

  return (
    <>
    <h1>home</h1>
    <button onClick={(e) => logout()} type="button">salir</button>
    </>
  );
}

export default DashboardPage;