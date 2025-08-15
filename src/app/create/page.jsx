"use client";
import React, { useState } from "react";
import useProductStore from "../store/product";
import Toast from "@/components/Toast";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [toastMessage, setToastMessage] = useState(null);

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      setToastMessage({
        title: "Error",
        description: message,
        status: "error",
        isCloseable: true,
      });
    } else {
      setToastMessage({
        title: "Success",
        description: "Product created successfully!",
        status: "success",
        isCloseable: true,
      });
      setNewProduct({ name: "", price: "", image: "" }); // clear form after success
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {toastMessage && (
        <Toast
          message={toastMessage.description}
          type={toastMessage.status}
          onClose={() => setToastMessage(null)}
        />
      )}

      <div className="w-full max-w-md sm:max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600 text-center mb-6">
          Create a New Product
        </h1>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent page refresh
            handleAddProduct();
          }}
        >
          {/* Product Name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Product Name
            </label>
            <input
              id="name"
              type="text"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              placeholder="Enter Product Name"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              min={0}
              placeholder="Enter Product Price"
              required
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Image URL
            </label>
            <input
              id="image"
              type="text"
              placeholder="Enter Image URL"
              required
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-900 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-300"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
