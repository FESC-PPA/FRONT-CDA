import { LOGIN_POST } from "../utils/endpoint";
import { IApiResponse, Auth } from "../utils/types";
import { emailValidation } from "../utils/validations";

const signInWithEmailAndPassword = async (
  data: Auth,
): Promise<IApiResponse> => {
  /*const response = await fetch(LOGIN_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();*/
  return {
    statusCode: 200,
    data: {
      access_token: "token de acceso",
      expires_in: 3600,
    },
  };
};

export const signIn = async ({
  email,
  password,
}: Auth): Promise<IApiResponse> => {
  // validar datos
  if (!emailValidation(email)) {
    return;
  }
  return await signInWithEmailAndPassword({ email, password });
};

const signOut = async () => {
  return null;
};

export const logout = async () => await signOut();
