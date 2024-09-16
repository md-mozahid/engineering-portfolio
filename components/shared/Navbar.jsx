"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const isMobile = useMediaQuery();
  const ref = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y: -100,
      duration: 0.5,
      delay: 1.5,
    });
  });

  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -100,
      duration: 0.5,
      delay: 0.5,
    });
  });

  return (
    <>
      <nav className="w-full fixed z-50 py-5 top-0 shadow-sm bg-inherit backdrop-blur-sm h-[75px] ">
        <div className="container">
          <div className="flex items-center justify-between gap-3">
            <Link href="/">
              <h3
                ref={logoRef}
                title="home"
                className="text-xl md:text-2xl font-semibold  italic"
              >
                @
                <span className="dark:text-pink-500 text-rose-500">
                  MOZAHID
                </span>
              </h3>
            </Link>
            {isMobile ? <MobileMenu /> : <Menu />}
            <div ref={ref} className="flex-center gap-5">
              <Link
                href="https://www.linkedin.com/in/md-mozahid-3034b3109/"
                target="_blank"
                title="linkedIn"
              >
                <span className="size-8 text-center flex items-center justify-center rounded-full font-semibold cursor-pointer hover:text-rose-500 transition-all ">
                  <FaLinkedinIn />
                </span>
              </Link>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
