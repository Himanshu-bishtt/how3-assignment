import React from "react";

interface ProductDetailProps {
  productID: string;
}

export default function ProductDetail({
  params,
}: {
  params: ProductDetailProps;
}) {
  return <h1>Product Detail {params.productID}</h1>;
}
