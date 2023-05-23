import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-center text-md font-bold">Página principal</h1>
      <Link to="/protected">
        <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
          Ver página protegida
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
