import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck, faPenToSquare, faTrash, faUser, faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { AdminModal } from "../AdminModal";
import { Schedule } from "../../../types";
import { Dispatch, SetStateAction } from "react";
import { ScheduleView, ScheduleViewUser } from ".";



interface IScheduleTableList {
  schedule: Schedule[],
  setSchedule: Dispatch<SetStateAction<Schedule[]>>
}

export const ScheduleTableList = ({ schedule, setSchedule }: IScheduleTableList) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table min-w-full  ">
          <thead className="bg-gray-100">
            <tr>
              <th>Name</th>
              <th>Users</th>
              <th>assistance </th>
              <th>Add User</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {schedule && schedule.map((item: Schedule, index: number) => (
              <tr key={`schedule${item.scheduleId}`}>
                <td>
                  <AdminModal
                    id={`verHorario${item.scheduleId}`}
                    title="editar"
                    label={item.name}
                    css="tooltip "
                    atributes={{ "data-tip": "Ver horario" }}
                  >
                    <ScheduleView schedule={item} />
                  </AdminModal>

                </td>
                <td>
                  <AdminModal
                    id={`verPersonal${item.scheduleId}`}
                    title="editar"
                    label={(<>{item.usersChedule.length.toString()} <FontAwesomeIcon icon={faUser} /> </>)}
                    css="btn btn-info btn-sm tooltip"
                    atributes={{ "data-tip": "Ver personal" }}
                  >
                    <ScheduleViewUser usersChedule={item.usersChedule} />
                  </AdminModal>

                </td>
                <th>
                  <AdminModal
                    id={`verAssistance${item.scheduleId}`}
                    title="editar"
                    label={<FontAwesomeIcon icon={faListCheck} />}
                    css="btn btn-success btn-sm  tooltip"
                    atributes={{ "data-tip": "Ver asistenia" }}
                  >
                    <p>sdfsdf</p>
                  </AdminModal>

                </th>
                <td>
                  <AdminModal
                    id={`agregarPersonal${item.scheduleId}`}
                    title="editar"
                    label={<FontAwesomeIcon icon={faUserPlus} />}
                    css="btn btn-primary btn-sm  tooltip"
                    atributes={{ "data-tip": "agregar personal" }}
                  >
                    <p>sdfsdf</p>
                  </AdminModal>

                </td>
                <td>
                  <AdminModal
                    id={`editarHorario${item.scheduleId}`}
                    title="editar"
                    label={<FontAwesomeIcon icon={faPenToSquare} />}
                    css="btn btn-warning btn-sm  tooltip"
                    atributes={{ "data-tip": "editar horario" }}
                  >
                    <p>sdfsdf</p>
                  </AdminModal>
                </td>
                <td>
                  <AdminModal
                    id={`eliminarHorario${item.scheduleId}`}
                    title="editar"
                    label={<FontAwesomeIcon icon={faTrash} />}
                    css="btn btn-error btn-sm  tooltip"
                    atributes={{ "data-tip": "eliminar horario" }}
                  >
                    <p>sdfsdf</p>
                  </AdminModal>

                </td>
              </tr>
            ))
            }

          </tbody>

        </table>
      </div>
    </>
  );
};
