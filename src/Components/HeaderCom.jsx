import React from "react";

const HeaderCom = () => {
  return (
    <div className="header">
      <header aria-label="Page Header">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <p class="text-sm font-semibold text-gray-500 text-right">
                ابرز الدورات
              </p>
              <h1 class=" text-3xl font-extrabold sm:text-5xl text-yellow-400">
                دورات مميزة
              </h1>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                class="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span class="text-sm font-medium">تصفح الكل الدورات </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1.5 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderCom;
