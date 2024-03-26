import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export default function Product({
  id,
  title,
  price,
  category,
  rating,
  image,
}: ProductType) {
  return (
    <figure className="border m-4 rounded-lg flex flex-col items-center p-2">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        priority
        className="h-24 w-24"
      />
      <div>
        <Link href={`/products/${id}`}>{title}</Link>
      </div>
      <div>{price}</div>
      <div>Bottom</div>
    </figure>
  );
}
