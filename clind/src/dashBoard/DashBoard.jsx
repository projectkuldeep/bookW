import React from "react";
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-3">Book Management</h2>
          <Link
            to="/admin/dashboard/manage"
            className="block text-blue-600 hover:text-blue-700"
          >
            Manage Books
          </Link>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-3">Upload Book</h2>
          <Link
            to="/admin/dashboard/uploadbook"
            className="block text-blue-600 hover:text-blue-700"
          >
            Manage Orders
          </Link>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-3">Customer Management</h2>
          <Link
            to="/admin/dashboard/customers"
            className="block text-blue-600 hover:text-blue-700"
          >
            Manage Customers
          </Link>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-3">Analytics</h2>
          <Link
            to="/admin/dashboard/analytics"
            className="block text-blue-600 hover:text-blue-700"
          >
            View Analytics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
