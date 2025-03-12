import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

const Header = ({ handleSearch }) => {
  return (
    <header>
      <Navbar />
      <Hero handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
