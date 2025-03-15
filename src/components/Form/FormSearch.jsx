import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";

export const FormSearch = ({
  search,
  setSearch,
  handleSearch,
  handleResetSearch,
  isSearched,
  handleCancel,
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div>
        <h3 className="text-white text-6xl mb-10">Busca un personaje</h3>
      </div>
      <div>
        <input
          type="text"
          name="name"
          id="buscar"
          placeholder="A-Bomb (HAS)"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-[90%] p-4 rounded-2xl mb-5"
        />
      </div>
      <div className="mb-5">
        <CustomButton
          value={isSearched ? "Reset" : "Buscar"}
          bgColor="#ec1d24"
          handleClick={isSearched ? handleResetSearch : handleSearch}
        />
        <CustomButton
          value="Cancelar"
          bgColor="#ec1d24"
          handleClick={handleCancel}
        />
      </div>
    </form>
  );
};
