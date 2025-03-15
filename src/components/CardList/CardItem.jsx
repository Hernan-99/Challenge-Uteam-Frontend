import React from "react";

export const CardItem = ({ data, handleUpdate, handleDelete }) => {
  const { id, name, thumbnail } = data;
  return (
    <article className="w-[300px] m-4 bg-[#e62429] rounded-lg">
      <img
        className="w-full h-[300px] rounded-t-lg"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`${name}`}
      />
      <div className="w-full font-semibold text-white">
        <h3 className="mb-2 text-center">{data.name}</h3>
        <div className="flex mb-5 justify-around">
          <button
            className="py-2 px-4 bg-[#202020]"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Eliminar
          </button>
          <button
            className="py-2 px-4 bg-[#202020]"
            onClick={() => handleUpdate(data)}
          >
            Editar
          </button>
        </div>
      </div>
    </article>
  );
};
