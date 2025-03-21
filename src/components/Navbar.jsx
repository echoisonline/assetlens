import React from "react";
import Search from "./Search";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#EBEBEB] text-[#393E41] rounded-full text-[24px] w-fit !mt-[15px] !mx-auto">
      <ul className="h-[40px] flex justify-items-center ">
        <li className="h-[40px] flex items-center justify-center">
          <NavLink to="/">
            <h1 className="text-[26.625px] !mx-[20px]">assetlens</h1>
          </NavLink>
        </li>
        <li>
          <a href="">
            <div className="h-[40px] w-[2px] bg-[#393E41]"></div>
          </a>
        </li>
        <li>
          <div className="font-[400] text-[20px] h-[40px] flex align-middle">
            <Search></Search>
          </div>
        </li>
      </ul>
    </nav>
  );
}
