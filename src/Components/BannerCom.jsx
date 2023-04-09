import React from "react";
import Book from "../assets/book.svg";
const BannerCom = () => {
  return (
    <div className="banner">
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-xl">
            <div class="text-center w-full">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                <strong class="font-extrabold text-yellow-400 block">
                  أكاديمية الفلاح الرقمية
                </strong>
              </h1>

              <p class="mt-4 sm:text-xl sm:leading-relaxed">
                في أكاديمية نجاح لا تشيل هم استطعنا نوفر لك دروس تعليمية ممتعة
                وشاملة بعيده عن الملل والتشتت.
              </p>
            </div>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded-full py-3 px-6 text-sm font-medium text-black shadow  focus:outline-none focus:ring active:bg-red-500 sm:w-auto bg-yellow-400 text-white"
                href="/get-started"
              >
                تصفح الدورات
              </a>
            </div>
            <div class="w-full flex justify-center mt-8">
              <img src={Book} alt="book" className="w-96 h-96" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerCom;
