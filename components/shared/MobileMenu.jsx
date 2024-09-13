"use client";

import useScrollTo from "@/hooks/useScrollTo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu({ onClick = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  // }, [isOpen])

  const { scrollToEl } = useScrollTo();

  const handleOnClick = (e) => {
    scrollToEl(e);
    window.setTimeout(() => tl.reverse(), 350);
  };

  // gsap
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.to("#mobileMenu", {
      right: 0,
      duration: 0.5,
    });

    tl.from("#mobileMenu ul li", {
      x: 150,
      duration: 0.3,
      stagger: 0.1,
      opacity: 0,
    });

    tl.from("#closeIcon", {
      opacity: 0,
    });

    tl.pause();
  });

  const open = () => {
    tl.play();
  };
  const close = () => {
    tl.reverse();
  };

  const MenuItems = [
    { id: "1", name: "Tekla Structure", url: "/projects" },
    { id: "2", name: "AutoCAD", url: "/autocad" },
    { id: "3", name: "Rvit (BIM & MEP)", url: "/revit" },
    { id: "4", name: "Site Visit", url: "/site" },
  ];

  return (
    <>
      <Image
        className="size-7 align-icon"
        src="/assets/svg/align-center.svg"
        alt="align"
        width={100}
        height={100}
        // onClick={() => setIsOpen(true)}
        onClick={open}
        title="Open menu"
      />

      {tl.play() && (
        <div
          id="mobileMenu"
          ref={ref}
          className="backdrop-blur-md bg-white/30 absolute -right-[60%] w-[60%] top-0 min-h-screen z-50"
        >
          <Image
            id="closeIcon"
            className="size-7 absolute top-4 right-5 cursor-pointer"
            src="/assets/svg/x.svg"
            alt="x mark"
            title="close"
            width={100}
            height={100}
            // onClick={() => setIsOpen(false)}
            onClick={close}
          />
          <div className="px-6 py-10">
            {/* <Menu onClick={() => setIsOpen(false)} /> */}
            <ul
              id="menu"
              className="flex flex-col justify-center items-start gap-5 md:flex-row md:items-center uppercase"
            >
              {MenuItems?.map((menuItem) => (
                <li key={menuItem?.id}>
                  <a
                    href={menuItem.url}
                    title={menuItem.name}
                    onClick={handleOnClick}
                    className="relative z-30 text-base font-semibold text-dark dark:text-white hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                  >
                    {menuItem?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
