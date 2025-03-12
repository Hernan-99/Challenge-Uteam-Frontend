import React from "react";

export const CustomButton = ({ handleClick, value }) => {
  return (
    <button
      type="submit"
      className="bg-[#ec1d24] py-3 px-14 mx-3 rounded-sm text-white"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
