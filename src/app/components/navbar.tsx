"use client";
import { useState } from "react";
import Link from "next/link";
{
  /* ~~~~~ import icons from react icon library ~~~~~ */
}
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutput } from "react-icons/md";
{
  /*~~~~ create navbar to use in our website ~~~~*/
}
export default function Navbar() {
  const [isNavbar, setIsNavbar] = useState(false);

  const toggleMenu = () => setIsNavbar(!isNavbar);
    output : "export";

  return (
    <>
      {/* ~~~~~ navbar  backgroundcolor ,textcolor,length ~~~~~~ */}
      <nav className="h-16 bg-cyan-900 text-white flex items-center justify-between px-4 md:px-10 font-4xl">
        {/* ~~~~~ logo  color,fontstyle,textcolor and  hover effect ~~~~~ */}
        <span className="text-red-500 font-bold hover:text-yellow-500 text-4xl">
          Kristina
        </span>

        {/* ~~~~~ button ~~~~~ */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isNavbar ? <FaTimes /> : <FaBars />}
        </button>
{/* when we click on button the li list will appear in block and in large screen the li display at the center of navbar */}
        <div
          className={`flex flex-col md:flex-row md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto
              bg-cyan-900 md:bg-transparent ${
                isNavbar ? "block" : "hidden"
              } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 text-2xl">
            <li className="hover:text-blue-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href={"/about"}>About </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href={"/work"}>Work</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* ~~~~~~  Signin button with specific background and text color ~~~~~~ */}
        <button
          type="button"
          className="bg-red-500 text-white hover:text-yellow-500 py-1 px-1 rounded hidden md:block"
        >
          Sign in
        </button>
      </nav>
    </>
  );
}
