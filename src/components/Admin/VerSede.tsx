import { deleteBasedById } from "../../services/sede";
import { useEffect, useState } from "react";
import { useBased } from "../../storage";
import { Based } from "../../types";
import { ReactElement } from "react";

export const VerSede = ({ id }): ReactElement => {
  const store = useBased();
  const [based, setBased] = useState<Based>({ name: "", location: "" });

  useEffect(() => {
    const based = store.getBasedById(id);
    console.log(based);
    setBased(based);
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{based?.name}</h2>
        <p>{based?.location}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Agregar horario</button>
        </div>
      </div>
    </div>
  );
};
