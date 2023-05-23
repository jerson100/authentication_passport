import React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { Link, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const { isAuthenticated } = useAuthContext();
  //aquí podemos redireccionar al usuario a una página de error 401
  return (
    <>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <div className="flex items-center justify-center bg-red-300 min-h-screen">
          <div className="max-w-5xl p-4 flex flex-col gap-4 items-center">
            <h1 className="text-center text-md font-bold text-white">
              Not Authenticated
            </h1>
            <Link to="/login">
              <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                Autenticarme
              </button>
            </Link>

            <Link to="/">
              <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                Ir a la página principal
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedRouter;
