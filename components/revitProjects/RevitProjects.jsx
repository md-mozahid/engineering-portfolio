"use client";

import RevitProjectCard from "@/components/revitProjects/RevitProjectCard";
import { getRevitDrawings } from "@/database/dbRevit";
import { Fade } from "react-reveal";

export default function RevitProjects() {
  const revitProjects = getRevitDrawings();
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-5">
        {revitProjects?.map((project, i) => (
          <Fade key={i} left={i % 2 === 0} up={i % 3 === 0} right={i % 5 === 0}>
            <RevitProjectCard key={project?.id} project={project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
