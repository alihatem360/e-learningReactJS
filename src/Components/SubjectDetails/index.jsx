import React from "react";
import image1 from "../../assets/2 (3).png";
import image2 from "../../assets/2 (4).png";
import image3 from "../../assets/2 (5).png";
import image4 from "../../assets/2 (6).png";
import image5 from "../../assets/image (1).png";
import image6 from "../../assets/image (2).png";

import "./style.css";

const images = [image1, image2, image3, image4, image5, image6];

const SubjectDetails = () => {
  return (
    <div className="subject-details">
      <div class="home__container">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div>
              <div class="home__conatiner__header__img" key={item}>
                <img src={images[item - 1]} alt="اسم المادة" />
              </div>
              <div class="home__conatiner__header">
                <h1>المحاضرة الأولى</h1>
              </div>
              <div class="home__conatiner__body">
                <p>
                  كتب الكترونية هي كتب مكتوبة بالكمبيوتر وتم تصميمها ليتم
                  قراءتها على الكمبيوتر أو على جهاز الكتروني محمول مثل جهاز
                  الكتاب الإلكتروني أو الهاتف الجوال أو الكمبيوتر اللوحي.
                </p>
              </div>
              <div class="home__conatiner__footer">
                <a href="#">
                  {" "}
                  الرابط
                  <i class="fas fa-link"></i>
                </a>
                <a href="#">
                  {" "}
                  المرافق
                  <i class="fas fa-link"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectDetails;
