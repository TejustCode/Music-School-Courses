"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function Typewriter() {
  const words = [
    {
      text: "Designed",
      className:"text-sm"
    },
    {
      text: "by ~",
      className:"text-sm"
    },
    {
      text: "Tejas ..",
      className: "text-blue-500 dark:text-blue-500 text-sm",
    },
  ];
  return (
    <div className="flex justify-end">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}