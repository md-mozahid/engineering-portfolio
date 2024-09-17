"use client";

import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-reveal";
import Certificates from "./components/Certificates";
import Educations from "./components/Educations";
import PersonalInfo from "./components/PersonalInfo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FilterButton from "./components/FilterButton";

export default function About() {
  const [filtered, setFiltered] = useState("personal");
  const [activeBtn, setActiveBtn] = useState("personal");
  const router = useRouter();

  const handleFilter = (e) => {
    setActiveBtn(e);
    if (e === "personal") {
      setFiltered("personal");
    } else if (e === "education") {
      setFiltered("education");
    } else if (e === "certificate") {
      setFiltered("certificate");
    }
  };
  return (
    <div className="container pt-24">
      <h2 className="text-xl md:text-3xl uppercase pb-5">About Me:</h2>
      <div className="grid md:grid-cols-3 gap-3 md:gap-5">
        <Fade left>
          <Image
            className="rounded-lg md:w-80 object-cover object-center"
            src="/assets/muzahid2.jpg"
            alt="muzahid"
            width={500}
            height={500}
          />
        </Fade>
        <div className="bg-[#a9e2f5] dark:bg-[#38b4d0] p-5 rounded-md md:col-span-2 shadow-md">
          <div className="flex-center md:flex-row flex-col gap-3 md:gap-5 md:mb-7 mb-5">
            <Fade left>
              <FilterButton
                onClick={() => handleFilter("personal")}
                active={activeBtn === "personal"}
              >
                Summary
              </FilterButton>
            </Fade>
            <Fade bottom>
              <FilterButton
                onClick={() => handleFilter("education")}
                active={activeBtn === "education"}
              >
                Education
              </FilterButton>
            </Fade>
            <Fade right>
              <FilterButton
                onClick={() => handleFilter("certificate")}
                active={activeBtn === "certificate"}
              >
                Certificate
              </FilterButton>
            </Fade>
          </div>
          <div className="grid col-span-1">
            {filtered === "personal" ? (
              <PersonalInfo />
            ) : filtered === "education" ? (
              <Educations />
            ) : (
              <Certificates />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
