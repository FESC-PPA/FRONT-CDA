import { IApiResponse, IFetchApi } from "../types/types";

export const fetchApi = async ({ url, method, body, access_token }: IFetchApi): Promise<IApiResponse> => {
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