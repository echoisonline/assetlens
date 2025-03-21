import Navbar from "../components/Navbar";
import React from "react";
import Dasboard from "../components/Dasboard";

function Home() {
  return (
    <>
      <div className="w-full flex mt-[5px] justify-center">
        <Navbar />
      </div>
      <div>
        <Dasboard />
      </div>
    </>
  );
}

export default Home;
