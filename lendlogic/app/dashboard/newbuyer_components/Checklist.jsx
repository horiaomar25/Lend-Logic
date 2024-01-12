"use client";
import Image from "next/image";
import Link from "next/link";
import ExpandChecklist from "./ExpandChecklist";
import { useState } from "react";

export default function Checklist() {
  //state to handle whether tool is image is displayed
  const [toolVisible, setToolVisible] = useState(false);
  //write click hangler for toolVisible button
  function clickHandler() {
    setToolVisible(!toolVisible);
  }

  const buttonText = toolVisible ? "Hide" : "Find Out More";

  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="col-span-2 font-normal py-7 text-3xl text-purple-accent">
          New Buyer Checklist
        </h2>
        <p className="col-span-2 py-2 mb-1 font-normal text-xl">
          Everything you need to know when it comes to buying a property.
        </p>
        {toolVisible ? (
          <ExpandChecklist />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <a
              target="_blank"
              className="bg-off-white text-lg font-normal flex items-center justify-center h-16 p-3 border-2 border-purple-accent rounded-full shadow-button cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
              href="https://www.gov.uk/government/publications/how-to-buy-a-home/how-to-buy"
            >
              How to Buy Guide
            </a>
            <a
              target="_blank"
              className="flex justify-center items-center h-16 bg-off-white text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
              href="https://www.gov.uk/first-homes-scheme"
            >
              First-time buyer schemes
            </a>
            <a
              target="_blank"
              className="bg-off-white flex items-center justify-center h-16 text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
              href="https://www.gov.uk/stamp-duty-land-tax"
            >
              Stamp Duty
            </a>
            <a
              target="_blank"
              className="bg-off-white flex items-center justify-center h-16 text-lg font-normal p-3 border-2 border-purple-accent rounded-full shadow-button cursor-pointer hover:bg-purple-accent hover:text-off-white hover:font-semibold"
              href="https://www.gov.uk/right-to-buy-buying-your-council-home"
            >
              Right to Buy
            </a>
          </div>
        )}

        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button"
          type="submit"
          onClick={clickHandler}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
