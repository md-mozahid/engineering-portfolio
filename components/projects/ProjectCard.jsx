import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {

  return (
    <div className="relative rounded-sm overflow-hidden group h-[300px]">
      <Image
        src={project?.thumbnail}
        alt={project?.title}
        className="w-full"
        width={500}
        height={500}
      />
      <Link
        href={`/projects/${project?.id}`}
        className="absolute inset-0 bg-black bg-opacity-40 flex uppercase items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
        {project?.title}
      </Link>
    </div>
  )
}
