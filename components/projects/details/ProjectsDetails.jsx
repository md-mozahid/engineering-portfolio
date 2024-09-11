import ImageSection from "./ImageSection";
import Description from "./Description";

export default async function ProjectDetails({ project }) {
console.log(project)
  return (
    <>
      <div className="container grid grid-cols-2 gap-6">
        <ImageSection project={project} />

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {project.title}
          </h2>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {project?.client}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-1 text-sm text-orange-400">
              <span className="text-xs lg:text-sm">
                ({`${project?.averageRating} Star`})
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({project?.reviewCount} Reviews)
            </div>
          </div>
          <div className="space-y-2">
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{project?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold ">Category: </span>
              <span className="text-gray-600 uppercase">
                {project?.category}
              </span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">{project?.sku}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              ${project?.discountPrice}
            </p>
            <p className="text-base text-gray-400 line-through">
              ${project?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{project?.description}</p>
        </div>
      </div>
    </>
  );
}
