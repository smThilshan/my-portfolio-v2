import { assets } from "@/assets/assets";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  //   const openMenu = () => {
  //     sideMenuRef.current.style.transform = "translateX(-16rem)";
  //   };

  //   const closeMenu = () => {
  //     sideMenuRef.current.style.transform = "translateX(16rem)";
  //   };

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo-img"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="mode" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            {" "}
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              className="w-3"
              alt="contact-img"
            />{" "}
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Nav */}

        <ul
          className={`
    flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500
    ${menuOpen ? "translate-x-0 right-0" : "translate-x-full right-0"}
  `}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            {" "}
            <a href="" className="font-ovo" onClick={() => setMenuOpen(false)}>
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="" className="font-ovo" onClick={() => setMenuOpen(false)}>
              About me
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="" className="font-ovo" onClick={() => setMenuOpen(false)}>
              Services
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="" className="font-ovo" onClick={() => setMenuOpen(false)}>
              My Work
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="" className="font-ovo" onClick={() => setMenuOpen(false)}>
              Contact me
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
