import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-8 px-[6rem] bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center text-xl">
        <Link href={"/"}>
          <h1 className="text-4xl italic font-bold text-red-700">wpx Valo</h1>
        </Link>
        <div className="flex items-center gap-4">
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
