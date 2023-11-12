import { useEffect, useState } from "react";
import { Based, Schedule, Weekdays, Workdays } from "../../../types";
import { ReactNode } from "react";
import { useScheduleService, useWeekDaysService } from "../../../services";
import { statusOk } from "../../../utils";

interface IHorario {
  based: Based
}

export const FormularioHorario = ({ based }: IHorario) => {
  const { findAll } = useWeekDaysService()
  const { create } = useScheduleService()
  const [nombreHorario, setNombreHorario] = useState<string>();
  const [diaSemana, setDiaSemana] = useState<string>();
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [horario, setHorario] = useState<Workdays[]>([] as Workdays[]);
  const [weekDays, setWeekDays] = useState<Weekdays[]>([] as Weekdays[])


  const agregarDia = () => {
    if (diaSemana && horaInicio && horaFin) {
      setHorario([
        ...horario,
        { endTime: horaFin, startTime: horaInicio, weekdays: getByDay(diaSemana) },
      ]);
      //setDiaSemana();
      setHoraInicio("");
      setHoraFin("");
    }
  };

  const getById = (id): Weekdays => {
    return weekDays.find((week) => week.weekDaysId == id)
  }

  const getByDay = (day: string): Weekdays => {
    return weekDays.find((week) => week.day == day)
  }

  const eliminarDia = (index) => {
    const nuevoHorario = horario.filter((dia, i) => i !== index);
    setHorario(nuevoHorario);
  };

  useEffect(() => {
    const t = async () => {
      const result = await findAll()
      console.log(result)
      if (statusOk(result.status)) {
        setWeekDays(result.data)
        setDiaSemana(weekDays[0]?.day)
      }
    }
    t()
  }, [])

  // Ordenar el array horario en orden descendente por día, hora de inicio y hora de fin.
  const horarioOrdenado = [...horario].sort((a, b) => {
    if (a.weekdays.day < b.weekdays.day) return 1;
    if (a.weekdays.day > b.weekdays.day) return -1;
    if (a.startTime < b.startTime) return 1;
    if (a.startTime > b.startTime) return -1;
    if (a.endTime < b.endTime) return 1;
    if (a.endTime > b.endTime) return -1;
    return 0;
  });

  const guardarHorario = async () => {
    if (horario.length > 0) {
      const data: Schedule = {
        name: nombreHorario,
        basedId: based.basedId,
        based,
        workdays: horario
      }

      const result = await create(data)
      if (statusOk(result.status)) {

      }
    }
  };

  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Ingresa el nombre para el horaio</span>
        </label>
        <input type="text" placeholder="nombre del horario" className="input input-bordered w-full" onChange={(e) => setNombreHorario(e.target.value)} />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Agregar dias al horario </span>
        </label>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Día de la Semana</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr key="inputsHorario">
                <td>0</td>
                <td>
                  <select className="input" onChange={(e) => setDiaSemana(e.target.value)}>
                    {weekDays.map((day) => (
                      <option key={`day${day.weekDaysId}`} value={day.day}>
                        {day.day}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="time"
                    id="horaInicio"
                    className="input"
                    value={horaInicio}
                    onChange={(e) => setHoraInicio(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    id="horaFin"
                    className="input"
                    value={horaFin}
                    onChange={(e) => setHoraFin(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn bg-primary text-white"
                    onClick={agregarDia}
                  >
                    Agregar
                  </button>
                </td>
              </tr>
              {horarioOrdenado.map((dia, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dia.weekdays.day}</td>
                  <td>{dia.startTime}</td>
                  <td>{dia.endTime}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => eliminarDia(index)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr className="p-2" />
      <button
        onClick={guardarHorario}
        className="btn btn-active text-white bg-primary"
      >
        Registrar horario
      </button>
    </>
  );
};
