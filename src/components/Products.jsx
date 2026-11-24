import React from "react";
import "../App.css";
import vegetables from "../data/vegetables";
import fruits from "../data/fruits";
import "../index.css";
import { useCart } from "../context/CartContext";
import { flyToCart } from "../utils/flyToCart";
import { fashionProducts } from "../data/products";
import { electronicsProducts } from "../data/products";
import { beautyProducts } from "../data/products";
import { homeProducts } from "../data/products";

export default function Products() {
  const { addToCart, cartRef } = useCart();

  const handleAdd = (e, product) => {
    const img = e.currentTarget.closest(".card").querySelector("img");

    if (!img || !cartRef.current) return;

    flyToCart(img, cartRef.current, () => addToCart(product));
  };

  return (
    <section className="mt-8 mon-reg" id="top">
      {/* fashion side */}
      <div className="mb-18" id="fashion">
        <h1 className="mb-8 mon-exbold text-4xl">Fashion</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {fashionProducts.map((p) => (
            <div
              key={p.id}
              className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-48 w-full object-contain rounded-2xl sm:h-56 lg:h-59"
              />
              <h3 className="mt-3 text-xl font-semibold text-orange-900">
                {p.name}
              </h3>
              <p className="text-orange-700 font-bold">${p.price}</p>
              <button
                // onClick={() => setCart([...cart, p])}
                onClick={(e) => handleAdd(e, p)}
                className="mt-3 w-full py-2 rounded-full bg-indigo-800 text-white hover:cursor-pointer hover:bg-indigo-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* electronics side */}
      <div className="mb-8" id="electronics">
        <h1 className="mb-8 mon-exbold text-4xl ">Electronics</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {electronicsProducts.map((p) => (
            <div
              key={p.id}
              className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-48 w-full object-contain rounded-2xl sm:h-56 lg:h-59"
              />
              <h3 className="mt-3 text-xl font-semibold text-orange-900">
                {p.name}
              </h3>
              <p className="text-orange-700 font-bold">${p.price}</p>
              <button
                // onClick={() => setCart([...cart, p])}
                onClick={(e) => handleAdd(e, p)}
                className="mt-3 w-full py-2 rounded-full bg-indigo-800 text-white hover:cursor-pointer hover:bg-indigo-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* beauty side */}
      <div className="mb-8" id="beauty">
        <h1 className="mb-8 mon-exbold text-4xl ">Beauty</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {beautyProducts.map((p) => (
            <div
              key={p.id}
              className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-48 w-full object-contain rounded-2xl sm:h-56 lg:h-59"
              />
              <h3 className="mt-3 text-xl font-semibold text-orange-900">
                {p.name}
              </h3>
              <p className="text-orange-700 font-bold">${p.price}</p>
              <button
                // onClick={() => setCart([...cart, p])}
                onClick={(e) => handleAdd(e, p)}
                className="mt-3 w-full py-2 rounded-full bg-indigo-800 text-white hover:cursor-pointer hover:bg-indigo-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* home side */}
      <div className="mb-8" id="home">
        <h1 className="mb-8 mon-exbold text-4xl ">Home</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {homeProducts.map((p) => (
            <div
              key={p.id}
              className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-48 w-full object-contain rounded-2xl sm:h-56 lg:h-59"
              />
              <h3 className="mt-3 text-xl font-semibold text-orange-900">
                {p.name}
              </h3>
              <p className="text-orange-700 font-bold">${p.price}</p>
              <button
                // onClick={() => setCart([...cart, p])}
                onClick={(e) => handleAdd(e, p)}
                className="mt-3 w-full py-2 rounded-full bg-indigo-800 text-white hover:cursor-pointer hover:bg-indigo-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
