"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

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
      className="fixed text-white rounded-md z-10 w-60 h-48 p-3 left-10 top-80 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="">
        <IoMdClose
          onClick={() => setShowPopup(false)}
          title="close"
          className="size-6 cursor-pointer hover:text-red-500 absolute right-2 top-2"
        />
        <p className="mt-3">Do you want</p>
        <h2 className="text-lg">Frontend Developer?</h2>
        <div className="flex justify-between mt-2">
          <span>Hire me</span>
          <span>$Negotiation</span>
        </div>

        <div className="bg-emerald-700 px-5 py-1 mt-8 rounded-full text-center m-auto w-full flex items-center justify-evenly">
          <Link href="#contact">
            <button type="button" title="message">
              Message
            </button>
          </Link>
          <span>|</span>{" "}
          <FaWhatsapp title="whatsapp" className="size-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
