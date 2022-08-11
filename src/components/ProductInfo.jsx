import React from "react";
import { useState } from "react";
import { useProductContext } from "../context/ProductContextProvider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductInfo = () => {
  const { products } = useProductContext();
  const [index, setIndex] = useState(0);
  const checkNumber = (number) => {
    if (number > products.length - 1) {
      return 0;
    }
    if (number < 0) {
      return products.length - 1;
    }
    return number;
  };
  function handleLeft() {
    return setIndex((prevIndex) => {
      let number = prevIndex - 1;
      return checkNumber(number);
    });
  }
  function handleRight() {
    return setIndex((prevIndex) => {
      let number = prevIndex + 1;
      return checkNumber(number);
    });
  }

  return (
    <div className="productinfo">
      <div className="container">
        <FaChevronLeft className="icon col" onClick={handleLeft} />
        <div className="productinfo-img col">
          <img src={products[index]?.thumbnail} alt={products[index]?.title} />
          <div>
            <h3>{products[index]?.title}</h3>
            <p>{products[index]?.description}</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <FaChevronRight className="col icon" onClick={handleRight} />
      </div>
    </div>
  );
};

export default ProductInfo;
