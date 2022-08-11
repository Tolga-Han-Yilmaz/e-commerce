import { useState } from "react";
import { FaSearch, FaShoppingBasket, FaStream } from "react-icons/fa";
import { useProductContext } from "../context/ProductContextProvider";
const Nav = () => {
  const { categories } = useProductContext();
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-search--form">
          <input type="text" />
          <button>
            <FaSearch className="icon" />
          </button>
        </div>
        <div className="div-icon col">
          <FaShoppingBasket className="icon " />
          <FaStream className="icon" onClick={() => setIsShow(!isShow)} />
        </div>
        <ul className={isShow ? "ul" : "d-none "}>
          {categories.map((category, id) => {
            return <li key={id}>{category}</li>;
          })}
        </ul>
        <ul className="md-ul">
          {categories.map((category, id) => {
            return <li key={id}>{category}</li>;
          })}
        </ul>

        <div className="nav-categories"></div>
      </div>
    </nav>
  );
};

export default Nav;
