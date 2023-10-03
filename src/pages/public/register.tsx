import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Layout from "../../layouts/layout";
import { RegisterForm } from "../../components";

const RegisterPage = () => {
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
      <RegisterForm></RegisterForm>
    </Layout>
  );
};

export default RegisterPage;
