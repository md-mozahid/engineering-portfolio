"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function PopUpMessage({ setShowPopup }) {
  const popupRef = useRef(null);

  useGSAP(() => {
    gsap.from(popupRef.current, {
      x: -300,
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });
  });

  return (
    <div
      ref={popupRef}
      className="fixed text-white rounded-md z-10 w-64 h-72 p-3 md:left-20 top-80 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="">
        <IoMdClose
          onClick={() => setShowPopup(false)}
          title="close"
          className="size-6 cursor-pointer hover:text-red-500 absolute right-2 top-2"
        />
        <p className="mt-3">Do you want</p>
        <h2 className="text-lg font-semibold text-white">
          Steel Detailing Engineer?
        </h2>
        <div className="flex justify-between mt-2">
          <p>
            Please visit my website. Here is some of my latest projects. I have
            done many other projects which are not attached here.
          </p>
        </div>

        <Link
          href="https://www.linkedin.com/in/md-mozahid-3034b3109/"
          target="_blank"
        >
          <div
            title="linkedIn"
            className="bg-emerald-700 hover:bg-slate-600 transition-all px-5 py-1 mt-8 rounded-full text-center m-auto w-full flex items-center justify-evenly"
          >
            <button type="button">Message</button>
            <span>|</span>{" "}
            <FaLinkedinIn title="linkedIn" className="size-4 cursor-pointer" />
          </div>
        </Link>
      </div>
    </div>
  );
}
