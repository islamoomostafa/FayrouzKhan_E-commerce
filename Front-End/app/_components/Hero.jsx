import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-gray-50 ">
      <div className="mx-auto  max-w-screen-xl px-4 py-20 lg:flex lg:h-auto ">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 items-center">
          <Image
            className="mx-auto rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
            src="https://res.cloudinary.com/dkkpvle04/image/upload/v1711640587/photo_1610377507996_dcd4f0cfc125_67dd5fba73.avif"
            alt="logo"
            width={500}
            height={253}
          />
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              .. هدايا مُختلفة
              <strong className="font-extrabold text-primary sm:block mt-2">
                {" "}
                ! وتسيب ذكرى{" "}
              </strong>
            </h1>

            <p className="mt-6 sm:text-xl/relaxed">
              عالم كبير من الهدايا في انتظارك عشان تختار منهم في فيروز خان ..
              هنساعدك عشان تختار أجمل هدية للناس اللي بتحبهـ❤️ـم
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full transition rounded bg-primary px-8 py-3 text-md font-medium text-white shadow hover:bg-primaryHover focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                تابعنا على جميع المنصات
              </a>

              <a
                className="block w-full rounded px-8 py-3 transition text-md font-medium text-primary shadow hover:text-primaryHover focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                إحنا مين؟
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
