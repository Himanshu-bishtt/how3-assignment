import RelatedProducts from "@/app/components/product/related-product";
import Image from "next/image";
import React, { useEffect } from "react";

interface ProductDetailProps {
  productID: string;
}

async function getProductByID(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function ProductDetail({
  params,
}: {
  params: ProductDetailProps;
}) {
  const product = await getProductByID(params.productID);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold text-center mt-8 text-slate-700">
        Product details page
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 p-8">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          priority
          className="h-72 w-72 justify-self-center"
        />
        <div className="flex flex-col gap-2 bg-slate-100 shadow rounded-md py-12 px-8">
          <div className="bg-green-600 text-white font-bold text-sm self-start px-2 rounded-lg">
            {product.category}
          </div>
          <h3 className="text-lg font-bold">{product.title}</h3>
          <div className="flex gap-2 items-center text-sm font-bold mt-2">
            <div className="bg-slate-800 text-white text-xs p-1 px-2 rounded-lg">
              ⭐ {product.rating.rate}
            </div>
            <div>({product.rating.count})</div>
          </div>
          <div className="text-sm mt-4">
            Price:
            <span className="text-red-800 font-bold text-lg">
              ${product.price}
            </span>
          </div>
          <div className="mt-4 text-slate-600 leading-8">
            {product.description}
          </div>
          <div className="mt-4">
            <div>
              ID: <span className="font-bold">{product.id}</span>
            </div>
            <div>
              Category: <span className="font-bold">{product.category}</span>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button type="button" className="border p-2 px-4 font-bold">
              -
            </button>
            <div className="p-2 px-4 border font-bold">1</div>
            <button type="button" className="border p-2 px-4 font-bold">
              +
            </button>
          </div>

          <div className="mt-4">
            <button className="bg-green-600 text-white py-2 p-4 font-bold rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts category={product.category} />
    </div>
  );
}
