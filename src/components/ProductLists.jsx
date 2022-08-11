import React from "react";
import { useProductContext } from "../context/ProductContextProvider";
import { FaSearch, FaShoppingBasket, FaStream } from "react-icons/fa";

const ProductLists = () => {
  const { products } = useProductContext();

  return (
    <div className="productlists">
      <h2>Featured Products</h2>

      <div className="container">
        {products?.map((product) => {
          return (
            <div className="productlists-img" key={product?.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <h5>{product.price} $</h5>
              <button>
                <FaShoppingBasket className="icon" />
                ADD
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLists;
