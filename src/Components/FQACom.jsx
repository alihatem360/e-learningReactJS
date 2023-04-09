import React from "react";
import image1 from "../assets/FQA.svg";

const faqData = [
  {
    id: 1,
    question: "كيف يمكنني تسجيل الدخول إلى حسابي؟",
    answer:
      "يمكنك النقر على زر 'تسجيل الدخول' في الركن العلوي الأيمن من الصفحة الرئيسية وإدخال اسم المستخدم وكلمة المرور الخاصة بك.",
  },
  {
    id: 2,
    question: "كيف يمكنني الوصول إلى دورة معينة؟",
    answer:
      "يمكنك العثور على الدورة التي تريدها في القائمة الرئيسية للموقع والنقر على اسم الدورة للوصول إليها.",
  },
  {
    id: 3,
    question: "كيف يمكنني التحقق من تقدمي في دورة؟",
    answer:
      "يمكنك التحقق من تقدمك في الدورة عن طريق النقر على الزر 'تقدمي' في صفحة الدورة، وستظهر لك الدروس التي انتهيت منها باللون الأخضر.",
  },
  // Add more objects as needed
];

const FQAComQuiion = () => {
  return (
    <div class="flow-root">
      <div class=" divide-y divide-gray-100">
        {faqData.map((faq) => (
          <details
            class="group py-2 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary class="flex items-center justify-between cursor-pointer">
              <h2 class="text-lg font-medium text-gray-900">{faq.question}</h2>

              <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700 w-96">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

const FQACom = () => {
  return (
    <div
      className="flex justify-around
     items-center w-3/4 mx-auto my-10"
    >
      <div>
        <img src={image1} alt="اسم المادة" className="w-96 h-96" />
      </div>
      <div>
        <span className="text text-sm text-gray-500">نحن هنا لمساعدتك</span>
        <h3 className="text-3xl font-bold text-yellow-400 py-5">
          الأسئلةالاكثر شيوعا
        </h3>
        <p className="text text-sm text-gray-500 w-96 py-2">
          هل لديك أي أسئلة؟ يمكنك البحث عن الإجابة من خلال القائمة أدناه
        </p>
        <FQAComQuiion />
      </div>
    </div>
  );
};

export default FQACom;
