import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggle }) {
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          Job Hunter
        </Link>

        {/* div for humburger menu which is only for small screen size */}
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </div>

        {/* menu list with navigation link  */}
        <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
