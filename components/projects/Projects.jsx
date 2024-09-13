import { getProjects } from "@/database/db";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projects = getProjects();
  return (
    <div className="container py-16">
      {/* <h2 className="text-2xl font-medium text-dark dark:text-white uppercase mb-6 italic">
        Some of my completed Project
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-5">
        {projects?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
    </div>
  );
}
