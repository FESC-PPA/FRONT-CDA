import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Loader from "../../components/Loader";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoading, hasLogged } = useAuth();

  useEffect(() => {
    if (!isLoading && hasLogged) navigate("/admin");
  }, [hasLogged]);

  return isLoading ? <Loader /> : (
    <div className="container">
      <section className="login text-center">
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
