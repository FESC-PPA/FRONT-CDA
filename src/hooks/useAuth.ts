import { useState, useEffect } from "react";

interface AuthData {
  access_token: string | null
  expirationDate: Date | null
  hasLogged: boolean
  login: Function
  logout: Function
  getHasLogged: Function
}

const useAuth = (): AuthData => {
  const [access_token, setAccessToken] = useState<string | null>(null);
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [hasLogged, setHasLogged] = useState<boolean>(false);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");
    const storedExpirationDate = localStorage.getItem("expirationDate");
    const storedHasLogged = localStorage.getItem("hasLogged");

    if (storedAccessToken && storedExpirationDate) {
      const parsedExpirationDate = new Date(storedExpirationDate);
      const parseHasLogged = Boolean(eval(storedHasLogged))
      if (parsedExpirationDate > new Date()) {
        setAccessToken(storedAccessToken);
        setExpirationDate(parsedExpirationDate);
        setHasLogged(parseHasLogged);
      } else {
        logout()
      }
    }
  }, []);

  const login = ({ access_token, expires_in }) => {
    const expirationDate = new Date(Date.now() + expires_in * 1000);
    setAccessToken(access_token);
    setExpirationDate(expirationDate);
    setHasLogged(true);
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("hasLogged", "true");
    localStorage.setItem("expirationDate", expirationDate.toISOString());
  };

  const logout = () => {
    setAccessToken(null);
    setExpirationDate(null);
    setHasLogged(false);
    localStorage.removeItem("hasLogged");
    localStorage.removeItem("access_token");
    localStorage.removeItem("expirationDate");
  };
  const getHasLogged = () => {
    return Boolean(eval(localStorage.getItem("hasLogged")))
  }

  return { access_token, expirationDate, hasLogged, login, logout,getHasLogged };
};

export default useAuth;