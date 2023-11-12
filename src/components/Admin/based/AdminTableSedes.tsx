import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faSearch,
  faPenToSquare,
  faEye,
  faBuilding,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

import { AdminModal, FormularioSede, EliminarSede } from "../..";
import { statusOk } from "../../../utils";
import { useBased } from "../../../storage";
import { Based } from "../../../types";

import { useBasedService } from "../../../services";

export const AdminTableSedes = () => {
  const store = useBased();
  const [sedesList, setSedes] = useState<Based[]>([]);
  const [searchText, setSearchText] = useState("");
  const { findAll } = useBasedService()

  const getBaseds = async () => {
    try {
      const response = await findAll();
      if (statusOk(response.status)) {
        setSedes(response.data)
        store.updateBasedList(response.data)
      } else {
        console.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      // Show error message to the user
    }
  }

  useEffect(() => {
    const allBased = store.getAllBased();
    if (allBased.length > 0) {
      setSedes(allBased);
    } else {
      getBaseds()
    }
  }, []);

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
                    {(sedesList.length == 0) && (
                      <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 darkk:text-gray-200 bg-gray-50">
                        <div className="flex-col row h-full w-full flex justify-center items-center">
                          <div className="w-20 first-letter:rounded-xl">
                            <FontAwesomeIcon icon={faBuilding} className="mr-2 h-full w-full text-slate-500" />
                          </div>
                          <br />
                          <div>
                            <h1 className="text-2xl">No Based created</h1>
                          </div>
                        </div>
                      </td>)}
                    {sedesList.map((item: Based, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 darkk:text-gray-200">
                          <Link
                            to={"/baseds/" + item.basedId}
                            className="hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 darkk:text-gray-200">
                          {item.perimeterLocations}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={"/baseds/" + item.basedId}>
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
                            id={`editarSedeModal${item.basedId}`}
                            title="editar"
                            label={<FontAwesomeIcon icon={faPenToSquare} />}
                            css="btn bg-yellow-500 text-white hover:bg-yellow-700 tooltip tooltip-left"
                            atributes={{ "data-tip": "editar sede" }}
                          >
                            <FormularioSede basedId={item.basedId} setSedes={setSedes} />
                          </AdminModal>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <AdminModal
                            id={`eliminarSedeModal${item.basedId}`}
                            title={item.name}
                            label={<FontAwesomeIcon icon={faTrash} />}
                            css="btn bg-red-500 text-white hover:bg-red-700 tooltip tooltip-left"
                            atributes={{ "data-tip": "Eliminar sede" }}
                          >
                            <EliminarSede id={item.basedId} setSedes={setSedes} />
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
