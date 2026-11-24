import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="mt-16 mx-40 py-20 bg-transparent border-2 border-white rounded-2xl flex justify-center items-center">
      <div className="text-center ">
        <h1 className="text-5xl text-white mon-exbold font-bold mb-3">
          404 Not Found
        </h1>
        <p className="text-white/90 mon-reg w-96  mb-12">
          Oops..! Looks like this page took a wrong turn. Don’t worry — fresh,
          organic goodness is just a click away on our homepage 🌱
        </p>
        <Link
          to="/"
          className="border-2 border-white bg-green-500 rounded-lg text-white mon-reg px-4 py-3 "
        >
          Return to home
        </Link>
      </div>
    </section>
  );
}
