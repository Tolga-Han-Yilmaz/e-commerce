import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

//? 1- Defining
export const ProductContext = createContext();

//? 3-Consume function (Custom Hook)
export const useProductContext = () => {
  return useContext(ProductContext);
};

//? 2- Provider Component
const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // product categories
  const c = products.map((product) => product.category);
  const categories = [...new Set(c)];

  const values = { products, categories };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
