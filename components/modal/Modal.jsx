"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

export default function Modal({ children }) {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="w-[80%] mx-auto shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer ">
        <MdClose className="size-10 bg-gray-500 p-1 rounded-full text-white hover:bg-red-500" />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
}
