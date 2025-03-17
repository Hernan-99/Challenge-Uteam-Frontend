import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

const Header = ({ handleCreate, dataToEdit, setDataToEdit, handleUpdate }) => {
  return (
    <header className="mb-10">
      <Navbar />
      <Hero
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
      />
    </header>
  );
};

export default Header;
