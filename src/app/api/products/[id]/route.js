import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Product from "@/models/productModel";

connectDB();

// ✅ GET single product by ID
export async function GET(req, context) {
  const { id } = await context.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    console.error("Error fetching product:", error.message);
    return NextResponse.json(
      { success: false, message: "Error fetching product" },
      { status: 500 }
    );
  }
}

// ✅ UPDATE product by ID
export async function PUT(req, context) {
  const { id } = await context.params;
  try {
    const data = await req.json();
    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedProduct) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error.message);
    return NextResponse.json(
      { success: false, message: "Error updating product" },
      { status: 500 }
    );
  }
}

// ✅ DELETE product by ID
export async function DELETE(req, context) {
  const { id } = await context.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    return NextResponse.json(
      { success: false, message: "Error deleting product" },
      { status: 500 }
    );
  }
}
