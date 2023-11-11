import { useEffect, useState } from "react";
import { basedService } from "../../services/based";
import { useBased } from "../../storage";
import { Based } from "../../types";
import { statusOk } from "../../utils/validations";

interface id {
  basedId?: number;
  setSedes: Function
}
export const FormularioSede = ({ basedId, setSedes }: id) => {
  const { update, create } = basedService()
  const { setBasedById, saveBased, getBasedById } = useBased();
  const [nombreSede, setNombreSede] = useState("");
  const [ubicacionSede, setUbicacionSede] = useState("");
  const [vandera, setVandera] = useState(true);
  const { getAllBased } = useBased();


  useEffect(() => {
    if (basedId && vandera) {
      const based = getBasedById(basedId);
      if (based) {
        setNombreSede(based.name);
        setUbicacionSede(based.perimeterLocations);
        setVandera(false);
      }
    }
  }, []);
  // Efecto para cargar datos cuando id cambia

  const guardarSede = async () => {
    if (basedId) {
      const modal = document.getElementById("editarSedeModal" + basedId);
      console.log(basedId)
      try {
        const data: Based = {
          basedId,
          name: nombreSede,
          perimeterLocations: ubicacionSede,
        };
        const response = await update(data);

        if (!statusOk(response.status)) {
          console.error(response.data.message);
        } else {
          setBasedById(basedId, response.data);
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
        const response = await create({
          name: nombreSede,
          perimeterLocations: ubicacionSede,
        });

        if (!statusOk(response.status)) {
          console.error(response.data.message);
        } else {
          saveBased(response.data);
          if (modal && modal instanceof HTMLDialogElement) {
            modal.close();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    setSedes(getAllBased())
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
