"use client";
//import React, { useState } from "react";
//import React, { useCallback, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Allbooks = () => {
  // Sample data for books
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

  // State to manage pagination
  const [page, setPage] = useState(1);
  const booksPerPage = 30; // Number of books to display per page

  // Calculate index range based on current page
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = page * booksPerPage;

  // Filter books based on index range
  const visibleBooks = books.slice(startIndex, endIndex);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> Best Books</h1>
      <div style={styles.bookContainer}>
        {visibleBooks.map((books) => (
          <div key={books._id} style={styles.bookItem}>
            <Link to={`/book/${books._id}`}>
              <img
                src={books.book.imageUrl}
                alt={books._id}
                style={styles.bookImage}
              />
              <h5>{books.book.bookTitle}</h5>
            </Link>
            {/* Render additional book details if needed */}
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div style={styles.pagination}>
        {[...Array(Math.ceil(books.length / booksPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              style={styles.pageButton}
              onClick={() => setPage(number + 1)}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Allbooks;

// CSS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    // maxWidth: "800px",
    // margin: "0 ",
    padding: "20px",
  },
  heading: {
    marginTop: "40px",
    textAlign: "center",
    marginBottom: "20px",
  },
  bookContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: "20px",
  },
  bookItem: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  pageButton: {
    padding: "8px 16px",
    margin: "0 5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    color: "#333",
  },
};
