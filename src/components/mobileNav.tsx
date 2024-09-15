"use client";

import { usePathname } from "next/navigation";

export default function MobileNav() {
  const path = usePathname();

  return (
    <div className="bg-onyx h-16 px-4 w-dvw border-t-white border-t flex justify-between items-center">
      <div
        className={`aspect-square w-10 border-2 rounded-md flex justify-center items-center cursor-pointer ${
          path === "/news" ? "border-black bg-white" : "border-white bg-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill={path === "/news" ? "black" : "white"}
            d="M3 1H1v18h18V1zm14 2v14H3V3zm4 18H5v2h18V5h-2zM15 5H5v2h10zM5 9h10v2H5zm7 4H5v2h7z"
          />
        </svg>
      </div>
      <div
        className={`aspect-square w-10 border-2 rounded-md flex justify-center items-center cursor-pointer ${
          path === "/search" ? "border-black bg-white" : "border-white bg-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill={path === "/search" ? "black" : "white"}
            d="M6 2h8v2H6zM4 6V4h2v2zm0 8H2V6h2zm2 2H4v-2h2zm8 0v2H6v-2zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm0-8h2v8h-2zm0 0V4h-2v2z"
          />
        </svg>
      </div>
      <div
        className={`aspect-square w-10 border-2 rounded-md flex justify-center items-center cursor-pointer ${
          path === "/home" ? "border-black bg-white" : "border-white bg-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill={path === "/home" ? "black" : "white"}
            d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4z"
          />
        </svg>
      </div>
      <div
        className={`aspect-square w-10 border-2 rounded-md flex justify-center items-center cursor-pointer ${
          path === "/reward" ? "border-black bg-white" : "border-white bg-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill={path === "/reward" ? "black" : "white"}
            d="M6 2h12v2H6zM4 6V4h2v2zm0 12V6H2v12zm2 2v-2H4v2zm12 0v2H6v-2zm2-2v2h-2v-2zm0-12h2v12h-2zm0 0V4h-2v2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3z"
          />
        </svg>
      </div>
      <div
        className={`aspect-square w-10 border-2 rounded-md flex justify-center items-center cursor-pointer ${
          path === "/profile" ? "border-black bg-white" : "border-white bg-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill={path === "/profile" ? "black" : "white"}
            d="M10 2h4v4h-4zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3z"
          />
        </svg>
      </div>
    </div>
  );
}
