import { LOGIN_POST } from "../utils/endpoint";
import { ApiResponse, LoginData } from "../utils/types";
import { emailValidation } from "../utils/validations";

const signInWithEmailAndPassword = async (data: LoginData): Promise<ApiResponse> => {
    const response = await fetch(LOGIN_POST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json()
}

export const signIn = async ({email, password}: LoginData) : Promise<ApiResponse>=> {
    // validar datos
    if(!emailValidation(email)){
        return
    }
    return await signInWithEmailAndPassword({email, password})
};

const signOut = async () => {
    return null
}

export const logout = async () => await signOut();
