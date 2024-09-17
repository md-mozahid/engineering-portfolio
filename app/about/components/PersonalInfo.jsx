"use client";

import { Fade } from "react-reveal";

export default function PersonalInfo() {
  return (
    <>
      <div className="overflow-hidden">
        <Fade top>
          <h2 className="text-lg md:text-xl font-semibold md:mb-2">
            I a&apos;m Muzahid
          </h2>
        </Fade>
        <Fade right>
          <p className="mb-4">
            Experienced Engineer with a demonstrated history of working in the
            Manufacturing industry. Skilled in Tekla Structures, AutoCAD, and
            Revit (BIM & MEP). Strong engineering professional with a
            Bachelor&apos;s degree focused in Civil Engineering from Dhaka
            International University.
            <br />I have different job experience as versatile competent with
            useful organization skills, working on my own initiative in a
            variety of duties. I have 8 years + of experience in Structural
            Detailing & Estimating with success. I have extensive knowledge
            about the processes and materials of steel & construction. I am
            eager to work globally in the construction & prefabricated sector.
            <br />
            My goal is to achieve maximum client satisfaction with my knowledge,
            Expertise, Quality, Experience and ability to deliver projects in
            due time.
          </p>
        </Fade>
      </div>
      <div>
        <Fade left delay={200}>
          <p>Email: ce.muzahid@gmail.com</p>
        </Fade>
        <Fade left delay={300}>
          <p>Phone: +880 1516 108 120</p>
        </Fade>
        <Fade left delay={400}>
          <p>Address: Kurigram, Bangladesh</p>
        </Fade>
      </div>
    </>
  );
}
