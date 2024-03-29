"use client";

import ProductApis from "../../_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";
import BreadCrumb from "../../_components/BreadCrumb";

function ProductDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log("product item ", res.data.data);
      setProductDetails(res.data.data);
      getProductListByCategory(res.data.data);
    });
  };
  const getProductListByCategory = (product) => {
    ProductApis.getProductsByCategory(product?.attributes?.category).then(
      (res) => {
        console.log(res?.data?.data);
        setProductList(res?.data?.data);
      }
    );
  };
  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 items-center mt-10">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h2 className="mt-24 mb-4 text-xl">مٌنتجات مشباهة</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetails;
