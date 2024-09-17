import RevitProjectsDetails from "@/app/revit/details/RevitProjectsDetails";
import { getSingleRevitProject } from "@/database/dbRevit";
import { notFound } from "next/navigation";

export default function RevitProjectDetailsPage({ params: { projectId } }) {
  const singleRevitProject = getSingleRevitProject(projectId);
  if (!singleRevitProject) {
    notFound();
  }
  return (
    <>
      {singleRevitProject?.map((project) => (
        <RevitProjectsDetails key={project?.id} project={project} />
      ))}
    </>
  );
}
