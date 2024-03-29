import React from "react";
import Image from "next/image";
function ProductBanner({ product }) {
  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="product-details-banner"
          width={500}
          height={400}
          className="mx-auto rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
        />
      ) : (
        <div className="w-[280px] h-[180px] bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductBanner;
