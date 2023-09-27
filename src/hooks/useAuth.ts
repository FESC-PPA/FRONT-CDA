import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLogged, setHasLogged] = useState(false);

  useEffect(() => {
    var p = 0;
  }, [isLoading, hasLogged]);

  return {
    isLoading,
    hasLogged,
  };
};

export default useAuth;
