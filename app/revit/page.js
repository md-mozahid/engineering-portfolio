"use client";

import { getRevitDrawings } from "@/database/dbRevit";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";

export default function RevitProjects() {
  const revitProjects = getRevitDrawings();
  return (
    <div className="container py-16 pt-24">
      <h2 className="md:text-2xl text-lg font-medium text-center text-dark dark:text-white uppercase pb-10">
        Revit Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3 md:gap-5">
        {revitProjects?.map((project, i) => (
          <Fade key={i} left={i % 2 === 0} up={i % 3 === 0} right={i % 5 === 0}>
            <div className="relative rounded-lg group h-[240px] md:h-[250px]">
              <Image
                src={project?.thumbnail}
                alt={project?.title}
                className="w-full rounded-lg object-cover object-center"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href={`/revit/${project?.id}`}
                  className="text-white text-lg w-28 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:scale-x-110 transition"
                  title="view project"
                >
                  <p>Preview</p>
                </Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
