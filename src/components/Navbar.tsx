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
<<<<<<< HEAD
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
=======
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <Link href={"#"}>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col my-0 space-y-2 text-sm">
            <HoveredLink href="/courses?filter=All Courses">All Courses</HoveredLink>
            <HoveredLink href="/courses?filter=Basic Music Theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses?filter=Advanced Composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses?filter=Song Writing">Song Writing</HoveredLink>
            <HoveredLink href="/courses?filter=Music Production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
      </Menu>
>>>>>>> d4b951fac8459f4ff6160c8eaad4f00a59efe62d
    </div>
  );
}

export default Navbar;
