import React from "react";
import logo from "../assets/logo.svg";
const navDate = [
  "الصفحة الرئيسية",
  "من نحن",
  "الدورات",
  "الاسئلة الشائعة",
  "تواصل معنا",
];
const Navigation = () => {
  return (
    <div>
      <header aria-label="Site Header" class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="md:flex md:items-center md:gap-12">
              <a class="block text-teal-600" href="/">
                <img src={logo} alt="logo" className="w-20 h-auto" />
              </a>
            </div>

            <div class="hidden md:block">
              <nav aria-label="Site Nav">
                <ul class="flex items-center gap-6 text-sm">
                  {navDate.map((item) => {
                    return (
                      <li>
                        <a
                          class="transition hover:text-gray-500/75 text-gray-500 font-medium text-lg"
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <div class="hidden sm:flex">
                  <a
                    class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:text-gray-600/75"
                    href="/"
                  >
                    تسجيل الدخول
                  </a>
                </div>
              </div>

              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
