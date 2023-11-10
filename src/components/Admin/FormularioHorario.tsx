import { useState } from "react";
import { Based } from "../../types";
import { ReactNode } from "react";
export const FormularioHorario = () => {
  const [diaSemana, setDiaSemana] = useState("Lunes");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [horario, setHorario] = useState([]);
  const agregarDia = () => {
    if (diaSemana && horaInicio && horaFin) {
      setHorario([
        ...horario,
        { dia: diaSemana, inicio: horaInicio, fin: horaFin, id: Date.now() },
      ]);
      setDiaSemana("Lunes");
      setHoraInicio("");
      setHoraFin("");
    }
  };

  const eliminarDia = (id) => {
    const nuevoHorario = horario.filter((dia) => dia.id !== id);
    setHorario(nuevoHorario);
  };

  // Ordenar el array horario en orden descendente por día, hora de inicio y hora de fin.
  const horarioOrdenado = [...horario].sort((a, b) => {
    if (a.dia < b.dia) return 1;
    if (a.dia > b.dia) return -1;
    if (a.inicio < b.inicio) return 1;
    if (a.inicio > b.inicio) return -1;
    if (a.fin < b.fin) return 1;
    if (a.fin > b.fin) return -1;
    return 0;
  });

  const guardarHorario = () => { };

  return (
    <>
      <label className="label">
        <span className="label-text">Registrar horario</span>
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
                <select
                  id="diaSemana"
                  className="input"
                  value={diaSemana}
                  onChange={(e) => setDiaSemana(e.target.value)}
                >
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miércoles">Miércoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
                  <option value="Sábado">Sábado</option>
                  <option value="Domingo">Domingo</option>
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
                <td>{dia.dia}</td>
                <td>{dia.inicio}</td>
                <td>{dia.fin}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => eliminarDia(dia.id)}
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
