import { FaStoreAlt, FaBookOpen, FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-stores col">
          <FaStoreAlt className="icon" />
          <h4>Stores</h4>
        </div>
        <div className="header-catalog col">
          <FaBookOpen className="icon" />
          <h4>Catalog</h4>
        </div>

        <div className="header-contact col">
          <h4 className="header-contact--number">5644465464</h4>

          <FaPhoneAlt className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
