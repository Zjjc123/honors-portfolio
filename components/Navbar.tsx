import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  /*
  return (
    <nav className="flex items-center flex-wrap bg-neutral-800 p-3">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <img src="/favicon.jpg" alt="Logo" width={30} height={30} />
          <span className="text-xl text-white font-bold uppercase tracking-wide pl-3">
            Jason Zhang
          </span>
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      
    </nav>
  );
  */
  return (
    <div className="mx-auto border-2">
      <div className="w-full py-2 shadow-2xl bg-gray-100 subpixel-antialiased rounded mx-auto">
        <div
          className="flex items-center rounded-t text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 h-full font-bold items-center justify-center hover:bg-gray-600 hover:text-white ">
                  Home
                </a>
              </Link>
              <Link href="/first">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Freshman
                </a>
              </Link>
              <Link href="/second">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Sophomore
                </a>
              </Link>
              <Link href="/third">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Junior
                </a>
              </Link>
              <Link href="/fourth">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                  Senior
                </a>
              </Link>
            </div>
          </div>
          <button
            className="inline-flex p-3 hover:bg-gray-600 lg:hidden text-white ml-auto hover:text-white outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
