import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { AdminLayout } from "../../layouts/AdminLayout";


const DashboardPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { getHasLogged } = useAuth()
  return (
    <AdminLayout>
        <h1>home</h1>
        <button onClick={(e) => logout()} type="button">salir</button>
    </AdminLayout>

  );
}

export default DashboardPage;