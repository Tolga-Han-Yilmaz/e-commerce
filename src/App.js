import Home from "./page/Home";
import ProductContextProvider from "./context/ProductContextProvider";

import "./scss/App.scss";
function App() {
  return (
    <div>
      <ProductContextProvider>
        <Home />
      </ProductContextProvider>
    </div>
  );
}

export default App;
