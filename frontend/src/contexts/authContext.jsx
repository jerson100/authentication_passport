import React, { createContext, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [us, setUs] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [previousLoading, setPreviousLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("appauth-accessToken");
    // console.log(token);
    try {
      const decodeToken = jwtDecode(token);
      //   console.log(decodeToken);
      if (token) {
        //validado el token es bueno ir a la base de datos y traer la información del usuario
        //actualizada ya que en el token, puede tener información desactualizada, como los email, name
        //además de verificar si el usuario existe
        fetch(
          `http://localhost:4001/api/v1/auth/verify?id=${decodeToken.user._id}`,
          {
            method: "GET",
            credentials: "include",
          }
        )
          .then(async (res) => {
            if (res.status === 200) {
              // console.log("Usuario existe");
              const user = await res.json();
              // Cookies.set("appauth-accessToken", accessToken);
              console.log(user);
              setUs(user);
              setIsAuthenticated(true);
            } else {
              //   Cookies.remove("appauth-accessToken");
            }
            setPreviousLoading(false);
          })
          .catch((e) => {
            setPreviousLoading(false);
          });
      } else {
        setPreviousLoading(false);
      }
    } catch (e) {
      Cookies.remove("appauth-accessToken");
      setPreviousLoading(false);
      console.log(e);
    }
  }, []);

  const logout = useCallback(() => {
    Cookies.remove("appauth-accessToken");
    setIsAuthenticated(false);
    setUs(null);
  });

  return (
    <AuthContext.Provider
      value={{
        logout,
        us,
        isAuthenticated,
        previousLoading,
      }}
    >
      {previousLoading ? <p>Verificando sesión</p> : children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
