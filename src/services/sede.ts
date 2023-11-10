import { AUTH_LOGIN_ENDPOINT } from "../utils";
import { Based, IApiResponse } from "../types";

export const getAllSede =
  /*async*/ (): IApiResponse /*Promise<IApiResponse>*/ => {
    return {
      status: 200,
      data: [
        {
          id: 1,
          name: "Sede Principal",
          location: "Av 1 E #2-21",
        },
        {
          id: 2,
          name: "Patios",
          location: "Av 1 E #2-21",
        },
        {
          id: 3,
          name: "Medellin",
          location: "Av 1 E #2-21",
        },
        {
          id: 4,
          name: "EEUU",
          location: "Av 1 E #2-21",
        },
        {
          id: 5,
          name: "Cornejo",
          location: "Av 1 E #2-21",
        },
      ],
    };
  };
export const deleteBasedById = (id: number): IApiResponse => {
  // hace peticion para borrar
  return {
    status: 204,
    data: true,
  };
};

export const setBased = (data: Based): IApiResponse => {
  // peticion para actualizar
  return {
    status: 200,
    data,
  };
};

export const newBased = (data: Based): IApiResponse => {
  // hace peticion para guardar
  return {
    status: 201,
    data: { ...data, id: Math.floor(Math.random() * (1000 - 10 + 1) + 10) },
  };
};
