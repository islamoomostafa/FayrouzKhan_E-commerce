import { Instagram } from "lucide-react";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function follow() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            dir="rtl"
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            تابعوا "فيروز خان"
            <span className="sm:block p-10"> على منصات التواصل الإجتماعي </span>
          </h1>

          <p dir="rtl" className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            عشان تشوفوا كل الجديد عندنا 😍{" "}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-7">
            <a
              target="_blank"
              className="flex justify-center items-center rounded bg-primary px-5 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
              href="https://www.facebook.com/Fairouzkhan.egy"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              className="flex justify-center items-center rounded bg-primary px-5 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              <FaTiktok />
            </a>
            <a
              target="_blank"
              className="flex justify-center items-center  rounded bg-primary px-4 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default follow;
