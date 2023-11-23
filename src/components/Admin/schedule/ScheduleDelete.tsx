import { useScheduleService } from "../../../services";
import { statusOk } from "../../../utils";

interface IScheduleDelete {
  scheduleId: number;
}
export const ScheduleDelete = ({ scheduleId }: IScheduleDelete) => {
  const { remove } = useScheduleService();
  const eliminar = async () => {
    const result = await remove(scheduleId);
    if (!statusOk(result.status)) {
      alert("no se pudo borrar");
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
      <span>Está seguro de elimnar este Horario?</span>
      <div>
        <button
          onClick={eliminar}
          className="btn btn-sm text-white hover:bg-primary bg-primary"
        >
          Acceptar
        </button>
      </div>
    </div>
  );
};
