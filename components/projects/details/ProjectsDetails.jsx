import ImageSection from "./ImageSection";
import Description from "./Description";

export default async function ProjectDetails({ project }) {
  console.log(project);
  return (
    <>
      <div className="container grid grid-cols-2 mt-10 gap-6">
        <ImageSection project={project} />

        <div className="font-semibold uppercase">
          <h2 className="mb-2 text-lg">
            Project Name:{" "}
            <span className="text-rose-500 text-xl">{project.title}</span>
          </h2>
          <h2 className="mb-2 text-lg">
            Client Name:{" "}
            <span className="text-rose-500 text-xl">{project?.client}</span>
          </h2>
          <div className="space-y-2 text-xl">
            <p className="space-x-2">
              <span className="text-dark dark:text-white font-semibold">
                Location:{" "}
              </span>
              <span className=" text-rose-500">{project?.location}</span>
            </p>
            <p className="space-x-2">
              <span className="text-dark dark:text-white font-semibold ">
                Volume:{" "}
              </span>
              <span className="text-rose-500">{project?.weight} MT</span>
            </p>
            <p className="space-x-2">
              <span className="text-dark dark:text-white font-semibold">
                Area:{" "}
              </span>
              <span className="text-rose-500">{project?.area} sft</span>
            </p>
            <p className="space-x-2">
              <span className="text-dark dark:text-white font-semibold">
                Status:{" "}
              </span>
              <span className="text-rose-500">{project?.status}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
