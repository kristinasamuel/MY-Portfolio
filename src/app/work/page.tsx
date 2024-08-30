
{
  /*import navbar in our project */
}
import Navbar from "../components/navbar";
import Image from "next/image";
{
  /* create a work section for our website */
}
export default function Work() {
  return (
    <div className="bg-red-400 min-h-screen">
      <Navbar />
      {/* create a card to display our project and style it  add image,text,button ,textcolor,background color*/}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <div
          className="bg-white border-solid p-2 w-full max-w-xs rounded-lg 
                  overflow-hidden"
        >
          <div className="min-h-[200px]">
            <Image
              src="/images/counter.jpg"
              width={350}
              height={300}
              alt="myimage"
              className=" rounded-lg"
            />
          </div>
          <div className="p-b text-center">
            <h3 className="text-lg font-black">CLI-Based Countdown Timer</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              A CLI-based countdown timer is a simple command-line application
              that counts down from a specified time, providing real-time
              updates directly in the terminal. Users can set the duration in
              seconds,and the timer will decrement the time, often displaying
              the remaining time at regular intervals until it reaches zero.
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg text-white text-sm tracking-wider font-semibold border-2 bg-blue-500 hover:bg-indigo">
              Read
            </button>
          </div>
        </div>
        <div className="bg-white border-solid p-2 w-full max-w-xs rounded-lg font-sans overflow-hidden">
          <div className="min-h-[200px]">
            <Image
              src="/images/guessing.jpg"
              width={300}
              height={300}
              alt="myimage"
              className="w-full rounded-lg"
            />
          </div>
          <div className="p-b text-center">
            <h3 className="text-lg font-black">
              CLI-Based Number Guessing Game
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              A CLI-based number guessing game is a simple 
              text-based application that challenges the player to guess a
              randomly generated number within a specified range. The game
              provides feedback after each guess, indicating whether the guess
              was too high, too low, or correct. This loop continues until the
              player successfully guesses the number.
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg text-white text-sm tracking-wider font-semibold border-2 bg-blue-500 hover:bg-indigo">
              Read
            </button>
          </div>
        </div>
        <div className="bg-white border-solid p-2 w-full max-w-xs rounded-lg font-sans overflow-hidden">
          <div className="min-h-[200px]">
            <Image
              src="/images/atm.jpg"
              height={300}
              width={300}
              alt="myimage"
              className="w-full rounded-lg"
            />
          </div>
          <div className="p-b text-center">
            <h3 className="text-lg font-black">CLI-Based ATM Machine</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              In a console-based ATM, users interact with the machine through a
              series of text prompts and input commands. The application
              typically allows users to perform actions like checking their
              account balance, withdrawing cash, depositing money.
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg text-white text-sm tracking-wider font-semibold border-2 bg-blue-500 hover:bg-indigo">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
