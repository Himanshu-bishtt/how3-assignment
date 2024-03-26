import Image from "next/image";
import React from "react";

interface ProductDetailProps {
  productID: string;
}

async function getProductByID(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}/api`);
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
    <div>
      <Image
        src={product.data.image}
        alt={product.data.title}
        width={500}
        height={500}
        priority
        className="h-48 w-48"
      />
      <h1>{product.data.title}</h1>
    </div>
  );
}
