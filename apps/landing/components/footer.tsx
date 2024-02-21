import { Logo, P, Strong } from "@nexus/ui";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="flex flex-col justify-between sm:flex-row gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo className="w-8 h-8 text-primary" />
            </div>
            <div className="text-sm text-gray-600">
              <a
                href="#0"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                href="#0"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Plan du site</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Notre équipe
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className=" flex flex-col gap-3">
            <h6 className="text-gray-800 font-medium">Contact</h6>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:contact@immovia.ca"
                className="text-primary font-medium hover:underline"
              >
                contact@immovia.ca
              </a>
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://linkedin.com/company/immoviaca"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Immovia.ca. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
