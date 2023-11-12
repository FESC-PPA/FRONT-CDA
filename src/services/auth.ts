import { AUTH_LOGIN_ENDPOINT, AUTH_REGISTER_ENDPOINT } from "../constants";
import { IApiResponse, Auth, DataRegister } from "../types";
import { emailValidation, fetchApi } from "../utils";

export const useAuthService = () => {
  const signInWithEmailAndPassword = async (data: Auth,): Promise<IApiResponse> => await fetchApi({ url: AUTH_LOGIN_ENDPOINT, method: "POST", body: data })

  const signOut = async () => {
    return null;
  };

  const logIn = async ({ email, password, }: Auth): Promise<IApiResponse> => {
    // validar datos
    if (!emailValidation(email)) {
      return;
    }
    return await signInWithEmailAndPassword({ email, password });
  };

  const logOut = async () => await signOut();

  const register = async (data: DataRegister) => {
    return await fetchApi({ url: AUTH_REGISTER_ENDPOINT, method: "POST", body: data })
  }

  return { logIn, logOut, register }
}

