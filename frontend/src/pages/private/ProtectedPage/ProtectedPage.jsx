import React from "react";
import useAuthContext from "../../../hooks/useAuthContext";

const ProtectedPage = () => {
  const { logout, us } = useAuthContext();
  return (
    <div>
      <h1>Página progida</h1>
      <div>
        <h2>Usuario: {us?.name}</h2>
        <h2>Email: {us?.email}</h2>
        <img src={us?.image} alt={us?.name} />
      </div>
      <button
        className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProtectedPage;
