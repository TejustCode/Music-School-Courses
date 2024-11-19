"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

function AboutSec() {
  return (
    <div className="flex flex-col items-center mt-40 text-center">
    <h2 className="text-4xl">Let's Collaborate !</h2>
    <div className="flex flex-col items-center text-center my-20">
    <p className="text-xl">Feel free to reach out for collaboration or opportunities!</p>
    <div className="flex justify-center space-x-14 mt-12">
      
      <LinkPreview url="https://github.com/TejustCode" className="font-bold">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-300 hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.371 0 0 5.373 0 12.007c0 5.303 3.438 9.8 8.207 11.387.599.111.818-.261.818-.58 0-.287-.01-1.048-.016-2.056-3.338.727-4.042-1.623-4.042-1.623-.545-1.382-1.333-1.75-1.333-1.75-1.09-.746.083-.731.083-.731 1.205.085 1.839 1.239 1.839 1.239 1.07 1.83 2.809 1.301 3.495.995.108-.774.418-1.301.76-1.6-2.666-.305-5.466-1.335-5.466-5.931 0-1.31.465-2.381 1.233-3.221-.123-.303-.535-1.524.116-3.176 0 0 1.006-.322 3.3 1.23.956-.268 1.983-.402 3.003-.407 1.019.005 2.047.139 3.004.407 2.292-1.553 3.297-1.23 3.297-1.23.653 1.652.241 2.873.118 3.176.77.84 1.232 1.911 1.232 3.221 0 4.609-2.803 5.624-5.475 5.921.429.37.813 1.1.813 2.217 0 1.604-.014 2.896-.014 3.286 0 .322.217.694.823.577C20.565 21.804 24 17.307 24 12.007 24 5.373 18.627 0 12 0z" />
        </svg>
        </LinkPreview>{" "}

        <LinkPreview url="https://www.linkedin.com/in/tejaspatil08/" className="font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-500 hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.23 0H1.77C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.585V9h3.536v11.452zM5.351 7.545a2.064 2.064 0 01-2.051-2.068c0-1.143.92-2.067 2.06-2.067 1.14 0 2.052.924 2.052 2.067 0 1.148-.912 2.068-2.061 2.068zM20.452 20.452h-3.538v-5.604c0-1.337-.029-3.059-1.862-3.059-1.864 0-2.149 1.455-2.149 2.958v5.705h-3.535V9h3.396v1.561h.05c.471-.891 1.62-1.828 3.334-1.828 3.565 0 4.221 2.347 4.221 5.396v6.323z" />
        </svg>
        </LinkPreview>{" "}

      <LinkPreview url="mailto:patiltejas1663@gmail.com?subject=Hi%20Tejas!&body=I%20would%20like%20to%20collaborate%20on%20some%20projects." className="font-bold">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red-500 hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12.713l11.985-8.713H.015L12 12.713zm-12 7.287V4.707l8.222 5.967-8.222 6.473zm13.778-6.473L24 4.707v15.293L13.778 13.527z" />
          </svg>
        </LinkPreview>{" "}
    </div>
    </div>
    <div>
        <a
          href="/doc/cv.pdf" // Replace with the correct path to your CV file
          download
          className="ml-10 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Download CV
        </a>
      </div>
  </div>

  );
}

export default AboutSec;
