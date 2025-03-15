import React from "react";
import { CardItem } from "./CardItem";

const CardList = ({ dataCharacter, handleUpdate, handleDelete }) => {
  return (
    <>
      <h2 className="text-6xl text-white text-center">Personajes</h2>
      <section className="flex justify-center flex-wrap">
        {dataCharacter?.map((el) => (
          <CardItem
            key={el.id}
            data={el}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </>
  );
};

export default CardList;
