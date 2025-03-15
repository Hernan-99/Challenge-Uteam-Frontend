import { useEffect, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

const initialForm = {
  name: "",
  description: "",
  thumbnailUrl: "",
};
export const FormCreateUpdate = ({ onSubmit, dataToEdit, handleCancel }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm({
        name: dataToEdit.name || "",
        description: dataToEdit.description || "",
        thumbnailUrl: dataToEdit.thumbnail
          ? `${dataToEdit.thumbnail.path}.${dataToEdit.thumbnail.extension}`
          : "",
      });
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!dataToEdit) {
      setForm(initialForm);
    }
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
      }}
    >
      <div>
        <h3 className="text-white text-6xl mb-10">
          {dataToEdit ? "Actualizar Personaje" : "Crear Personaje"}
        </h3>
        <div>
          <input
            type="text"
            name="name" // Use name attribute for easy handling
            value={form.name}
            onChange={handleChange}
            className="w-[90%] p-4 rounded-2xl mb-5"
            placeholder="Nombre del personaje"
            required
          />
        </div>

        <div>
          <textarea
            name="description" // Use name attribute for easy handling
            value={form.description}
            onChange={handleChange}
            className="w-[90%] p-4 rounded-2xl mb-5"
            placeholder="Descripcion"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="thumbnailUrl" // Use name attribute for easy handling
            value={form.thumbnailUrl}
            onChange={handleChange}
            className="w-[90%] p-4 rounded-2xl mb-5"
            placeholder="URL de la imagen"
            required
          />
        </div>

        <div>
          <div>
            <CustomButton
              value={dataToEdit ? "Actualizar" : "Crear"}
              bgColor="#ec1d24"
            />
            <CustomButton
              value="Cancelar"
              bgColor="#ec1d24"
              handleClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
