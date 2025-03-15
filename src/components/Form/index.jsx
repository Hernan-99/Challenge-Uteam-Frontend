import React, { useEffect, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormSearch } from "./FormSearch";
import { FormCreateUpdate } from "./FormCreateUpdate";

const Form = ({
  search,
  setSearch,
  handleSearch,
  handleResetSearch,
  isSearched,
  dataToEdit,
  onSubmit,
}) => {
  const [showFormSearch, setShowFormSearch] = useState(false);
  const [showFormCreate, setShowFormCreate] = useState(false);

  useEffect(() => {
    if (dataToEdit) {
      setShowFormCreate(true);
      setShowFormSearch(false);
    }
  }, [dataToEdit]);

  const handleShowSearch = () => {
    setShowFormSearch(true);
    setShowFormCreate(false);
  };

  const handleShowCreate = () => {
    setShowFormCreate(true);
    setShowFormSearch(false);
  };

  const handleCancel = () => {
    setShowFormSearch(false);
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
        {!showFormSearch && !dataToEdit && (
          <CustomButton
            value="Buscar personaje"
            bgColor="#ec1d24"
            handleClick={handleShowSearch}
          />
        )}
        {!showFormCreate && !dataToEdit && (
          <CustomButton
            value="Crear personaje"
            bgColor="#ec1d24"
            handleClick={handleShowCreate}
          />
        )}
      </div>
      {showFormSearch && (
        <FormSearch
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          handleResetSearch={handleResetSearch}
          handleCancel={handleCancel}
          isSearched={isSearched}
          dataToEdit={dataToEdit}
        />
      )}
      {showFormCreate && (
        <FormCreateUpdate
          onSubmit={onSubmit}
          dataToEdit={dataToEdit}
          handleCancel={handleCancel}
        />
      )}
    </section>
  );
};

export default Form;
