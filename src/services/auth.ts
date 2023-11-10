import { AUTH_LOGIN_ENDPOINT } from "../constants";
import { IApiResponse, Auth } from "../types";
import { emailValidation, fetchApi } from "../utils";

export const authService = () => {
  const signInWithEmailAndPassword = async (data: Auth,): Promise<IApiResponse> => fetchApi(AUTH_LOGIN_ENDPOINT, "POST", data)

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

  const register = () => {

  }

  return { logIn, logOut, register }
}

