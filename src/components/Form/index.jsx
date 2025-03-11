import React, { useState } from "react";

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
    setForm(initialForm);
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
          className="w-[90%] p-4 rounded-2xl"
        />
      </div>
      <div className="mb-5">
        <button
          type="submit"
          className="bg-[#ec1d24] py-3 px-14 me-2 rounded-sm text-white"
        >
          Buscar
        </button>
        <button
          onClick={handleReset}
          className="bg-[#ec1d24] py-3 px-14 mx-3 rounded-sm  text-white"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

// Exportación del componente
export default Form;
