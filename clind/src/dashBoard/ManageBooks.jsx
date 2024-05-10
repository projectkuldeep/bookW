// eslint-disable-next-line no-unused-vars
import React from "react";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ManageBooks = () => {
  // Fetch all books from the server
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

  //delete books
  const handleDelete = (bookId) => {
    fetch(`http://localhost:5000/delete-book/${bookId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Update the books state after successful deletion
          setBooks(books.filter((book) => book._id !== bookId));
          alert("Book deleted successfully");
        } else {
          throw new Error("Failed to delete book");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <h2 className="mb-2 mt-3 ml-2 text-4xl font-bold">Manage Books</h2>
        <Table className="min-w-full">
          <Table.Head>
            <Table.HeadCell className="px-6 py-3">BooK </Table.HeadCell>
            <Table.HeadCell className="px-6 py-3">Cover</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3">Author Name</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3">Category</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3">Price</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3">Actions</Table.HeadCell>
            {/* <Table.HeadCell className="px-6 py-3">Delete</Table.HeadCell> */}
          </Table.Head>
          <Table.Body className="divide-y">
            {visibleBooks.map((book) => (
              <Table.Row
                key={book._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {book.book.bookTitle.length > 20
                      ? book.book.bookTitle.slice(0, 20) + "..."
                      : book.book.bookTitle}
                  </div>
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  {book.book.imageUrl && (
                    <img
                      src={book.book.imageUrl}
                      alt={book._id}
                      style={{ height: "50px", width: "50px" }}
                    />
                  )}
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {book.book.authorName}
                  </div>
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {book.book.categories}
                  </div>
                </Table.Cell>
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {book.book.price}
                  </div>
                </Table.Cell>
                {/* <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/admin/dashboard/Edit-books/${book._id}`}
                    className="inline-block px-3 py-1 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-md transition duration-300 ease-in-out ml-3"
                  >
                    Edit
                  </Link>
                </Table.Cell> */}
                <Table.Cell className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="inline-block px-3 py-1 text-sm font-medium text-white bg-orange-500 hover:bg-orange-700 rounded-md transition duration-300 ease-in-out ml-3"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
