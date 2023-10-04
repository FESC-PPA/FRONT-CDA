import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const [section, setSection] = useState(1);

  const [nit, setNit] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");

  const [idAdmin, setIdAdmin] = useState("");
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [apellidoAdmin, setApellidoAdmin] = useState("");

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleNext = () => {
    setSection(section + 1);
  };

  const handleBack = () => {
    setSection(section - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-dark">
          Registro
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          {section === 1 && (
            <div className=" fade-in">
              <div className="mb-4">
                <label
                  htmlFor="nit"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Número de identificación tributaria:
                </label>
                <input
                  type="text"
                  id="nit"
                  value={nit}
                  onChange={(e) => setNit(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
                <div className="font-light text-gray-500 text-sm">
                  NIT o número de registro de su entidad (empresa)
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nombreEmpresa"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Nombre de la entidad:
                </label>
                <input
                  type="text"
                  id="nombreEmpresa"
                  value={nombreEmpresa}
                  onChange={(e) => setNombreEmpresa(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
              </div>

              <button
                type="button"
                className="inline-flex justify-center w-full mx-1 px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={handleNext}
              >
                Siguiente
              </button>
            </div>
          )}

          {section === 2 && (
            <div className=" fade-in">
              <div className="mb-4">
                <label
                  htmlFor="idAdmin"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Número de identificación:
                </label>
                <input
                  type="text"
                  id="idAdmin"
                  value={idAdmin}
                  onChange={(e) => setIdAdmin(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
                <div className="font-light text-gray-500 text-sm">
                  Cedula de ciudadania, pasaporte, cedula extranjeria, etc, del
                  administrador o representante legal
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nombreAdmin"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombreAdmin"
                  value={nombreAdmin}
                  onChange={(e) => setNombreAdmin(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
                <div className="font-light text-gray-500 text-sm">
                  administrador o representante legal
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="apellidoAdmin"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Apellido:
                </label>
                <input
                  type="text"
                  id="apellidoAdmin"
                  value={apellidoAdmin}
                  onChange={(e) => setApellidoAdmin(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
                <div className="text-sm font-light text-gray-500 ">
                  administrador o representante legal
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mx-1 text-sm font-medium text-white bg-secondary border border-transparent rounded-md shadow-sm hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  onClick={handleBack}
                >
                  Atrás
                </button>

                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mx-1 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={handleNext}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {section === 3 && (
            <div className=" fade-in">
              <div className="mb-4">
                <label
                  htmlFor="correo"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Correo:
                </label>
                <input
                  type="email"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contraseña"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-primary-light"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 mx-1 text-sm font-medium text-white bg-secondary border border-transparent rounded-md shadow-sm hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  onClick={handleBack}
                >
                  Atrás
                </button>

                <button
                  className="inline-flex justify-center w-full px-4 py-2 mx-1 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  type="submit"
                >
                  Registrar
                </button>
              </div>
            </div>
          )}
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-primary hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};
