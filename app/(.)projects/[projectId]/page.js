import Modal from "@/components/modal/Modal";
import ProjectsDetails from "@/app/projects/details/ProjectsDetails";
import { getSingleProject } from "@/database/db";

export default function ProjectIntercept({ params: { projectId } }) {
  const singleProject = getSingleProject(projectId);

  return (
    <Modal>
      <div>
        {singleProject?.map((project) => (
          <ProjectsDetails key={project?.id} project={project} />
        ))}
      </div>
    </Modal>
  );
}
