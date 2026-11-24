import React from "react";
import carts from "../data/carts";
import { useCart } from "../context/CartContext";

const CartCard = ({ cart }) => {
  const { increaseQty, decreaseQty } = useCart();
  return (
    <div className="grid gap-3 rounded-xl border border-white bg-white p-3 text-indigo-800 mon-reg sm:p-5 md:grid-cols-6 md:pr-6">
      <div className="md:col-span-2 md:mr-3">
        <img src={cart.img} alt={cart.name} className="h-36 w-full rounded-lg object-contain sm:h-40" />
      </div>
      <div className="flex flex-col justify-between sm:flex-row md:col-span-4 md:px-2 lg:px-5">
        <div className="p-1 sm:p-3 sm:flex-[2]">
          <p className="mb-2 text-xl mon-exbold">{cart.name}</p>
          <p className="text-indigo-500 text-lg">
            Price <span className="text-yellow-500">$ {cart.price}</span>{" "}
          </p>
        </div>
        <div className="py-3 text-center sm:px-3 sm:pt-6 sm:flex-1">
          <p className="mb-2 text-xl text-center">Quantity</p>
          <div className="flex gap-3 items-center text-3xl w-full justify-center">
            <button
              onClick={() => decreaseQty(cart.id)}
              className="bg-black hover:scale-105 cursor-pointer rounded-lg text-white px-2.5 py-0.5"
            >
              -
            </button>
            <span className="text-indigo-800">{cart.quantity}</span>
            <button
              onClick={() => increaseQty(cart.id)}
              className="bg-black hover:scale-105 cursor-pointer rounded-lg text-white px-2 py-0.5"
            >
              +
            </button>
          </div>
        </div>
        <div className="text-center sm:pt-8 sm:text-right sm:flex-1">
          <p className="text-xl font-bold mt-3">
            $ {(cart.price * cart.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
