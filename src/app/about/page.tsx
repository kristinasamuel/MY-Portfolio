{
  /* import navbar from components / navbar */
}
import Navbar from "../components/navbar";
import Image from "next/image";
{
  /* create  about page */
}
export default function About() {
  return (
    <div className="bg-red-400  min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg ">
        <div className="flex flex-col md:flex-row items-center">
          {/* image styling ,size,rounded */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/images/code.jpg"
              alt="Profile"
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-500"
            />
          </div>
          {/* content styleing ,text size color font*/}
          <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">Kristina</h1>
            <p className="text-gray-700 text-lg mb-4">
              Hi, I'm Kristina! A passionate frontend developer who loves to
              create beautiful and functional web applications. I have a knack
              for design and a love for code. I believe in continuous learning
              and growing with every project I undertake.
            </p>
            <p className="text-gray-700 text-lg">
              When I'm not coding, I'm exploring the latest technologies and
              trends to keep my skills sharp and my projects innovative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
