{
  /*~~~~ import navbar from components in our website ~~~~*/
}
import Navbar from "../components/navbar";
{
  /*~~~~~ import icons from react icons library ~~~~*/
}

import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
{
  /*~~~~~ create a contact page for our website ~~~~*/
}
export default function Contact() {
  return (
    <div className="bg-red-400 min-h-screen flex flex-col">
      <Navbar />
      {/*~~~~~ give style to h2 ,font,color,margin ~~~~*/}
      <h2 className="text-red-900 font-bold text-4xl text-center mt-10 ">
        Contact Me
      </h2>
      {/*~~~~ in this container i write the email address and home address also add icons ~~~~*/}
      <div className="flex flex-grow flex-wrap justify-center gap-8 mt-12">
        <div className="bg-red-500 border-solid p-4 max-w-xs rounded text-center ">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <p className="flex items-center gap-2">
              <MdEmail size={24} />
              Email: kristina97@gmail.com
            </p>
            <p className=" inline-flex item-center ml-2 ">
              <FaMapMarkerAlt size={24} className="ml-4" />
              Address: HouseNo 23,BlockA, SteelTown,Karachi.
            </p>
            <p className=" text-indigo-50 mt-6">Thank you for your visit</p>
          </div>
        </div>
      </div>
      {/*~~~~ appears icons with link ,give style ,size,margin ~~~~*/}
      <div className="flex justify-center items-center space-x-4 mt-10">
        <a
          href="https://www.linkedin.com/in/Kristina-samuel-21a6942ba"
          target="_blank"
          rel="noopener"
          className="text-5xl md:text-6xl text-black"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kristinasamuel"
          target="_blank"
          rel="noopener"
          className="text-5xl md:text-6xl text-black"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:kristina97@gmail.com"
          className="text-5xl md:text-6xl text-black"
        >
          <MdEmail />
        </a>
      </div>
      {/*~~~~ bottom of the page write copyright ~~~~*/}
      <div className="flex-grow" />
      <div className="bg-gray-300 w-full text-center py-1">
        <p className="text-black-500">
          © 2024 / kristina, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
