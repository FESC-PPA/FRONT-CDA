import { useAuth } from "../storage"
import { IApiResponse } from "../types"
const { access_token } = useAuth()

const fetchApi = async (url: string, method: string, body?: any): Promise<IApiResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`
                },
                body: body ? JSON.stringify(body) : undefined,
            })
            if (response.ok) { resolve(response.json()); }
            else { throw new Error('Something went wrong'); }
        } catch (error) {
            reject(error);
        }
    })

}

export { fetchApi }