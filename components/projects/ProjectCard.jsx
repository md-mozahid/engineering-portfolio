import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="relative rounded-lg overflow-hidden group h-[225px]">
      <div className="relative">
        <Image
          src={project?.thumbnail}
          alt={project?.title}
          className="w-full"
          width={500}
          height={500}
        />
        {/* <Link
          href={`/projects/${project?.id}`}
          className="absolute inset-0 bg-black bg-opacity-40 flex uppercase items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
        >
          {project?.title}
        </Link> */}
        {/*  */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            href={`/projects/${project?.id}`}
            className="text-white text-lg w-28 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-x-110 transition"
            title="view project"
          >
            <p>Preview</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
