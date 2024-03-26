import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return Response.json({ status: 200, message: "success", data });
  } catch (err: any) {
    console.error("Error fetching data:", err);
    Response.json({ status: 500, error: "Error fetching data" });
  }
}
