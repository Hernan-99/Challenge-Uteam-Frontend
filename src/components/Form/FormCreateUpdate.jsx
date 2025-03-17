import { useEffect, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

const initialForm = {
  name: "",
  description: "",
  thumbnailUrl: "",
};

export const FormCreateUpdate = ({
  handleCreate,
  handleUpdate,
  dataToEdit,
  setDataToEdit,
  handleCancel,
}) => {
  const [form, setForm] = useState(dataToEdit || initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm({
        ...dataToEdit,
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
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.thumbnailUrl.trim()) return;

    if (dataToEdit) {
      await handleUpdate(form);
    } else {
      await handleCreate(form);
    }

    setDataToEdit(null);
    setForm(initialForm);
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
        <h3 className="text-white text-6xl mb-10"></h3>
        <div>
          <input
            type="text"
            name="name" 
            value={form.name}
            onChange={handleChange}
            className="w-[90%] p-4 rounded-2xl mb-5"
            placeholder="Nombre del personaje"
            required
          />
        </div>

        <div>
          <textarea
            name="description" 
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
            name="thumbnailUrl" 
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
