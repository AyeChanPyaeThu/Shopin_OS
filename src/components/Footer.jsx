import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <div className="bottom-0 left-0 w-full px-4 py-5 text-indigo-300 sm:px-6 lg:px-10">
      <HashLink smooth to="/about-us#contact">
        <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
          <FaFacebook className="cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
          <TiSocialTwitter className="cursor-pointer" size={28} />
          <FaLocationDot className="cursor-pointer" />
          <FaPhoneAlt className="cursor-pointer" />
          <GrSend className="cursor-pointer" size={24} />
        </div>
      </HashLink>

      <footer className="mt-3 text-center text-sm mon-exbold text-indigo-900 font-semibold sm:text-base lg:text-lg">
        © 2026 Shopin Online Shop
      </footer>
    </div>
  );
}
