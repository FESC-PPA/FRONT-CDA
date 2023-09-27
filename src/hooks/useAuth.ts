import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoading] = useState(true);
  const [hasLogged] = useState(false);


  return {
    isLoading,
    hasLogged,
  };
};

export default useAuth;
