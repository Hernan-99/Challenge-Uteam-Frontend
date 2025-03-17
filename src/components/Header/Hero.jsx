import Form from "../Form";

export const Hero = ({
  handleCreate,
  dataToEdit,
  setDataToEdit,
  handleUpdate,
}) => {
  return (
    <section className="flex w-[100%]">
      <Form
        handleCreate={handleCreate}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        handleUpdate={handleUpdate}
      />
    </section>
  );
};
