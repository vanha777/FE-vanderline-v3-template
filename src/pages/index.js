import Image from "next/image";
import { Inter } from "next/font/google";
import Intro from "@/components/intro";
import NavBar from "@/components/navBar";
import WriteSection from "@/components/write";
import ReadSection from "@/components/read";
import EraseSection from "@/components/erase";
import React, { useState } from 'react';
const inter = Inter({ subsets: ["latin"] });

export default function NfcSettings() {
  const [menu, setMenu] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    setMenu(0);
  };
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      {menu === 0 &&
        <div className="rounded-box btm-nav top-0 z-10 fixed flex justify-around">
          <button
            className={`text-accent ${activeButton === 1 ? 'active' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Read
          </button>
          <button
            className={` text-accent ${activeButton === 2 ? 'active' : ''}`}
            onClick={() => handleButtonClick(2)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Write
          </button>
          <button
            className={`text-accent ${activeButton === 3 ? 'active' : ''}`}
            onClick={() => handleButtonClick(3)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Earase
          </button>
        </div>
      }

      {menu > 0 &&
        <div className="rounded-box btm-nav top-0 z-10 fixed flex justify-around">
          <button
            className={`text-accent ${activeButton === 1 ? 'active' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back
          </button>
        </div>
      }

      <div className="w-full h-full flex flex-1 pt-20">
        {activeButton === 1 && <ReadSection />}
        {activeButton === 2 &&
          <WriteSection menu={menu} setMenu={setMenu}/>
        }
        {activeButton === 3 && <EraseSection />}
        {activeButton === null && <Intro />}
      </div>

    </main>
  );
}
