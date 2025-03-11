import React from "react";
import { CardItem } from "./CardItem";

const CardList = ({ data }) => {
  return (
    <>
      <h1>Personajes</h1>
      <section className="flex justify-center flex-wrap">
        {data?.map((el) => (
          <CardItem key={el.id} data={el} />
        ))}
      </section>
    </>
  );
};

export default CardList;
