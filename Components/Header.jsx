"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-4xl italic font-bold text-red-700">
            wpx Valo
          </h1>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex items-center gap-4 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Link href={"/agents"}>
            <p className="hover:text-red-900 hover:underline transition-all">
              Agents
            </p>
          </Link>
          <Link href={"/maps"}>
            <p className="hover:text-red-900 hover:underline transition-all">
              Maps
            </p>
          </Link>
          <Link href={"/player-cards"}>
            <p className="hover:text-red-900 hover:underline transition-all">
              Player Cards
            </p>
          </Link>
          <Link href={"/weapons"}>
            <p className="hover:text-red-900 hover:underline transition-all">
              Weapons
            </p>
          </Link>
          <Link href={"/gamemodes"}>
            <p className="hover:text-red-900 hover:underline transition-all">
              Gamemodes
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
