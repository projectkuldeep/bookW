import React from "react";
import WordTOPdf from "./WordToPdf";
import Navbar from "../converter/Navbar";

const CHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <WordTOPdf></WordTOPdf>
    </>
  );
};

export default CHome;
