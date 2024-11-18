'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
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
    </div>
  );
}

export default Navbar;
