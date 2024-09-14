import ImageSection from "./ImageSection";

export default async function ProjectDetails({ project }) {
  return (
    <>
      <div className="container grid md:grid-cols-2 mt-10 gap-6">
        <ImageSection project={project} />

        <div className="md:font-semibold text-sm uppercase">
          <h2 className="mb-2 md:text-xl">
            Project Name:{" "}
            <span className="text-rose-500 md:text-xl">{project.title}</span>
          </h2>
          <h2 className="mb-2 md:text-xl">
            Client Name:{" "}
            <span className="text-rose-500 md:text-xl">{project?.client}</span>
          </h2>
          <div className="space-y-2 md:text-xl md:font-semibold">
            <p className="space-x-2">
              <span className="text-dark dark:text-white">Location:</span>
              <span className=" text-rose-500">{project?.location}</span>
            </p>

            <p className="space-x-2">
              <span className="text-dark dark:text-white">Area:</span>
              <span className="text-rose-500">{project?.area} sft</span>
            </p>
            <p className="space-x-2">
              <span className="text-dark dark:text-white">Status:</span>
              <span className="text-rose-500">{project?.status}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
