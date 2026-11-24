import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HashLink } from "react-router-hash-link";
import { FaShopify } from "react-icons/fa";

export default function Header() {
  const { cartCount, cartRef } = useCart();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 left-0 z-20 transition-colors ${scrolled ? "bg-indigo-800 text-white shadow-md" : "bg-f5f5f5/95"}`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-10 lg:py-4">
        <div className="mon-exbold flex items-end text-base sm:text-lg">
          <FaShopify size={40} /> SHOPIN
        </div>

        <div className="order-3 flex w-full justify-center gap-5 sm:order-none sm:w-auto sm:gap-6 md:gap-8">
          <HashLink
            smooth
            to={"/"}
            className="mon-reg cursor-pointer whitespace-nowrap hover:underline"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to={"/product-page#top"}
            className="mon-reg cursor-pointer whitespace-nowrap hover:underline"
          >
            Products
          </HashLink>
          <HashLink
            smooth
            to={"/about-us"}
            className="mon-reg cursor-pointer whitespace-nowrap hover:underline"
          >
            About Us
          </HashLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="mon-reg flex items-center rounded-full border pr-1 sm:pr-2">
            <input
              type="text"
              placeholder="Search..."
              className={`w-20 py-1 pl-2 text-black border-r mr-1 rounded-full focus:outline-none sm:w-28 sm:pl-3 sm:mr-2 md:w-36 ${scrolled ? " text-white" : ""} `}
            />
            <FiSearch size={23} />
          </div>

          <div ref={cartRef} className="relative text-2xl cursor-pointer">
            <Link to={"/cart"} ref={cartRef} className="mon-reg">
              <FaShoppingCart size={28} />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
