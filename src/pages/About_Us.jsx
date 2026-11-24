import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

export default function About_Us() {
  return (
    <div
      id="top"
      className="mx-2 mb-2 rounded-2xl border-2 border-indigo-900/50 bg-indigo-100/70 px-4 py-8 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] sm:mx-4 sm:px-8 lg:mx-6 lg:px-14 lg:py-10"
    >
      <section className=" mb-14">
        <h2 className="text-4xl mon-exbold  mb-4 text-indigo-900">About Us</h2>

        <p className=" mon-reg mb-6">
          We are a modern e-commerce platform dedicated to bringing quality
          products closer to you. From trendy fashion and cutting-edge
          electronics to beauty essentials and home products, we carefully
          select items that combine style, comfort, and value. Our goal is to
          make online shopping simple, enjoyable, and trustworthy for everyone.
        </p>
      </section>

      <section className=" mb-8">
        <div className="flex flex-col gap-6 justify-center lg:flex-row lg:items-center">
          <div className="lg:w-2/5">
            <h2 className="text-4xl mon-exbold  mb-8 text-indigo-900">
              Our Mission
            </h2>
            <ul className=" list-disc list-inside space-y-2 text-lg   mon-reg">
              <li>🛍️ Quality products you can trust</li>
              <li>⚡ Smooth & secure shopping experience</li>
              <li>💰 Fair prices with honest service</li>
              <li>💚 Customer-first mindset always</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:w-3/5">
            <img
              src="/src/assets/mission1.jpg"
              className="h-48 w-full rounded-3xl border-4 border-white object-cover duration-150 hover:scale-[0.98] sm:h-56"
              alt="quality_check"
            />
            <img
              src="/src/assets/mission2.jpg"
              className="h-48 w-full rounded-3xl border-4 border-white object-cover duration-150 hover:scale-[0.98] sm:h-56"
              alt="quality_check"
            />
            <img
              src="/src/assets/mission3.jpg"
              className="h-48 w-full rounded-3xl border-4 border-white object-cover duration-150 hover:scale-[0.98] sm:col-span-2 sm:h-56"
              alt="quality_check"
            />
          </div>
        </div>
      </section>

      <section className=" mb-8">
        <h2 className="text-5xl mon-exbold  mb-4 text-center text-indigo-900">
          Our Partners & Sources
        </h2>

        <p className=" mon-reg mb-5">
          We work closely with trusted manufacturers, designers, and suppliers
          who share our commitment to quality and ethical practices. Each
          product is sourced with care, ensuring durability, safety, and
          authenticity. Just like farms grow fresh produce, our partners build
          products that support your daily life.
        </p>

        <div className="grid grid-cols-2 gap-2 p-1 mb-6 sm:grid-cols-3 sm:gap-3 sm:p-3 md:grid-cols-4">
          <img
            src="/src/assets/service1.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40"
          />
          <img
            src="/src/assets/service2.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40"
          />
          <img
            src="/src/assets/service3.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40"
          />
          <img
            src="/src/assets/service4.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40"
          />
          <img
            src="/src/assets/service5.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40 "
          />
          <img
            src="/src/assets/service6.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40 object-cover"
          />
          <img
            src="/src/assets/service7.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40 object-cover"
          />
          <img
            src="/src/assets/service8.jpg"
            alt=""
            className="border border-white hover:scale-98 duration-150 rounded-sm w-full max-h-40"
          />
        </div>
      </section>

      <section>
        <h3 className="text-4xl mon-exbold  mb-4 text-indigo-900">
          Contact Us
        </h3>
        <ul className=" mon-reg space-y-1">
          <li>
            <FaFacebook className="inline mr-2 text-indigo-700" />{" "}
            facebook.com/greenfarm
          </li>
          <li>
            <FaTiktok className="inline mr-2 text-indigo-700" />
            {"   "}
            tiktok.com/@greenfarm
          </li>
          <li>
            <TiSocialTwitter className="inline mr-2 text-indigo-700" />{" "}
            twitter.com/greenfarm
          </li>
          <li>
            <FaLocationDot className="inline mr-2 text-indigo-700" /> Local
            Farmers Market Road
          </li>
          <li>
            <FaPhoneAlt className="inline mr-2 text-indigo-700" /> +95 9 123 456
            789
          </li>
        </ul>
        <div id="contact"></div>
      </section>
    </div>
  );
}
