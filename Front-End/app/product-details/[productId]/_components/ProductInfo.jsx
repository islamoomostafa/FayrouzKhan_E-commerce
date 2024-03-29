"use client";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../../_utils/CartApis";
import { CartContext } from "../../../_context/CartContext";

function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const handeleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // add to cart
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          console.log("cart created susccefully", res.data.data);
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  return (
    <div>
      {product?.id ? (
        <div>
          <h2 className="text-[28px]">{product?.attributes?.title}</h2>
          <h2 className="text-[18px] text-gray-400 mb-10">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[18px] mt-5 ">
            {product?.attributes?.description[0].children[0].text}
          </h2>
          <h2 className="text-[14px] text-gray-500 flex gap-1 items-center mt-5">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="text-green-500 h-5 w-5" />
            ) : (
              <AlertOctagon className="text-red-500 h-5 w-5 " />
            )}
            {"جاهز للشحن؟"}
          </h2>
          <h2 className="text-[28px] text-primary mt-3">
            EGP {product?.attributes?.price}
          </h2>
          <button
            onClick={handeleAddToCart}
            className="flex gap-2 bg-primary p-3 rounded-lg hover:bg-primaryHover text-white transition"
          >
            <ShoppingCart />
            إضافة إلى عربة التسوق
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
