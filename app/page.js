"use client";

import { getProjects } from "@/database/db";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import Image from "next/image";

export default function Home() {
  const projects = getProjects();
  return (
    <div className="container flex flex-col items-center justify-center pb-10 pt-24">
      <h2 className="md:text-2xl text-lg font-medium text-center text-dark dark:text-white uppercase mb-10">
        Steel Structure Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 md:gap-5 mb-10">
        {projects?.slice(0, 6).map((project) => (
          <Fade
            key={project?.id}
            left={project?.id === 1 || project?.id === 4}
            down={project?.id === 2}
            up={project?.id === 5}
            right={project?.id === 3 || project?.id === 6}
          >
            <div className="relative rounded-lg group h-[200px] md:h-[250px]">
              <Image
                src={project?.thumbnail}
                alt={project?.title}
                className="w-full rounded-lg object-cover object-center"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link
                  href={`/projects/${project?.id}`}
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

      <div className="text-center md:mt-10">
        <Link href="/projects">
          <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 flex-center gap-2 hover:px-12 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all hover:text-white">
            More Projects <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
