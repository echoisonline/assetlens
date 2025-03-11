import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav
      className="bg-[#EBEBEB] text-[#393E41] rounded-full content-center m-[20px]
    text-[24px]"
    >
      <ul className="h-[40px] grid grid-cols-[170px_1px_1fr] justify-items-center m-[0px]">
        <li>
          <a href="">
            <h1 className="text-[34px] ">assetlens</h1>
          </a>
        </li>
        <li>
          <a href="">
            <div className="h-[40px] w-[2px] bg-[#393E41]"></div>
          </a>
        </li>
        <li>
          <div className="top-[6.125px] relative font-[400] text-[20px] my-auto">
            <Search></Search>
          </div>
        </li>
      </ul>
    </nav>
  );
}
