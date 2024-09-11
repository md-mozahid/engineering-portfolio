"use client";


import useScrollTo from "@/hooks/useScrollTo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Menu({ onClick = () => {} }) {
  const { scrollToEl } = useScrollTo();
  

  const handleOnClick = (e) => {
    scrollToEl(e);
    window.setTimeout(() => onClick(), 350);
  };

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
    {id: "1", name: "Home", url: "#home"},
    {id: "2", name: "About", url: "#about"},
    {id: "3", name: "Skills", url: "#skills"},
    {id: "4", name: "Portfolio", url: "#portfolio"},
]

  return (

      <nav className="" role="menu">
        <ul
          ref={menuRef}
          id="menuRef"
          className="flex flex-col justify-center items-start gap-5 md:flex-row md:items-center uppercase"
        >
          {MenuItems?.map((menuItem) => (
            <li key={menuItem?.id}>
              <a
                href={menuItem.url}
                title={menuItem.name}
                onClick={handleOnClick}
                className="relative text-base text-dark dark:text-white hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
              >
                {menuItem?.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  )
}
