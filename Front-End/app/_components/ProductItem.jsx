import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";
function ProductItem({ product }) {
  return (
    <Link
      href={`/product-details/${product?.id}`}
      className="rounded-lg border-primaryHover p-1  hover:cursor-pointer hover:border hover:shadow-md"
    >
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="banner-card"
        width={400}
        height={350}
        className="h-[220px] rounded-t-lg object-cover"
      />
      <div className="flex items-center justify-between rounded-b-lg bg-gray-50 p-3 ">
        <div className="">
          <h2 className="line-clamp-1 text-[16px] font-medium">
            {product?.attributes?.title}
          </h2>
          <h2 className="flex items-center gap-1 text-[12px] font-medium text-gray-400">
            <List className="h-4 w-4" /> {product?.attributes?.category}
          </h2>
        </div>
        <h2>{product?.attributes?.price}</h2>
      </div>
    </Link>
  );
}

export default ProductItem;
