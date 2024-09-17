import Modal from "@/components/modal/Modal";
import RevitProjectsDetails from "@/app/revit/details/RevitProjectsDetails";
import { getSingleRevitProject } from "@/database/dbRevit";
import { notFound } from "next/navigation";

export default function RevitProjectIntercept({ params: { projectId } }) {
  const singleRevitProject = getSingleRevitProject(projectId);
  if (!singleRevitProject) {
    notFound();
  }

  return (
    <Modal>
      <div>
        {singleRevitProject?.map((project) => (
          <RevitProjectsDetails key={project?.id} project={project} />
        ))}
      </div>
    </Modal>
  );
}
