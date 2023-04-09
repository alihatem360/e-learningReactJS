import React from "react";
import Book1 from "../assets/image (1).png";
import Book2 from "../assets/image (2).png";
import Book3 from "../assets/image (3).png";
import Book4 from "../assets/image (4).png";
import HomeMaterial from "./HomeMaterial/index";
const books = [Book1, Book2, Book3, Book4];
const AboutusCom = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-2/4 mx-auto my-10 h-96">
        <span className="text-3xl font-bold text-yellow-400">نبذة عنا</span>
        <h1 className="text-5xl font-bold text-black py-4">من نحن</h1>
        <p className="text-xl font-bold text-black my-5">
          نحن أكاديمية نجاح نوفر لك احدث الدورات و دروس تعليمية و طريقة ممتعة و
          مشوقة لن تمل أبدا لأننا نوفر أحدث الطرق العلمية التي تساعدك على
          الدراسة بشكل أفضل
        </p>
        <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded text-xl text-white">
          تعرف علينا أكثر
        </button>
      </div>

      <div className="">
        <HomeMaterial />
      </div>
    </div>
  );
};

export default AboutusCom;
