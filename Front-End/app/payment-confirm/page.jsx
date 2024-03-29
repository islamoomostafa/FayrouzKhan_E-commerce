import Image from "next/image";
import Link from "next/link";
import React from "react";

function PaymentConfirm() {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4">
      <Image src="/verified.gif" alt="check" width={130} height={130} />
      <h2 className="text-[24px]">! تم الدفع وتأكيد الأوردر بنجاح</h2>
      <h2 className="text-[17px] text-center mt-6 text-gray-500">
        ❤️ هنبعتلك تفاصيل الأوردر اللي طلبته على الإيميل .. وما تتأخرش علينا
        عشان تطلب من عندنا تاني
      </h2>
      <Link href="/" className="p-2 mt-6 text-white rounded-md bg-primary">
        الصفحة الرئيسية
      </Link>
    </div>
  );
}

export default PaymentConfirm;
