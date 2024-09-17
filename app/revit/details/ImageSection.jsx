"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSection({ project }) {
  const [thumbnail, setThumbnail] = useState(null);
  const handleImage = (img) => {
    setThumbnail(img);
  };
  return (
    <div>
      <Image
        src={`${thumbnail ? thumbnail : project?.thumbnail}`}
        alt={project?.title}
        className="w-full rounded-md md:rounded-lg"
        width={900}
        height={900}
      />

      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 mt-4 rounded-md">
        {project?.images &&
          project?.images?.map((img) => (
            <Image
              key={img}
              src={img}
              width={100}
              height={100}
              className="w-24 h-16 rounded-md cursor-pointer border border-primary"
              alt="product image"
              onClick={() => handleImage(img)}
            />
          ))}
      </div>
    </div>
  );
}
