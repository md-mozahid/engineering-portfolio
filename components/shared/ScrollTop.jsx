"use client";

import { useScrollPosition } from "@/hooks/useScrollTo";

export default function ScrollTop() {
  const { scrollY } = useScrollPosition();
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={backToTop}
      aria-label="Scroll to top"
      className={`fixed z-10 p-2 md:p-3 bg-slate-800 text-white dark:bg-slate-200 dark:text-black rounded-full shadow-md md:bottom-8 bottom-6 md:right-28 right-3 animate-bounce ${
        scrollY > 250 ? "block" : "hidden"
      }`}
    >
      <svg
        className="md:size-7 size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  );
}
