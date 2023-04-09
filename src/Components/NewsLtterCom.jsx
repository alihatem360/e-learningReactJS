import React from "react";
import image from "../assets/NewsLtter.svg";
const SubscribeButton = () => {
  return (
    <div class="relative">
      <label for="UserEmail" class="sr-only">
        Email{" "}
      </label>

      <input
        type="email"
        id="UserEmail"
        placeholder="flea@rhcp.com"
        class="w-full rounded-md border-gray-200 pr-20 shadow-sm sm:text-sm h-12 border-2 focus:ring-yellow-500 focus:border-yellow-500"
      />

      <span class="pointer-events-none absolute inset-y-0 right-0 grid w-20 place-content-center text-gray-500">
        <button class="bg-yellow-400 text-black font-bold rounded text-xl text-white h-10 p-2">
          اشترك
        </button>
      </span>
    </div>
  );
};

const NewsLtterCom = () => {
  return (
    <div
      className="flex justify-around
     items-center w-3/4 mx-auto"
    >
      <div className="news-letter">
        <h1 className="text-5xl font-bold text-yellow-400 mb-8 w-3/4">
          اشترك في النشرة البريدية
        </h1>
        <p className="text-xl font-bold text-black my-2 text-gray-500">
          اشترك في النشرة البريدية ليصلك كل جديد من الدورات والمقالات
        </p>
        <SubscribeButton />
      </div>

      <div>
        <img src={image} alt="image" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default NewsLtterCom;
