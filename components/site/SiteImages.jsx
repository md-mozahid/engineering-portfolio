"use client";

import { getSiteVisitPicture } from "@/database/dbSite";
import { Fade } from "react-reveal";
import Image from "next/image";
import SiteModal from "./SiteModal";
import { useState } from "react";

export default function SiteImages() {
  const siteImages = getSiteVisitPicture();

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const [thumbnail, setThumbnail] = useState(null);
  const handleImage = (img) => {
    setThumbnail(img);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-3 md:gap-5" onClick={open}>
          {siteImages?.map((img, i) => (
            <Fade
              key={i}
              left={i % 2 === 0}
              up={i % 3 === 0}
              right={i % 5 === 0}
            >
              <Image   
                onClick={() => handleImage(img)}
                className="rounded-md w-full object-cover object-center cursor-pointer"
                title="preview"
                src={img}
                alt="image"
                width={500}
                height={500}
              />
            </Fade>
          ))}
        </div>
      </div>
      <SiteModal open={open} isOpen={isOpen} close={close} thumbnail={thumbnail} />
    </>
  );
}
