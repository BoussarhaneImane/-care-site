import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-indigo-950 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Oops! Page not found.</p>
      <Link to="/">
        <button className="bg-indigo-950 text-white font-bold py-2 px-4 rounded hover:bg-pink-800 transition duration-300">
        retour à l'acceuil
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
