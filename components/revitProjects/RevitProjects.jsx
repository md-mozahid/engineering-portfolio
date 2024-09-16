"use client";

import RevitProjectCard from "@/components/revitProjects/RevitProjectCard";
import { getRevitDrawings } from "@/database/dbRevit";
import { Fade } from "react-reveal";

export default function RevitProjects() {
  const revitProjects = getRevitDrawings();
  return (
    <div className="container py-16 pt-24">
      <h2 className="md:text-2xl text-lg font-medium text-center text-dark dark:text-white uppercase pb-10">
        Revit Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        {revitProjects?.map((project, i) => (
          <Fade key={i} left={i % 2 === 0} up={i % 3 === 0} right={i % 5 === 0}>
            <RevitProjectCard key={project?.id} project={project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
