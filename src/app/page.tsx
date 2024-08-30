"use client";
{
  /*~~~~ import navbar from components folder ~~~~~*/
}
import Navbar from "./components/navbar";
import Image from "next/image";
{
  /* import type effect to give style to h1*/
}
import Typewriter from "typewriter-effect";
{
  /* ~~~~~~ create home page ~~~~~ */
}
export default function Home() {
  return (
    <div>
      <Navbar />
      {/*~~~~~~ give background color to screen ~~~~~~*/}
      <div className="bg-red-400 ">
        <div>
          {/*~~~~~ display text in center , padding,margin,flex and color ~~~~~*/}
          <div className="flex flex-col md:flex-row justify-center items-center text-center min-h-screen 
                        md:text-left px-20">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8 px- 7 ">
              <h1 className="text-3xl md:text-5xl mb-4">Hi I'm kristina,</h1>
              {/* ~~~~~ use type writer to give style to h1,give color,font and margin ~~~~~*/}

              <h1 className=" text-yellow-400 text-3xl md:text-5xl mb-4">
                <Typewriter
                  options={{
                    strings: [
                      "Front-end Developer,",
                      "Web Designer,",
                      " Creative Coder,",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              {/* paragraph ,color,size*/}
              <p className="text-white text-lg md:text-2xl">
                I am a Front-End Developer with a passion for creating
                intuitive, dynamic user interfaces.
              </p>
              {/*button styling color,hover effect*/}
              <a href="/contact">
                <button
                  type="button"
                  className="bg-red-600 text-white text-bold hover:text-yellow-500  p-3 mt-4  rounded-full "
                >
                  Hire me
                </button>
              </a>
              <a href="/work">
                <button
                  type="button"
                  className="bg-red-600 text-white text-bold hover:text-yellow-500  p-3 mt-4  ml-2 rounded-full "
                >
                  My Work
                </button>
              </a>
            </div>
            {/* image styling ,height,width  */}
            <div className="md:w-1/2 flex justify-center ">
              <Image
                src="/images/code.jpg"
                width={48}
                height={48}
                alt="Profile"
                className=" md:w-64 md:h-64 object-cover rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
