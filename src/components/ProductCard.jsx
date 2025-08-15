"use client";
import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 truncate">
            {product.name}
          </h2>
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
            ${product.price}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between gap-2">
          <button
            onClick={() => onEdit(product)}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
          >
            <PencilIcon className="h-5 w-5" /> Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
          >
            <TrashIcon className="h-5 w-5" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
