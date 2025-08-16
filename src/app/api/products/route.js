import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Product from "@/models/productModel";

connectDB();

// ✅ GET all products
export async function GET() {
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return NextResponse.json(
      { success: false, message: "Error fetching products" },
      { status: 500 }
    );
  }
}

// ✅ CREATE new product
export async function POST(req) {
  try {
    const body = await req.json();
    const product = new Product(body);
    await product.save();
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error.message);
    return NextResponse.json(
      { success: false, message: "Error creating product" },
      { status: 500 }
    );
  }
}
