"use client";


import useScrollTo from "@/hooks/useScrollTo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
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
    {id: "1", name: "Tekla Structure", url: "/"},
    {id: "2", name: "AutoCAD", url: "autocad"},
    {id: "3", name: "Rvit (BIM & MEP)", url: "revit"},
    {id: "4", name: "Site Visit", url: "site"},
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
              <Link
                href={menuItem.url}
                title={menuItem.name}
                className="relative text-base font-semibold text-dark dark:text-white hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
              >
                {menuItem?.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  )
}
