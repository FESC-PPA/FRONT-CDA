import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faSearch,
  faPenToSquare,
  faEye,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

import { AdminModal, FormularioSede, EliminarSede } from "../";
import { getAllSede } from "../../services/sede";
import { useBased } from "../../store";
import { Based } from "../../utils/types";

export const AdminTableSedes = () => {
  const store = useBased();
  const [sedesList, setSedes] = useState<Based[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSedesList, setFilteredSedesList] = useState<Based[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allBased = store.getAllBased();
      if (allBased.length > 0) {
        setSedes(allBased);
      } else {
        try {
          const response = await getAllSede();

          if (response.error) {
            console.error(response.error);
          } else {
            setSedes(response.data);
            store.updateBasedList(response.data);
          }
        } catch (error) {
          console.error(error);
          // Muestra un mensaje de error al usuario
        }
      }
    };

    fetchData(); // Llama a la función fetchData para realizar la carga de datos una vez
  }, []);

  useEffect(() => {
    const filteredSedes = sedesList.filter((sede) =>
      sede.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredSedesList(filteredSedes);
  }, [sedesList, searchText]);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col bg-white p-2 shadow-xl border border-gray-200 rounded-lg">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className=" divide-y divide-gray-200 ">
              <div className="py-3 px-4 flex w-full items-center justify-between">
                <div className="relative max-w-xs">
                  <label htmlFor="hs-table-search" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="p-3 pl-10 border block w-full border-gray-200 rounded-md text-sm focus:border-primary"
                    placeholder="Search for items"
                    value={searchText}
                    onChange={handleSearchInputChange}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-gray-300"
                    />
                  </div>
                </div>
                <AdminModal
                  id="nuevaSedeModal"
                  title="crear una nueva sede"
                  label="Nuena sede"
                >
                  <FormularioSede setSedes={setSedes} />
                </AdminModal>
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase"
                      >
                        Sede
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium uppercase"
                      >
                        Ver
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium uppercase"
                      >
                        Reporte
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium uppercase"
                      >
                        Editar
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium uppercase"
                      >
                        Borrar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 darkk:divide-gray-700">
                    {filteredSedesList.map((item: Based, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 darkk:text-gray-200">
                          <Link
                            to={"/baseds/" + item.id}
                            className="hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 darkk:text-gray-200">
                          {item.location}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={"/baseds/" + item.id}>
                            <button
                              className="btn bg-white text-primary hover:bg-white tooltip tooltip-left"
                              data-tip="Ver detalles"
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="btn bg-green-500  text-white hover:bg-green-700 tooltip tooltip-left"
                            data-tip="Reporte rápido"
                          >
                            <FontAwesomeIcon icon={faFile} />
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <AdminModal
                            id={`editarSedeModal${item.id}`}
                            title="editar"
                            label={<FontAwesomeIcon icon={faPenToSquare} />}
                            css="btn bg-yellow-500 text-white hover:bg-yellow-700 tooltip tooltip-left"
                            atributes={{ "data-tip": "editar sede" }}
                          >
                            <FormularioSede id={item.id} setSedes={setSedes} />
                          </AdminModal>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <AdminModal
                            id={`eliminarSedeModal${item.id}`}
                            title={item.name}
                            label={<FontAwesomeIcon icon={faTrash} />}
                            css="btn bg-red-500 text-white hover:bg-red-700 tooltip tooltip-left"
                            atributes={{ "data-tip": "Eliminar sede" }}
                          >
                            <EliminarSede id={item.id} setSedes={setSedes} />
                          </AdminModal>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
