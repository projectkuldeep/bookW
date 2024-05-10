import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditBook() {
  const { bookId } = useParams();
  const [initialBookData, setInitialBookData] = useState({
    bookTitle: "",
    authorName: "",
    price: "",
    bookDescription: "",
    categories: "",
    bookPdfUrl: "",
    imageUrl: "",
  });

  const [bookData, setBookData] = useState({ ...initialBookData });

  useEffect(() => {
    // Fetch book data for editing
    fetch(`http://localhost:5000/books/${match.params.bookId}`)
      .then((res) => res.json())
      .then((data) => {
        setInitialBookData(data);
        setBookData(data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, [match.params.bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any changes have been made
    const isDataChanged = Object.keys(bookData).some(
      (key) => bookData[key] !== initialBookData[key]
    );

    if (!isDataChanged) {
      alert("No changes made.");
      return;
    }

    try {
      // Update book data in DB
      const response = await fetch(
        `http://localhost:5000/books/${match.params.bookId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        }
      );

      if (response.ok) {
        alert("Book updated successfully!");
      } else {
        throw new Error("Failed to update book");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book");
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-3xl font-bold">Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Title:</label>
          <input
            type="text"
            name="bookTitle"
            value={bookData.bookTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={bookData.authorName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Book Description:</label>
          <textarea
            name="bookDescription"
            value={bookData.bookDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categories:</label>
          <select
            name="categories"
            value={bookData.categories}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Young Adult">Young Adult</option>
            <option value="Childrens">Childrens</option>
            <option value="Biographies & History">Biographies & History</option>
            <option value="Mystery & Thriller">Mystery & Thriller</option>
            <option value="Action & Adventure">Action & Adventure</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div>
          <label>Book PDF URL:</label>
          <input
            type="text"
            name="bookPdfUrl"
            value={bookData.bookPdfUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={bookData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditBook;
