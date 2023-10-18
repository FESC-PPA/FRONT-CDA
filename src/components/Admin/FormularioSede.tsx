import { useEffect, useState } from "react";
import { newBased, setBased } from "../../services/sede";
import { useBased } from "../../store";
import { Based } from "../../utils/types";

interface id {
  id?: number;
}
export const FormularioSede = ({ id }: id) => {
  const store = useBased();
  const [nombreSede, setNombreSede] = useState("");
  const [ubicacionSede, setUbicacionSede] = useState("");
  const [vandera, setVandera] = useState(true);

  useEffect(() => {
    if (id && vandera) {
      const based = store.getBasedById(id);
      if (based) {
        setNombreSede(based.name);
        setUbicacionSede(based.location);
        setVandera(false);
      }
    }
  });
  // Efecto para cargar datos cuando id cambia

  const guardarSede = () => {
    if (id) {
      const modal = document.getElementById("editarSedeModal" + id);

      try {
        const data: Based = {
          id,
          name: nombreSede,
          location: ubicacionSede,
        };
        const response = setBased(data);

        if (response.error) {
          console.error(response.error);
        } else {
          store.setBasedById(id, data);
          if (modal && modal instanceof HTMLDialogElement) {
            modal.close();
          }
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const modal = document.getElementById("nuevaSedeModal");

      try {
        const response = newBased({
          name: nombreSede,
          location: ubicacionSede,
        });

        if (response.error) {
          console.error(response.error);
        } else {
          store.saveBased(response.data);
          if (modal && modal instanceof HTMLDialogElement) {
            modal.close();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nombre de la Sede</span>
        </label>
        <input
          type="text"
          id="nombreSede"
          placeholder="Type here"
          className="input input-bordered w-full"
          value={nombreSede}
          onChange={(e) => setNombreSede(e.target.value)}
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Ubicación de la Sede</span>
        </label>
        <input
          type="text"
          id="ubicacionSede"
          placeholder="Type here"
          className="input input-bordered w-full"
          value={ubicacionSede}
          onChange={(e) => setUbicacionSede(e.target.value)}
        />
      </div>
      <hr className="p-2" />
      <button
        onClick={guardarSede}
        className="btn btn-active text-white bg-primary"
      >
        Guardar
      </button>
    </>
  );
};
