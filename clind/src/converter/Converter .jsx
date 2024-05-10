import { Link } from "react-router-dom";
import React from "react";
import Home from "../converter/Home";

const Converter = () => {
  return (
    <div className=" flex mt-4 bg-slate-200 ">
      <h1 style={{ padding: "20px" }}> Use converters from here</h1>
      <p className=" pt-5">
        <Link to={`/ConverterHome`}>(Explore form here)</Link>
      </p>
    </div>
  );
};

export default Converter;
