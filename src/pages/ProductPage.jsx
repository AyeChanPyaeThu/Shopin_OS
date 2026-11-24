import React from "react";
import Products from "../components/Products";

export default function ProductPage() {
  return (
    <div className="mx-2 mb-2 rounded-2xl border border-white/50 bg-white/2.5 px-3 py-5 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] sm:mx-4 sm:px-6 lg:mx-6 lg:px-10 xl:px-14">
      <Products />
    </div>
  );
}
