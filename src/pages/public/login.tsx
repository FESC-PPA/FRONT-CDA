import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Loader from "../../components/Loader";
import LoginForm from "../../components/LoginForm";
import Layout from "../layout";

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
      <div className="container">
        <section className="login text-center">
        <LoginForm></LoginForm>
        </section>
      </div>
    </Layout>
  );
};

export default LoginPage;
