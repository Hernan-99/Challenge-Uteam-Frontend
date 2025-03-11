import React from "react";

export const CardItem = ({ data }) => {
  return (
    <article className="m-4 bg-[#e62429] rounded-lg">
      <img
        className="h-[300px] w-[300px] rounded-t-lg"
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={`${data.name}`}
      />
      <div className="p-4 font-semibold text-white">
        <h3 className="mb-2">{data.name}</h3>
      </div>
    </article>
  );
};
