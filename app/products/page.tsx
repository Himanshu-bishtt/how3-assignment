"use client";

import React, { useEffect, useState } from "react";
import Product from "../components/product/product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4 text-slate-700">
        Products Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            category={product.category}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
