import React from "react";
import "./style.css";

import image1 from "../../assets/2 (3).png";
import image2 from "../../assets/2 (4).png";
import image3 from "../../assets/2 (5).png";
import image4 from "../../assets/2 (6).png";
import image5 from "../../assets/image (1).png";
import image6 from "../../assets/image (2).png";

const images = [image1, image2, image3, image4, image5, image6];
const title = [
  "كتب الكترونية",
  "ملخصات",
  "مذكرات",
  "مراجعات",
  "ملفات",
  "ملفات",
];
const HomeMaterial = () => {
  return (
    <div className="">
      <div class="material__home__container ">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div>
              <div class="home__conatiner__header">
                <h1>{title[item - 1]}</h1>
              </div>
              <div class="material__home__conatiner__body">
                <h2>عدد {title[item - 1]} 10</h2>
              </div>
              <div class="material__home__conatiner__footer">
                <img src={images[item - 1]} alt="اسم المادة" />
                <div>
                  <a href="#">
                    معرفة المزيد <i class="fas fa-arrow-left"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMaterial;
