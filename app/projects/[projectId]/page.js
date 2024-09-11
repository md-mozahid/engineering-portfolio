import ProjectsDetails from "@/components/projects/details/ProjectsDetails";
import { getSingleProject } from "@/database/db";

export default function ProjectDetailsPage({ params: { projectId } }) {
  const singleProject = getSingleProject(projectId);

  return (
    <>
      {singleProject?.map((project) => (
        <ProjectsDetails key={project?.id} project={project} />
      ))}
    </>
  );
}
