import Form from "../Form";

export const Hero = ({ handleSearch }) => {
  return (
    <section className="flex w-[100%] h-80">
      <Form handleSearch={handleSearch} />
    </section>
  );
};
