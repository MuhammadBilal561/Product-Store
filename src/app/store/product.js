import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      set({ products: data.data || [] });
    } catch (err) {
      console.error(err);
      set({ products: [] });
    }
  },

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "All fields are required" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },

  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      set((state) => ({
        products: state.products.filter((p) => p._id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  },

  updateProduct: async (id, updatedProduct) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      if (!res.ok) throw new Error("Failed to update product");
      const data = await res.json();
      set((state) => ({
        products: state.products.map((p) => (p._id === id ? data.data : p)),
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useProductStore;
