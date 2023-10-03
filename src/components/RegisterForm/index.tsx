import { useState } from "react";


export const RegisterForm = () => {
    const [nit, setNit] = useState("");
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [idAdmin, setIdAdmin] = useState("");
    const [nombreAdmin, setNombreAdmin] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar los datos del formulario
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Registro
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nit" className="block text-gray-700 text-sm font-bold mb-2">
                            Número de identificación tributaria (NIT o número de registro):
                        </label>
                        <input
                            type="text"
                            id="nit"
                            value={nit}
                            onChange={(e) => setNit(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nombreEmpresa" className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre de la empresa:
                        </label>
                        <input
                            type="text"
                            id="nombreEmpresa"
                            value={nombreEmpresa}
                            onChange={(e) => setNombreEmpresa(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="idAdmin" className="block text-gray-700 text-sm font-bold mb-2">
                            Número de identificación del administrador o representante legal:
                        </label>
                        <input
                            type="text"
                            id="idAdmin"
                            value={idAdmin}
                            onChange={(e) => setIdAdmin(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nombreAdmin" className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre completo del administrador o representante legal:
                        </label>
                        <input
                            type="text"
                            id="nombreAdmin"
                            value={nombreAdmin}
                            onChange={(e) => setNombreAdmin(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">
                            Correo del administrador o representante legal:
                        </label>
                        <input
                            type="email"
                            id="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contraseña" className="block text-gray-700 text-sm font-bold mb-2">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Registrar
                    </button>
                </form>
            </div>
        </div>

    );
};

