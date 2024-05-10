import React, { useState } from "react";

function UploadBook() {
  const [bookData, setBookData] = useState({
    bookTitle: "",
    authorName: "",
    price: "",
    bookDescription: "",
    categories: "",
    bookPdfUrl: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the desired structure
    const formData = {
      // _id: "662f47fb635a3aa22e924c3e", // Hardcoded or generate dynamically
      book: {
        bookTitle: bookData.bookTitle,
        authorName: bookData.authorName,
        price: bookData.price,
        bookDescription: bookData.bookDescription,
        categories: bookData.categories,
        bookPdfUrl: bookData.bookPdfUrl,
        imageUrl: bookData.imageUrl,
      },
    };

    try {
      // Save data into DB
      const response = await fetch("http://localhost:5000/upload-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form fields after successful submission
        setBookData({
          bookTitle: "",
          authorName: "",
          price: "",
          bookDescription: "",
          categories: "",
          bookPdfUrl: "",
          imageUrl: "",
        });

        alert("Book Uploaded Successfully!!!");
      } else {
        throw new Error("Failed to upload book");
      }
    } catch (error) {
      console.error("Error uploading book:", error);
      // Handle error here
      alert("Failed to upload book");
    }
  };

  return (
    <div>
      {/* style={{ display: "flex", justifyContent: "center" }} */}
      <h2 className="mb-2 text-3xl font-bold">Upload Books</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "900px",
          // maxWidth: "500px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "#f2f5f7",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Book Title:
          </label>
          <input
            type="text"
            name="bookTitle"
            value={bookData.bookTitle}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Author Name:
          </label>
          <input
            type="text"
            name="authorName"
            value={bookData.authorName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Price:
          </label>
          <input
            type="text"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Book Description:
          </label>
          <textarea
            name="bookDescription"
            value={bookData.bookDescription}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Categories:
          </label>
          <select
            name="categories"
            value={bookData.categories}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
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
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Book PDF URL:
          </label>
          <input
            type="text"
            name="bookPdfUrl"
            value={bookData.bookPdfUrl}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Image URL:
          </label>
          <input
            type="text"
            name="imageUrl"
            value={bookData.imageUrl}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadBook;
