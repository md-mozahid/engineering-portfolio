"use client";

import { getProjects } from "@/database/db";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-reveal";

export default function Projects() {
  const projects = getProjects();
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-0">
        {projects?.map((project, i) => (
          <Fade key={i} left={i % 2 === 0} up={i % 3 === 0} right={i % 5 === 0}>
            <ProjectCard key={project?.id} project={project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
