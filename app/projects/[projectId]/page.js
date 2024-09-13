import ProjectsDetails from "@/components/projects/details/ProjectsDetails";
import { getSingleProject } from "@/database/db";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage({ params: { projectId } }) {
  const singleProject = getSingleProject(projectId);
  if (!singleProject) {
    notFound();
  }
  return (
    <>
      {singleProject?.map((project) => (
        <ProjectsDetails key={project?.id} project={project} />
      ))}
    </>
  );
}
