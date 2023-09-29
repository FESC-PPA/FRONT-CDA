import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Loader from "../../components/Loader";
import LoginForm from "../../components/LoginForm";
import Layout from "../layout";
import { Fondo } from "../../components/fondo";

const LoginPage = () => {
  const navigate = useNavigate();
  const { hasLogged } = useAuth()

  useEffect(() => {
    if (hasLogged) {
      // Redirige al usuario a la página "/admin"
      navigate("/admin");
    }
  }, [hasLogged]);

  // Un estado adicional para manejar isLoading


  return (
    <Layout>
      <div className="bg-white">
        <div className="relative w-screen px-6 pt-14 isolate lg:px-8">
          <Fondo></Fondo>
          <div className="flex flex-1 w-max"></div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
