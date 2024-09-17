import Image from 'next/image'
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Fade, Zoom } from 'react-reveal'

export default function Education({ education }) {
  const { description, endDate, startDate, educationTitle, subject, location } =
    education || {}
  // const { width } = useWindowDimensions()
  return (
    <div className="p-6 flex items-center">
      <div className="mr-4 hidden lg:block overflow-hidden">
        <Zoom>
          <Image
            src="/assets/education/university.webp"
            alt="work_icon"
            className="w-52"
            width={150}
            height={150}
          />
        </Zoom>
      </div>
      <div className="w-full">
        <div className="flex items-center">
          <div className="overflow-hidden w-full">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h2 className="font-medium text-lg">
                  <Fade left>{educationTitle}</Fade>
                </h2>
                <div className="text-gray-500 dark:text-slate-200 text-sm">
                  <Fade left delay={150}>
                    <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                      <span className="inline-flex items-center capitalize gap-1">
                        <FaGraduationCap /> {subject}
                      </span>
                      <span className="inline-flex items-center capitalize gap-1">
                        <FaLocationDot /> {location}
                      </span>
                    </div>
                  </Fade>
                </div>
              </div>

              <div className="text-gray-500 dark:text-gray-200 text-xs mt-1 md:mt-0">
                <Fade
                  //   left={width < 768 ? true : false}
                  //   right={width > 768 ? true : false}
                  duration={1300}>
                  <div className=" flex items-center ">
                    <div className="mr-1">
                      <FaCalendarAlt />
                    </div>
                    <div>{startDate}</div>
                    <div className="mx-1"> - </div>
                    <div>{endDate}</div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Fade up>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}
