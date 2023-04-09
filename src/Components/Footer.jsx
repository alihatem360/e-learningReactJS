import React from "react";
import logo from "../assets/logo.svg";

const socialIcons = [
  {
    id: 1,
    icon: "fab fa-facebook-f",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
  },

  {
    id: 3,
    icon: "fab fa-instagram",
  },
  {
    id: 4,
    icon: "fab fa-linkedin-in",
  },
];

const navDataServices = [
  "الرئيسية",
  "المواد",
  "الملفات",
  "المحاضرات",
  "المراجع",
  "المنتدى",
  "المدونة",
  "الموظفين",
];

const Footer = () => {
  return (
    <footer aria-label="Site Footer" class="bg-gray-50">
      <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="text-teal-600">
              <img src={logo} alt="logo" className="w-32 h-auto rounded-full" />
            </div>

            <p class="max-w-xs mt-4 text-gray-500">
              محتوى موقعنا يتضمن مواد تعليمية ومراجع وملفات ومحاضرات ومنتدى
              ومدونة وموظفين
            </p>

            <ul class="flex gap-6 mt-8">
              {socialIcons.map((item) => {
                return (
                  <li>
                    <a
                      href="/"
                      rel="noreferrer"
                      target="_blank"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      <i class={item.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p class="font-medium text-gray-900">Services</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  {[1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                      <li>
                        <a
                          href="#"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {navDataServices[item]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-medium text-gray-900">Company</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  {[1, 2, 3, 4, 5, 6].map((item) => {
                    return (
                      <li>
                        <a
                          href="#"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          {navDataServices[item]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-medium text-gray-900">Helpful Links</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-medium text-gray-900">Legal</p>

              <nav aria-label="Footer Navigation - Legal" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-gray-700 transition hover:opacity-75"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p class="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
