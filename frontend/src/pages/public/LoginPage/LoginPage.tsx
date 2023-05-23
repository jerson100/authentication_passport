import React from "react";

const LoginPage = () => {
  const handleLoginWidthGoogle = async () => {
    window.location.href = "http://localhost:4001/api/v1/auth/google";
    // try {
    //   const response = await fetch("http://localhost:4001/api/v1/auth/google");
    //   const data = await response.json();
    //   console.log(response);
    //   console.log(data);
    // } catch (e) {
    //   console.log(e);
    // }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4 border border-gray-200 shadow-lg p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleLoginWidthGoogle}
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
