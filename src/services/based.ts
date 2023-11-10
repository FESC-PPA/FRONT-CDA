import { BASED_ENDPOINT } from "../constants"
import { Based, IService, IApiResponse } from "../types"
import { fetchApi } from '../utils'

export const basedService = (): IService => {

    const create = async (data: Based): Promise<IApiResponse> => fetchApi(BASED_ENDPOINT, "POST", data)

    const findAll = async (): Promise<IApiResponse> => fetchApi(BASED_ENDPOINT, "GET")

    const findOne = async (id: number): Promise<IApiResponse> => fetchApi(`${BASED_ENDPOINT}/${id}`, "GET")

    const update = async (data: Based): Promise<IApiResponse> => fetchApi(BASED_ENDPOINT, "PATCH", data)

    const remove = async (id: number): Promise<IApiResponse> => fetchApi(`${BASED_ENDPOINT}/${id}`, "DELETE")

    return { create, findAll, findOne, update, remove }
}