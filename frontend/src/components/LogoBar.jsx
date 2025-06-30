import React from "react";
import logo from "../assets/logo brasil-participativo.png";
export function LogoBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-4 flex justify-center">
        <img
          src={logo}
          className="h-12"
        />
      </div>
    </div>
  );
}
