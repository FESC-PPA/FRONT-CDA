import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import LoginForm from "../../components/LoginForm";
import Layout from "../../layouts/layout";

const LoginPage = () => {
  const navigate = useNavigate();
  const { hasLogged } = useAuth()

  if (hasLogged === true) {
    // Redirige al usuario a la página "/admin"
    navigate("/dashboard");
  }

  return (
    <Layout>
          <LoginForm></LoginForm>
    </Layout>
  );
};

export default LoginPage;
