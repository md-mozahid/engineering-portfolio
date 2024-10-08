"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function Menu() {
  const menuRef = useRef(null);
  useGSAP(() => {
    gsap.from("#menuRef li", {
      y: -100,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.3,
    });
  });

  const MenuItems = [
    { id: "1", name: "Tekla", url: "/projects" },
    { id: "2", name: "AutoCAD", url: "/autocad" },
    { id: "3", name: "Rvit", url: "/revit" },
    { id: "4", name: "Project Visit", url: "/site" },
    { id: "5", name: "About", url: "/about" },
  ];

  return (
    <nav className="" role="menu">
      <ul
        ref={menuRef}
        id="menuRef"
        className="flex flex-col justify-center items-start gap-5 md:flex-row md:items-center uppercase"
      >
        {MenuItems?.map((menuItem) => (
          <li key={menuItem?.id}>
            <Link
              href={menuItem.url}
              title={menuItem.name}
              className="relative text-base font-semibold text-dark dark:text-white hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-rose-300 after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
            >
              {menuItem?.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
