"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import { Fade } from "react-reveal";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItems = [
    { id: "1", name: "Tekla", url: "/projects" },
    { id: "2", name: "AutoCAD", url: "/autocad" },
    { id: "3", name: "Rvit", url: "/revit" },
    { id: "4", name: "Project Visit", url: "/site" },
    { id: "5", name: "About", url: "/about" },
  ];

  return (
    <>
      <AiOutlineAlignCenter
        className="size-7"
        onClick={() => setIsOpen(true)}
        title="Open menu"
      />

      {isOpen && (
        <Fade left>
          <div className="backdrop-blur-md bg-slate-700 absolute right-[40%] w-[60%] top-0 min-h-screen z-50 ">
            <Image
              id="closeIcon"
              className="size-7 absolute top-4 right-5 cursor-pointer"
              src="/assets/svg/x.svg"
              alt="x mark"
              title="close"
              width={100}
              height={100}
              onClick={() => setIsOpen(false)}
            />
            <div className="px-6 py-10">
              <ul
                id="menu"
                className="flex flex-col justify-center items-start gap-5 md:flex-row md:items-center uppercase"
              >
                {MenuItems?.map((menuItem) => (
                  <li key={menuItem?.id}>
                    <a
                      href={menuItem.url}
                      title={menuItem.name}
                      className="relative text-base text-dark dark:text-white hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                    >
                      {menuItem?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
}
