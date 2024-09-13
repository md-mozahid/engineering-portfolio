"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

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
      <nav className="w-full z-10 py-5 shadow-sm bg-inherit backdrop-blur-sm h-[75px] ">
        <div className="container">
          <div className="flex items-center justify-between gap-3">
            <Link href="/">
              <h3
                ref={logoRef}
                title="home"
                className="text-xl md:text-2xl font-semibold text-dark dark:text-white"
              >
                @Mozahid
              </h3>
            </Link>
            {isMobile ? <MobileMenu /> : <Menu />}
            <div ref={ref} className="flex-center gap-5">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
