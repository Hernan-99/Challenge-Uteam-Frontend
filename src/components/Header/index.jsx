import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

const Header = ({
  search,
  setSearch,
  handleSearch,
  handleResetSearch,
  isSearched,
  dataToEdit,
  onSubmit
}) => {
  return (
    <header className="mb-10">
      <Navbar />
      <Hero
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleResetSearch={handleResetSearch}
        isSearched={isSearched}
        dataToEdit={dataToEdit}
        onSubmit={onSubmit}
      />
    </header>
  );
};

export default Header;
