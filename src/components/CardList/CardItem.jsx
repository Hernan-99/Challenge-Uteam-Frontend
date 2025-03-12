import React from "react";

export const CardItem = ({ data }) => {
  const { name } = data;
  const { path, extension } = data.thumbnail;
  return (
    <article className="m-4 bg-[#e62429] rounded-lg">
      <img
        className="h-[300px] w-[300px] rounded-t-lg"
        src={`${path}.${extension}`}
        alt={`${name}`}
      />
      <div className="p-4 font-semibold text-white">
        <h3 className="mb-2 text-center">{data.name}</h3>
      </div>
    </article>
  );
};
