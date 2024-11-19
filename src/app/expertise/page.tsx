"use client";
import { motion } from "framer-motion";
import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const technologies = [
  { name: "Java", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZGwa6BKb_TT1zoteRTog7FXQAbxixJ6F-w&s" },
  { name: "Spring Boot", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1xxfJwGtFaUCXPI2jtrWrqsCgug5qmhyZSZAOxSVfjwawCRCqOvxd3f8x2H3IWVYKzWlxO4CXqQfJvbKCQwjYuRTt9FtEeOhM_KI0HDaJVB9Qdle_Pi0GkLRWAhCVNz8auCwdpWZdcJ9W/w1200-h630-p-k-no-nu/Mastering-the-Spring-Framework-Course-Euler-Training-Center.png" },
  { name: "HTML", image: "https://cdn-icons-png.freepik.com/512/5968/5968333.png" },
  { name: "CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ390sPfhYJtccrcX6TgoSIDoWQivTFIMdyw&s" },
  { name: "JS", image: "https://static.vecteezy.com/system/resources/previews/012/194/385/non_2x/js-letter-logo-design-with-black-background-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg" },
  { name: "ReactJS", image: "https://www.scorchsoft.com/public/capabilities/head/react-native-logo-square.webp" },
  { name: "Bootstrap", image: "https://bootscore.me/wp-content/uploads/2023/06/bootscore-5.3.0.webp" },
  { name: "NextJS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkigIFbiHNEv3-CvcG68BArPvd7rmnwk-OA&s" },
  { name: "TypeScript", image: "https://w7.pngwing.com/pngs/1008/952/png-transparent-typescript-hd-logo-thumbnail.png" },
  { name: "Tailwind CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMRos9eQMYOTWKUZ9FpapzDwOwvuRfq9aF2DeryR172MWngfdLQmI3zva5nskZ5f8R_0&usqp=CAU" },
  { name: "Aceternity UI", image: "https://ui.aceternity.com/logo.png" },
  { name: "MySQL", image: "https://i.ytimg.com/vi/QLPDh20s4vk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCRlI2K8nrOdvGgpGis0nYXufWGrw" },
];

function Skills() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-5xl font-bold text-neutral-700 dark:text-white text-center mb-12"
      >
      </motion.h1>

      <div className="grid cursor-pointer mt-28 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8">
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-black bg-opacity-70 dark:bg-black dark:bg-opacity-80 rounded-lg shadow-inner shadow-sky-300 p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-110 hover:shadow-pink-300"
          >
            <img
              src={tech.image} 
              alt={tech.name}
              className="w-20 h-20 mb-4 object-contain"
            />
            <h2 className="text-xl font-bold text-white">{tech.name}</h2>
          </motion.div>
        ))}
      </div>
    </HeroHighlight>
  );
}

export default Skills;
