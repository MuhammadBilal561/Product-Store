"use client";
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-6 transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
