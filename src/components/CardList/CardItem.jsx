import React from "react";

export const CardItem = ({ data }) => {
  return (
    <article>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={`${data.name}`}
      />
      <div>
        <h3>{data.name}</h3>
      </div>
    </article>
  );
};
