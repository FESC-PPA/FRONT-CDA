import { BASED_ENDPOINT } from "../constants"
import { useAuth } from "../storage"
import { Based, IService, IApiResponse } from "../types"
import { fetchApi } from '../utils'

export const basedService = (): IService => {

    const { getToken } = useAuth()
    const access_token = getToken()

    //console.log(access_token)

    const create = async (data: Based): Promise<IApiResponse> => await fetchApi({ url: BASED_ENDPOINT, method: "POST", body: data, access_token })

    const findAll = async (): Promise<IApiResponse> => await fetchApi({ url: BASED_ENDPOINT, method: "GET", access_token })

    const findOne = async (id: number): Promise<IApiResponse> => await fetchApi({ url: `${BASED_ENDPOINT}/${id}`, method: "GET", access_token })

    const update = async (data: Based): Promise<IApiResponse> => await fetchApi({ url: `${BASED_ENDPOINT}/${data.basedId}`, method: "PATCH", body: data, access_token })

    const remove = async (id: number): Promise<IApiResponse> => await fetchApi({ url: `${BASED_ENDPOINT}/${id}`, method: "DELETE", access_token })

    return { create, findAll, findOne, update, remove }
}