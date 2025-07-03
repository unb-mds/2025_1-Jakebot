import React from "react";
import Logo from "../assets/Logo BP.svg";
export function LogoBar() {
  return (
    <div className=" bg-white border-b border-gray-200">
      <div className="  max-w-7xl mx-auto py-4 flex justify-center">
        <img
          src={Logo}
          className="h-24"
        />
      </div>
    </div>
  );
}
