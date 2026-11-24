import React, { useState } from "react";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function CartSection() {
  const { cartItems, totalPrice } = useCart();
  const { clearCart } = useCart();

  const handleOrder = () => {
    clearCart(); // 🔥 empty the cart

    Swal.fire({
      title: "Order placed successfully!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="mx-2 mb-2 rounded-2xl border border-white/50 bg-white/2.5 px-3 py-6 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] sm:mx-4 sm:px-6 lg:mx-6 lg:px-12 xl:px-24 xl:py-12">
      <div className="flex flex-col gap-5">
        {cartItems.length === 0 ? (
          <p className="text-indigo-900 text-center mon-reg">
            Your cart is empty.
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartCard key={item.id} cart={item} />
            ))}
          </>
        )}

        <div className=" w-full ">
          <div className="border-t border-indigo-950 text-indigo-900 mon-reg flex flex-col justify-end mb-5 gap-3 py-3">
            <div className="flex items-center justify-end gap-3 pr-2 sm:gap-5 sm:pr-6 lg:pr-15">
              <p className="">Total</p>
              <p className="font-bold ">{totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-end gap-3 pr-2 sm:gap-5 sm:pr-6 lg:pr-15">
              <p className="">Tax(10%)</p>
              <p className="font-bold ">{(totalPrice * 0.1).toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-end gap-3 pr-2 sm:gap-5 sm:pr-6 lg:pr-15">
              <p className="">Net Total</p>
              <p className="text-2xl font-bold ">
                {(totalPrice + totalPrice * 0.1).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="text-end mb-3 pr-10">
            <button
              onClick={handleOrder}
              className="border-2 border-indigo-500 mon-me text-white  rounded-4xl px-4 py-2 cursor-pointer hover:bg-indigo-500 hover:border-indigo-500 bg-indigo-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
