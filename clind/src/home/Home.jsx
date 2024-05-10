//import React from "react";

import Banner from "../components/Banner";
import Converter from "../converter/Converter ";

import Category from "./Category";
import FavouriteBooks from "./FavouriteBooks";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Converter />
      <Category />
      <FavouriteBooks />
      <Footer />
    </div>
  );
};

export default Home;
