import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://res.cloudinary.com/dkkpvle04/image/upload/v1711669845/holiday_gifts_presents_country_cottage_style_gift_boxes_birthday_christmas_boxing_day_wedding_holidays_shopping_postprocessed_generative_ai_360074_77882_3b772317db.avif"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <Image src="/WhiteLogo.png" alt="logo" width={110} height={110} />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-2xl md:text-2xl">
              "أهلاً بيكم في "فيروز خان{" "}
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              عالم كبير من الهدايا في انتظارك عشان تختار منهم في فيروز خان ..
              هنساعدك عشان تختار أجمل هدية للناس اللي بتحبهـ❤️ـم
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-20 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                "أهلاً بيكم في "فيروز خان{" "}
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 mb-10">
                عالم كبير من الهدايا في انتظارك في فيروز خان .. هنساعدك عشان
                تختار أجمل هدية للناس اللي بتحبهـ❤️ـم
              </p>
            </div>
            <SignUp />{" "}
          </div>
        </main>
      </div>
    </section>
  );
}
