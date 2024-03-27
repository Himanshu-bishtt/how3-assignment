"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 1.05 }}
      animate={{ x: [0, 50, 0] }}
      className="border m-4 rounded-lg flex flex-col gap-2 p-4 overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        priority
        className="h-28 w-28 m-auto"
      />
      <div className="flex flex-col items-start mt-2">
        <h3 className="text-xs font-bold text-gray-500">{category}</h3>
        <Link href={`/products/${id}`}>
          <h2 className="font-bold line-clamp-1 hover:text-red-800">{title}</h2>
        </Link>
      </div>
      <div className="text-sm">
        Price: <span className="text-red-800 font-bold text-lg">${price}</span>
      </div>
      <div className="flex gap-2 items-center text-sm font-bold">
        <div className="bg-slate-800 text-white text-xs p-1 px-2 rounded-lg">
          ⭐ {rating.rate}
        </div>
        <div>({rating.count})</div>
      </div>
    </motion.div>
  );
}
