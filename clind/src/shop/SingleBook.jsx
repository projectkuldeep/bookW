import React from "react";
import { useLoaderData } from "react-router-dom";
import "../shop/SingleBook.css";
import EveryBook from "../components/EveryBook";

const SingleBook = () => {
  const { book } = useLoaderData();
  const handleDownload = () => {
    window.open(book.bookPdfUrl, "_blank");
    // or if you want to download the file instead of opening it in a new tab:
    // window.location.href = book.bookPdfUrl;
  };
  return (
    <div>
      <div className="single-book-container">
        <div className="book-image">
          <img src={book.imageUrl} alt={book.name} />
        </div>
        <div className="book-details">
          <h1>{book.bookTitle}</h1>
          <h2>by {book.authorName}</h2>
          <p className="book-description">{book.bookDescription}</p>
          <h3 className="flex">
            <h1>M.R.P:-</h1>
            <h3>{book.price}</h3>
          </h3>
          <div className="book-actions">
            <button className="download-button" onClick={handleDownload}>
              Download
            </button>

            {/* <button className="purchase-button">Purchase</button> */}
          </div>
        </div>
      </div>
      <EveryBook />
    </div>
  );
};

export default SingleBook;
