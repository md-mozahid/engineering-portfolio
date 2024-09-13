import { getProjects } from "@/database/db";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default async function Home() {
  const projects = getProjects();
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-medium text-center text-dark dark:text-white uppercase mb-12 italic">
        Some of my completed Project
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {projects?.slice(0, 6).map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/projects">
          <button className="btn btn-primary text-white hover:transition-all tracking-wider">More Projects</button>
        </Link>
      </div>
    </div>
  );
}
