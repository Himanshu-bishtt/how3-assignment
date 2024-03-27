import React, { useEffect, useState } from "react";
import Product from "../components/Product/product";

interface ProductsType {
  status: string;
  data: [];
}

async function getProducts() {
  const res = await fetch("http://localhost:3000/products/api");
  return await res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Products Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.data.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
