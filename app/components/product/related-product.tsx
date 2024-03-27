import React from "react";
import Product from "./product";

export async function getCategoryProducts(category: string) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function RelatedProducts({
  category,
}: {
  category: string;
}) {
  const products = await getCategoryProducts(category);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-8 text-slate-700">
        Related products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
