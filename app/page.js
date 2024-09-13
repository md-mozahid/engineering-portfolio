import { getProjects } from "@/database/db";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default async function Home() {
  const projects = getProjects();
  return (
    <div className="container flex flex-col items-center justify-center pt-10">
      <h2 className="md:text-2xl text-lg font-medium text-center text-dark dark:text-white uppercase mb-12 italic">
        Some of my completed Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-5">
        {projects?.slice(0, 6).map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>

      <div className="text-center md:mt-10">
        <Link href="/projects">
          <button className="btn btn-primary text-white hover:transition-all tracking-wider">More Projects</button>
        </Link>
      </div>
    </div>
  );
}
