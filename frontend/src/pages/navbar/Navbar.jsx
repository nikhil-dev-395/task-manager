import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-20 border-b-4 border-black ">
        <nav className="flex justify-between items-center h-full px-10  ">
          <h3 className="text-3xl font-mono  text-indigo-600">task manager</h3>

          <ul className="flex justify-between items-center w-1/4">
            <li className="hover:text-yellow-600">
              <Link href="/">Home</Link>
            </li>
            <li className="border px-4 bg-slate-950 text-white rounded-xl py-2">
              <Link href="/login">Login</Link>
            </li>
            <li className="border px-4 bg-slate-950 text-white rounded-xl py-2">
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
