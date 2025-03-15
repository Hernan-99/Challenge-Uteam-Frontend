import React from "react";

export const CustomButton = ({ handleClick, value, bgColor }) => {
  return (
    <button
      className="py-3 px-14 mx-4 rounded-sm text-white hover:scale-105 transition-all duration-300 ease-in-out"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
