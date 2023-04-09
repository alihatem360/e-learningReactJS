import React from "react";
import imaeg1 from "../../assets/2 (3).png";
import imaeg2 from "../../assets/2 (4).png";
import imaeg3 from "../../assets/2 (5).png";
import imaeg4 from "../../assets/2 (6).png";
import imaeg5 from "../../assets/image (1).png";
import imaeg6 from "../../assets/image (2).png";
import "./style.css";

const images = [imaeg1, imaeg2, imaeg3, imaeg4, imaeg5, imaeg6];
const titles = [
  "اللغة الانجليزية",
  "الرياضيات",
  "الفيزياء",
  "الكيمياء",
  "التاريخ",
  "الجغرافيا",
];
const AllSubjectsContainer = () => {
  return (
    <div>
      <div class="all_subjects_container">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div class="all_subjects_container_item">
              <div class="all_subjects_container_item_img">
                <img src={images[item - 1]} alt="اسم المادة" />
              </div>
              <div class="all_subjects_container_item_text">
                <h4>{titles[item - 1]}</h4>
                <div class="doc">
                  <h5>الاستاذ : </h5>
                  <p>
                    <i class="fa-solid fa-graduation-cap"></i> عبدالله العمري
                  </p>
                </div>
                <div>
                  <a href="/subjectDetails" class="btn btn-primary">
                    محتوى المادة <i class="fas fa-arrow-left"></i>
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

export default AllSubjectsContainer;
