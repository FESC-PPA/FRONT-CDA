import { ReactNode } from "react";
import { Link, Navigate } from "react-router-dom";

type Props = {
  customClassName?: string;
  children: ReactNode;
};

const Layout = ({ children, customClassName }: Props) => {
  return (
    <main className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <section className={`${customClassName || ""}`}>{children}</section>
      Footer
    </main>
  );
};

export default Layout;