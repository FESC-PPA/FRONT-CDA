import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Loader from "../../components/Loader";
import LoginForm from "../../components/LoginForm";
import Layout from "../../layouts/layout";
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
          <LoginForm></LoginForm>
    </Layout>
  );
};

export default LoginPage;
