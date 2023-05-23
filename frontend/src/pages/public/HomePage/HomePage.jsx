import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-center text-md font-bold">Página principal</h1>
      <Link
        to="/protected"
        className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        Ver página protegida
      </Link>
      <Link
        to="/products"
        className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        Ver productos(Protegido)
      </Link>
    </div>
  );
};

export default HomePage;
