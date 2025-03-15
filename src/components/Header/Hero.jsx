import Form from "../Form";

export const Hero = ({
  search,
  setSearch,
  handleSearch,
  handleResetSearch,
  isSearched,
  dataToEdit,
  onSubmit
}) => {
  return (
    <section className="flex w-[100%]">
      <Form
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleResetSearch={handleResetSearch}
        isSearched={isSearched}
        dataToEdit={dataToEdit}
        onSubmit={onSubmit}
      />
    </section>
  );
};
