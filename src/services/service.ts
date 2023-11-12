import { useAuth } from "../storage"
import { IService, IApiResponse } from "../types"
import { fetchApi } from "../utils"

export function useService<T>(url): IService<T> {
    const { getToken } = useAuth()
    const access_token = getToken()

    const create = async (data): Promise<IApiResponse> => await fetchApi({ url, method: "POST", body: data, access_token })

    const findAll = async (): Promise<IApiResponse> => await fetchApi({ url, method: "GET", access_token })

    const findOne = async (id): Promise<IApiResponse> => await fetchApi({ url: `${url}/${id}`, method: "GET", access_token })

    const update = async (id, data): Promise<IApiResponse> => await fetchApi({ url: `${url}/${id}`, method: "PATCH", body: data, access_token })

    const remove = async (id): Promise<IApiResponse> => await fetchApi({ url: `${url}/${id}`, method: "DELETE", access_token })

    return { create, findAll, findOne, update, remove }
}
