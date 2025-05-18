"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-neutral-900 text-white pt-16 pb-8 font-montsemi"
    >
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/main.png"
                alt="Matiks Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-xl font-bold">Matiks</span>
            </div>
            <p className="text-[#bababa] mb-6">
              Making math an accessible, exciting sport for everyone.
            </p>
            <div className="flex space-x-4">
              {[facebookIcon, twitterIcon, instagramIcon, youtubeIcon].map(
                (Icon, i) => (
                  <Link
                    href="#"
                    key={i}
                    className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300"
                  >
                    <Icon />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <p className="text-[#bababa] mb-4">
              Get the Matiks app on your device
            </p>
            <div className="bg-neutral-800 p-4 rounded-lg mb-4 inline-block w-24 h-24">
              <AppQRPlaceholder />
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://play.google.com/store/apps/details?id=com.matiks.app&hl=en_IN"
                className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v18m0 0l-8-8m8 8l8-8"
                  />
                </svg>
                Download for iOS
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.matiks.app&hl=en_IN"
                className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v18m0 0l-8-8m8 8l8-8"
                  />
                </svg>
                Download for Android
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#bababa] mb-4 md:mb-0">
              © {new Date().getFullYear()} Matiks. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-[#bababa] hover:text-[#a9f99e] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const AppQRPlaceholder = () => (
  <Image
    src="/qr.svg"
    alt="Matiks Logo"
    width={500}
    height={500}
    className="mr-2"
  />
);

const facebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const twitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
  </svg>
);

const instagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
  </svg>
);

const youtubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
  </svg>
);
