import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { emailValidation } from "../../utils/validations";
import { signIn } from "../../services/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasErrors, setErrors] = useState(false);

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!email || !password || !emailValidation(email)) {
      setErrors(true);
      return;
    }

    setErrors(false);

    signIn(email, password)
      .then((user) => {
        if (user.nom) return navigate("/admin");
      })
      .catch(() => {
        setErrors(true);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-dark">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form >
          <div className="mb-4">
            <label htmlFor="nit" className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nombreEmpresa" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
            />
            <div className="text-sm">
              <a href="#" className="font-semibold text-primary hover:text-primary-light">
                Forgot password?
              </a>
            </div>
          </div>

          <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-light focus:outline-none focus:bg-primary-light">
            Sign in
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="#" className="font-semibold leading-6 text-primary-dark hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
};

export default LoginForm;
