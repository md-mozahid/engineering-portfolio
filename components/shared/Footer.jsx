import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="container relative before:absolute before:top-0 before:left-4 before:right-4 before:w-[calc(100%-32px)] before:h-[1px] before:bg-slate-900 before:dark:bg-white">
      <div className="px-5 md:py-8 pb-8 pt-5 mx-auto flex items-center justify-between flex-col md:flex-row gap-4">
        <Link
          href="#"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <span className="ml-3">
            Copyright © {new Date().getFullYear()} Md. Muzahid
          </span>
        </Link>
        <SocialIcons />
      </div>
    </footer>
  );
}
