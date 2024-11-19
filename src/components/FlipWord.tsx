"use client"

import { FlipWords } from "./ui/flip-words";

function FlipWord() {
  const words = ["Full Stack Visionary", "Tech Explorer", "Creative Technologist"];
  return (
    <div className="flex justify-center items-center">
      <div className="text-4xl mx-auto font-normal my-4 text-neutral-600 dark:text-neutral-400 text-center">
        Shaping The Digital World <br /> As A
        <FlipWords words={words} />
      </div>
    </div>
  );
}

export default FlipWord;
