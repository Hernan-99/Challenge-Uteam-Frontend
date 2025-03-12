import React, { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

const initialForm = {
  name: "",
};

const Form = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(form);
  };

  const handleReset = () => {
    setForm(initialForm);
    handleSearch(null);
  };
  return (
    <form
      onSubmit={handleSubmit}
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
        <input
          type="text"
          name="name"
          id="buscar"
          placeholder="Buscar personaje"
          onChange={handleChange}
          value={form.name}
          className="w-[90%] p-4 rounded-2xl mb-5"
        />
      </div>
      <div className="mb-5">
        <CustomButton value="Buscar" bgColor="#ec1d24" />
        <CustomButton
          value="Reset"
          bgColor="#ec1d24"
          handleClick={handleReset}
        />
      </div>
    </form>
  );
};

// Exportación del componente
export default Form;
