"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("Home");

  const handleSetActive = (item: string) => {
    setActive(item);
  };

  return (
    <div>
      <div className={cn("fixed top-10 inset-x-0 mx-auto z-50", className)}>
        <nav className="relative bg-black/30 backdrop-blur-md  flex justify-center space-x-8 px-6 py-4 max-w-xl mx-auto rounded-3xl">
          {["Home", "Projects", "Expertise"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
              className={cn(
                "relative px-2 text-lg after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[3px] after:w-full after:scale-x-0 after:bg-white dark:after:bg-sky-500 after:transition-transform after:duration-300 hover:after:scale-x-100",
                active === item ? "after:scale-x-100" : ""
              )}
              onClick={() => handleSetActive(item)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
