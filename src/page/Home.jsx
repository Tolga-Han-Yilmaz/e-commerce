import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Home;
