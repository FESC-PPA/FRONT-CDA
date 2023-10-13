import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { signIn } from "../../services/auth";


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, hasLogged } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await signIn({ email, password });

      if (response.error) {
        throw new Error(response.error);
      }

      login(response.data);
      //window.location.href = "/dashboard"
      
    } catch (error) {
      console.error(error);
      // Show error message to the user
    }
  };

  if (hasLogged === true) {
    // Redirige al usuario a la página "/admin"
    navigate("/dashboard");
  }


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-dark">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nit"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nombreEmpresa"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-primary hover:text-primary-light"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
          >
            Sign in
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold leading-6 text-primary hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};