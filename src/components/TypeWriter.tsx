"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import React from "react";

const words = [
  { text: "Hi, " },
  { text: "It's" },
  { text: "Tejas ...", className: "text-blue-500 dark:text-blue-500" },
];

function TypeWriter() {
  return (
    <div> 
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default TypeWriter;
