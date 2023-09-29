import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Loader from "../../components/Loader";
import Layout from "../layout";
import { EmpresaForm } from "../../components/EmpresaForm";
import { Fondo } from "../../components/fondo";

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
        <div className="container">
          <section>
            <div className="bg-white">
              <div className="relative px-6 pt-14 isolate lg:px-8">
                <Fondo></Fondo>
                <EmpresaForm></EmpresaForm>

              </div>
            </div>
          </section>
        </div>
  
      </Layout>
    );
};

export default RegisterPage;
