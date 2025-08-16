"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import useProductStore from "../store/product";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";
import Loader from "@/components/Loader"; // 👈 Import your loader

export default function HomePage() {
  const { products, fetchProducts, deleteProduct, updateProduct } =
    useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 loader state

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await fetchProducts();
      setLoading(false);
    };
    loadProducts();
  }, []);

  const showToast = (message, type = "success") => setToast({ message, type });

  const handleDelete = async (id) => {
    await deleteProduct(id);
    showToast("Product deleted successfully!", "success");
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(editingProduct._id, editingProduct);
    setIsModalOpen(false);
    showToast("Product updated successfully!", "success");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Loader /> {/* 👈 Loader shows while fetching */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-500">
      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-12 transition-colors duration-500">
        {products.length > 0 ? "Current Products" : "Create Products"}
      </h1>

      {/* Empty State */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 dark:text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 text-center">
            No products found. Start by creating a new product!
          </p>
          <img
            src="https://via.placeholder.com/300?text=No+Products"
            alt="No products"
            className="rounded-2xl shadow-lg w-64 sm:w-72 md:w-80"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600 dark:text-indigo-400">
          Edit Product
        </h2>
        {editingProduct && (
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={editingProduct.price}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, price: e.target.value })
              }
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={editingProduct.image}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, image: e.target.value })
              }
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-shadow duration-300 shadow-md hover:shadow-lg"
            >
              Save Changes
            </button>
          </form>
        )}
      </Modal>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          position="bottom"
        />
      )}
    </div>
  );
}
