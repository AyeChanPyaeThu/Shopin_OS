import React from "react";
import "../index.css";
import Products from "../components/Products";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import fruits from "../data/fruits";
import vegetables from "../data/vegetables";
import { HashLink } from "react-router-hash-link";
import { useCart } from "../context/CartContext";
import { flyToCart } from "../utils/flyToCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/custom-swiper.css";
import { LiaTshirtSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiLipstick } from "react-icons/gi";
import { RiSofaLine } from "react-icons/ri";
import { fashionProducts } from "../data/products";
import { electronicsProducts } from "../data/products";
import { beautyProducts } from "../data/products";
import { homeProducts } from "../data/products";

export default function Home() {
  const { addToCart, cartRef } = useCart();

  const handleAdd = (e, product) => {
    const img = e.currentTarget.closest(".card").querySelector("img");

    if (!img || !cartRef.current) return;

    flyToCart(img, cartRef.current, () => addToCart(product));
  };

  return (
    <div
      id="top"
      className="mx-2 mb-2 rounded-2xl border border-white/50 bg-white/2.5 px-3 py-5 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] sm:mx-4 sm:px-6 lg:mx-6 lg:px-10 xl:px-14"
    >
      {/* swipe slides  */}
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mb-3"
        >
          <SwiperSlide>
            <article className="mx-2 grid gap-6 mon-reg items-center mb-14 mt-5 md:mx-6 md:grid-cols-2 lg:mx-10 lg:mb-20">
              <div>
                <p className="text-sm mb-3 w-fit  mon-exbold bg-orange-600 py-2 px-3 rounded-2xl">
                  50 % Off
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-950 leading-tight">
                  Mega Deals Week
                </h1>
                <p className="mt-6 mb-10  max-w-md ">
                  Up to 50% OFF on fashion, electronics, and beauty essentials.
                  Limited time only!
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-indigo-800 bg-indigo-900 text-white mon-reg 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white hover:text-black mr-3 "
                >
                  Shop Now
                </Link>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-gray-400 bg-white text-black mon-reg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-indigo-800 hover:text-white  "
                >
                  Learn more
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/advertise5.jpg"
                  alt="Vegetables"
                  className="h-56 w-full rounded-3xl border border-green-800 object-cover shadow-xl sm:h-72 lg:h-98"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-2 mon-reg grid gap-6 items-center mb-14 mt-5 md:mx-6 md:grid-cols-2 lg:mx-10 lg:mb-20">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-950 leading-tight">
                  ✨ New Arrivals
                </h1>
                <p className="mt-6 mb-10  max-w-md ">
                  Discover the latest trends in fashion and smart home products.
                  Fresh styles, fresh tech.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-indigo-800 bg-indigo-900 text-white mon-reg 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white hover:text-black mr-3 "
                >
                  Shop Now
                </Link>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-gray-400 bg-white text-black mon-reg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-indigo-800 hover:text-white  "
                >
                  Learn more
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/advertise4.jpg"
                  alt="Vegetables"
                  className="h-56 w-full rounded-3xl border border-green-800 object-cover shadow-xl sm:h-72 lg:h-98"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-2 mon-reg grid gap-6 items-center mb-14 mt-5 md:mx-6 md:grid-cols-2 lg:mx-10 lg:mb-20">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-950 leading-tight">
                  Fast & Secure <br /> Delivery 🚚
                </h1>
                <p className="mt-6 mb-10  max-w-md ">
                  Get your favorite products delivered safely to your doorstep.
                  Shop with confidence.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-indigo-800 bg-indigo-900 text-white mon-reg 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white hover:text-black mr-3 "
                >
                  Shop Now
                </Link>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-gray-400 bg-white text-black mon-reg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-indigo-800 hover:text-white  "
                >
                  Learn more
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/advertise3.jpg"
                  alt="Vegetables"
                  className="h-56 w-full rounded-3xl border border-green-800 object-cover shadow-xl sm:h-72 lg:h-98"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-2 mon-reg grid gap-6 items-center mb-14 mt-5 md:mx-6 md:grid-cols-2 lg:mx-10 lg:mb-20">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-950 leading-tight">
                  💄 Beauty & <br /> Self-Care Picks
                </h1>
                <p className="mt-6 mb-10  max-w-md ">
                  Glow up with top beauty products hand-picked just for you.
                  Because you deserve it.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-indigo-800 bg-indigo-900 text-white mon-reg 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white hover:text-black mr-3 "
                >
                  Shop Now
                </Link>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-gray-400 bg-white text-black mon-reg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-indigo-800 hover:text-white  "
                >
                  Learn more
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/advertise2.jpg"
                  alt="Vegetables"
                  className="h-56 w-full rounded-3xl border border-green-800 object-cover shadow-xl sm:h-72 lg:h-98"
                />
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="mx-2 mon-reg grid gap-6 items-center mb-14 mt-5 md:mx-6 md:grid-cols-2 lg:mx-10 lg:mb-20">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-950 leading-tight">
                  Upgrade <br /> Your Home 🏡
                </h1>
                <p className="mt-6 mb-10  max-w-md ">
                  Modern home essentials to make life easier and stylish.
                  Comfort meets design.
                </p>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-lg  
                backdrop-blur-lg 
               border border-indigo-800 bg-indigo-900 text-white mon-reg 
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-white hover:text-black mr-3 "
                >
                  Shop Now
                </Link>
                <Link
                  to={"/product-page"}
                  className=" px-6 py-2 rounded-xl  
                backdrop-blur-lg 
               border border-gray-400 bg-white text-black mon-reg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-indigo-800 hover:text-white  "
                >
                  Learn more
                </Link>
              </div>

              <div className="">
                <img
                  src="src/assets/advertise1.jpg"
                  alt="Vegetables"
                  className="h-56 w-full rounded-3xl border border-green-800 object-cover shadow-xl sm:h-72 lg:h-98"
                />
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* categories */}
      <section className="mon-reg mb-15">
        <h1 className="text-4xl mon-exbold mb-2">Shop by Category</h1>
        <p className="mb-4">Find what you need in a second</p>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <HashLink
            smooth
            to="/product-page#fashion"
            className="flex gap-3 items-center w-full border-2 border-indigo-900 hover:bg-indigo-600 hover:scale-105 hover:text-white duration-200 cursor-pointer bg-gray-200/70 rounded-lg py-6 px-6"
          >
            <div>
              <LiaTshirtSolid size={34} />{" "}
            </div>
            <div>
              <p className="font-bold text-xl">Fashion</p>
              <p className="text-xs">126+ items</p>
            </div>
          </HashLink>

          <HashLink
            smooth
            to="/product-page#electronics"
            className="flex gap-3 items-center w-full border-2 border-indigo-900 hover:bg-indigo-600 hover:scale-105 hover:text-white duration-200 cursor-pointer bg-gray-200/70 rounded-lg py-6 px-6"
          >
            <div>
              <TfiHeadphoneAlt size={34} />{" "}
            </div>
            <div>
              <p className="font-bold text-xl">Electronics</p>
              <p className="text-xs">126+ items</p>
            </div>
          </HashLink>

          <HashLink
            smooth
            to="/product-page#beauty"
            className="flex gap-3 items-center w-full border-2 border-indigo-900 hover:bg-indigo-600 hover:scale-105 hover:text-white duration-200 cursor-pointer bg-gray-200/70 rounded-lg py-6 px-6"
          >
            <div>
              <GiLipstick size={34} />{" "}
            </div>
            <div>
              <p className="font-bold text-xl">Beauty</p>
              <p className="text-xs">126+ items</p>
            </div>
          </HashLink>

          <HashLink
            smooth
            to="/product-page#home"
            className="flex gap-3 items-center w-full border-2 border-indigo-900 hover:bg-indigo-600 hover:scale-105 hover:text-white duration-200 cursor-pointer bg-gray-200/70 rounded-lg py-6 px-6"
          >
            <div>
              <RiSofaLine size={34} />{" "}
            </div>
            <div>
              <p className="font-bold text-xl">Home</p>
              <p className="text-xs">126+ items</p>
            </div>
          </HashLink>
        </div>
      </section>

      {/* /* Products */}
      <div className="mb-8">
        <h1 className="mb-2 mon-exbold text-4xl  text-center">Top Choices</h1>
        <div className="border-b-2 border-indigo-950 mb-8"></div>
        <h1 className="mb-8 mon-exbold text-4xl ">Fashion</h1>
        <div className="flex justify-between items-center mb-12">
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {fashionProducts.length <= 4 ? (
              <>
                {fashionProducts.map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-contain rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-orange-900">
                      {p.name}
                    </h3>
                    <p className="text-orange-700 font-bold">${p.price}</p>
                    <button
                      // onClick={() => setCart([...cart, p])}
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full text-white bg-indigo-800 hover:cursor-pointer  hover:bg-indigo-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}{" "}
              </>
            ) : (
              <>
                {fashionProducts.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-contain rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-orange-900">
                      {p.name}
                    </h3>
                    <p className="text-orange-700 font-bold">${p.price}</p>
                    <button
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full text-white bg-indigo-800 hover:cursor-pointer  hover:bg-indigo-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          <HashLink smooth to={"/product-page#fruits"}>
            <MdKeyboardDoubleArrowRight
              className="basis-1/12inline-block ml-2 text-indigo-900 "
              size={34}
            />
          </HashLink>
        </div>

        <h1 className="mb-8 mon-exbold text-4xl ">Electronics</h1>
        <div className="flex justify-between items-center ">
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {electronicsProducts.length <= 4 ? (
              <>
                {electronicsProducts.map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-contain rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-orange-900">
                      {p.name}
                    </h3>
                    <p className="text-orange-700 font-bold">${p.price}</p>
                    <button
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full text-white bg-indigo-800 hover:cursor-pointer  hover:bg-indigo-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}{" "}
              </>
            ) : (
              <>
                {electronicsProducts.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="card rounded-3xl bg-card-color border border-indigo-900 p-4 hover:-translate-y-2 transition"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-32 w-full object-contain rounded-2xl"
                    />
                    <h3 className="mt-3 font-semibold text-orange-900">
                      {p.name}
                    </h3>
                    <p className="text-orange-700 font-bold">${p.price}</p>
                    <button
                      onClick={(e) => handleAdd(e, p)}
                      className="mt-3 w-full py-2 rounded-full text-white bg-indigo-800 hover:cursor-pointer  hover:bg-indigo-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          <HashLink smooth to={"/product-page#vegetables"}>
            <MdKeyboardDoubleArrowRight
              className="basis-1/12inline-block ml-2 text-indigo-900 "
              size={34}
            />
          </HashLink>
        </div>
      </div>

      <div className="w-full mt-8 flex justify-center">
        <HashLink
          smooth
          to={"/product-page#top"}
          className=" px-6 py-2 rounded-full 
                backdrop-blur-lg 
               border border-indigo-800 bg-white text-indigo-950  text-lg
               shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]
               transition-all duration-300 hover:bg-indigo-800 hover:text-white  "
        >
          Choose More{" "}
          <MdKeyboardDoubleArrowRight className="inline-block ml-2" size={24} />
        </HashLink>
      </div>
    </div>
  );
}
