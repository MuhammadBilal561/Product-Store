export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Product from "@/models/productModel";

connectDB();

// GET all products
export async function GET() {
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getting products", error.message);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}

// POST create product
export async function POST(req) {
  const product = await req.json();
  if (!product.name || !product.price || !product.image) {
    return NextResponse.json({ success: false, message: "Please provide all fields" }, { status: 400 });
  }

  try {
    const newProduct = new Product(product);
    await newProduct.save();
    return NextResponse.json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating product", error.message);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}

// DELETE product
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleting product", error.message);
    return NextResponse.json({ success: false, message: "Product not found" }, { status: 500 });
  }
}

// PUT update product
export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const product = await req.json();

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    return NextResponse.json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error in updating product", error.message);
    return NextResponse.json({ success: false, message: "Product not found" }, { status: 500 });
  }
}
