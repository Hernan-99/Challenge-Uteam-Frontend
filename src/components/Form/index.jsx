// import { FormSearch } from "./FormSearch";
import { FormCreateUpdate } from "./FormCreateUpdate";
import { useEffect, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

const Form = ({ handleCreate, dataToEdit, setDataToEdit, handleUpdate }) => {
  const [showFormCreate, setShowFormCreate] = useState(false);

  useEffect(() => {
    if (dataToEdit) {
      setShowFormCreate(true);
    }
  }, [dataToEdit]);

  const handleShowCreate = () => {
    setShowFormCreate(true);
  };

  const handleCancel = () => {
    setShowFormCreate(false);
  };
  return (
    <section
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
        {!showFormCreate && !dataToEdit && (
          <CustomButton
            value="Crear personaje"
            bgColor="#ec1d24"
            handleClick={handleShowCreate}
          />
        )}
      </div>

      {showFormCreate && (
        <FormCreateUpdate
          handleCreate={handleCreate}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          handleUpdate={handleUpdate}
          handleCancel={handleCancel}
        />
      )}
    </section>
  );
};

export default Form;
