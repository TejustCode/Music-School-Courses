"use client";

import TypeWriter from "./TypeWriter";
import FlipWord from "./FlipWord";
import Image from "next/image";
import MyImage from "./../assets/402978-Photoroom.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

const ContactLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};


function Menubar() {
  return (
    <BackgroundBeamsWithCollision className="w-screen h-full">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <Image className="mt-24 h-56 w-96" src={MyImage} alt="" />
        <TypeWriter />
        <FlipWord />
        <Link href={"/contact-me"}>
        <HoverBorderGradient
        containerClassName="rounded-full mt-8"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <ContactLogo />
        <span>Connect Me</span>
      </HoverBorderGradient>
        </Link>
      </div>
     
    </BackgroundBeamsWithCollision>
  );
}

export default Menubar;
