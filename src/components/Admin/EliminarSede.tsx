import { deleteBasedById } from "../../services/sede";
import { useBased } from "../../store";
import { ReactElement } from "react";

export const EliminarSede = ({ id }): ReactElement => {
  const store = useBased();
  const eliminar = () => {
    try {
      const result = deleteBasedById(id); // await
      if (result.error) {
        console.error(result.error);
      } else {
        store.deleteBasedById(id);
        var modal = document.getElementById(`eliminarSedeModal${id}`);
        if (modal && modal instanceof HTMLDialogElement) {
          modal.close();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-info shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>Está seguro de elimnar esta sede?</span>
      <div>
        <button
          onClick={(e) => eliminar()}
          className="btn btn-sm text-white hover:bg-primary bg-primary"
        >
          Acceptar
        </button>
      </div>
    </div>
  );
};
