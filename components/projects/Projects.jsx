import { getProjects } from "@/database/db";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projects = getProjects();
  return (
    <div className="container py-16">
      {/* <h2 className="text-2xl font-medium text-dark dark:text-white uppercase mb-6 italic">
        Some of my completed Project
      </h2> */}
      <div className="grid grid-cols-3 gap-3">
        {projects?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
    </div>
  );
}
