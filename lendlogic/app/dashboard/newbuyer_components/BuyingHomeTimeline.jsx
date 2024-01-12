"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewBuyerTimeline from "./NewBuyerTimeline.jsx";

export default function BuyingHomeTimeline({ steps }) {
  //state to handle whether tool is image is displayed
  const [toolVisible, setToolVisible] = useState(false);
  //write click hangler for toolVisible button
  function clickHandler() {
    setToolVisible(!toolVisible);
  }
  const stepsArr = steps.steps;
  // console.log("debug buyinghometimeline", stepsArr);
  // const firstStep = steps.steps[0];
  // console.log("print first step", firstStep);

  const buttonText = toolVisible ? "Hide" : "Find Out More";
  return (
    <>
      <div className="mt-6 mx-4 bg-off-white rounded-3xl p-3 shadow-card text-center text-2xl">
        <h2 className="font-normal py-7 text-3xl text-purple-accent">
          New Buyer Timeline
        </h2>
        <p className="py-2 font-normal text-xl">
        Buying a home can be a very stressful experience, and unfortunately, it has not become any easier with time. 
        However, having a good understanding of the general process can help make the journey a bit easier.
        </p>
        {toolVisible ? (
          <NewBuyerTimeline steps={stepsArr} />
        ) : (
          <div className="flex justify-center">
            <Image
              src="/clap_img.png"
              alt="Two people hi-fiving"
              width={300}
              height={200}
            />
          </div>
        )}
        <button
          className="w-48 h-16 bg-purple-accent  m-5 rounded-full text-xl text-off-white font-semibold shadow-button cursor-pointer"
          type="submit"
          onClick={clickHandler}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
