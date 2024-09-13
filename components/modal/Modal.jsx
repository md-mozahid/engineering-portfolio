"use client";

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
      className="md:w-[70%] max-w-sm mx-auto shadow-teal-500 shadow-md flex flex-col p-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-400"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer ">
        <MdClose title="close" className="size-8 bg-red-500 p-1 rounded-full text-white hover:bg-gray-500" />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
}
