import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Checkout />

      <Main />
      <Footer />
    </div>
  );
};

export default Home;
