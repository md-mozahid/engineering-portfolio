"use client";

import { getSiteVisitPicture } from "@/database/dbSite";
import { Fade } from "react-reveal";
import Image from "next/image";

export default function SiteImages() {
  const siteImages = getSiteVisitPicture();
  console.log(siteImages);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="grid md:grid-cols-5 items-center justify-center gap-5">
          {siteImages?.map((img, i) => (
            <Fade
              key={i}
              left={i % 2 === 0}
              up={i % 3 === 0}
              right={i % 5 === 0}
            >
              <Image
                className="rounded-xl w-full object-cover object-center mb-6"
                src={img}
                alt="image"
                width={500}
                height={500}
              />
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}
