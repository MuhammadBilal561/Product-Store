import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Fix: use mongoose.models to prevent re-compilation errors
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
