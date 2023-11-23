import { useEffect, useState } from "react";
import { useBased } from "../../../storage";
import { Based, Schedule } from "../../../types";
import { ReactElement } from "react";
import { useBasedService } from "../../../services";
import { statusOk } from "../../../utils";
import { AdminModal } from "../AdminModal";
import { ScheduleFrom } from "../schedule";
import { ScheduleTableList } from "../schedule/ScheduleTableList";

export const BasedView = ({ id }): ReactElement => {
  const store = useBased();
  const { findOne } = useBasedService();
  const [based, setBased] = useState<Based>();
  const [schedule, setSchedule] = useState<Schedule[]>();

  const getBased = async (id: number) => {
    const result = await findOne(id);
    console.log(result);
    if (statusOk(result.status)) {
      setSchedule(result.data.schedule);
    }
  };

  useEffect(() => {
    const based = store.getBasedById(id);
    setBased(based);
    getBased(based.basedId);
  }, []);

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className=" flex items-center justify-between">
            <div className="relative max-w-xs">
              <h2 className="card-title">{based?.name}</h2>
              <p>{based?.perimeterLocations}</p>
            </div>
            <div className="card-actions justify-end">
              <AdminModal
                id={`Agregarhorario${based?.basedId}`}
                title="Agregar horario"
                label={"Agregar horario"}
                css="btn btn-primary"
                atributes={{ "data-tip": "Agregar horario" }}
              >
                <ScheduleFrom based={based} />
              </AdminModal>
              <button className=""></button>
            </div>
          </div>

          <ScheduleTableList schedule={schedule} setSchedule={setSchedule} />
        </div>
      </div>
    </>
  );
};
