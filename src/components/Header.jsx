import { FaStoreAlt, FaBookOpen, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-stores col">
          <FaStoreAlt className="icon" />
          <h4>
            <Link to="/" className="link">
              Stores
            </Link>
          </h4>
        </div>
        <div className="header-catalog col">
          <FaBookOpen className="icon" />
          <h4>
            <Link to="/checkout" className="link">
              Checkout
            </Link>
          </h4>
        </div>

        <div className="header-contact col">
          <h5 className="header-contact--number">Call us:(5644465464)</h5>

          <FaPhoneAlt className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
