"use client";

import { getProjects } from "@/database/db";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-reveal";

export default function Home() {
  const projects = getProjects();
  return (
    <div className="container flex flex-col items-center justify-center pt-10">
      <h2 className="md:text-2xl text-lg font-medium text-center text-dark dark:text-white uppercase mb-12 italic">
        Some of my completed Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-5">
        {projects?.slice(0, 6).map((project) => (
          <Fade key={project?.id} left={project?.id === 1 || project?.id === 4} down={project?.id  === 2}  up={project?.id  === 5} right={project?.id  === 3  || project?.id === 6}>
            <ProjectCard key={project?.id} project={project} />
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
