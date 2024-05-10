"use client";
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from "react";
import BookCards from "../components/BookCards";
const EveryBook = () => {
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then(
        (data) => setBooks(data)
        //console.log(data)
      )
      .catch((err) => console.log("error is", err));
  }, []);
  const [books, setBooks] = useState([]);
  return (
    <div>
      <BookCards books={books} headline="FREE BOOKS AND DEALS" />
    </div>
  );
};

export default EveryBook;
