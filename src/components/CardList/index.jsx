import React from "react";
import { CardItem } from "./CardItem";

const CardList = ({ data }) => {
  return (
    <>
      <h2 className="text-6xl text-white text-center">Personajes</h2>
      <section className="flex justify-center flex-wrap">
        {data?.map((el) => (
          <CardItem key={el.id} data={el} />
        ))}
      </section>
    </>
  );
};

export default CardList;
