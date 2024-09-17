import { getCadDrawings } from "@/database/dbAutoCad";
import Image from "next/image";
import Link from "next/link";

export default function AutoCAD() {
  const cadDrawings = getCadDrawings();
  // console.log(cadDrawings)

  return (
    <div className="container py-24">
      <h2 className="md:text-2xl text-lg font-medium text-center text-dark dark:text-white uppercase mb-10">
        AutoCAD Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3 md:gap-5">
        {cadDrawings?.map((pdf, i) => (
          <div key={i} className="relative rounded-lg group h-[250px] md:h-[277px]">
            <Image
              src={pdf?.thumbnail}
              alt={pdf?.title}
              className="w-full rounded-lg object-cover object-center"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <Link
                href={pdf?.pdfLink}
                target="_blank"
                className="text-white text-lg w-28 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:scale-x-110 transition"
                title="going to google drive"
              >
                <p>Preview</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
