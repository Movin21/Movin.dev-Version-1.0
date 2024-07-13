"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

import { TracingBeam } from "./ui/tracing-beam";
import { BackgroundBeams } from "./ui/background-beams";

const RecentProjects = () => {
  return (
    <div className="md:w-max h-full lg:w-full rounded-md relative flex flex-col items-center justify-center ">
      <BackgroundBeams />
      <div className="mt-30">
        <h1 className="heading text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
          Recent&nbsp;
          <span className="text-cyan-500">&lt;Projects/&gt;</span>
        </h1>
        <TracingBeam className="px-6">
          <div className="flex flex-col-reverse flex-wrap items-center justify-center p-4 gap-16 mt-5">
            {projects.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer
                  title="/ui.aceternity.com"
                  href="https://twitter.com/mannupaaji"
                >
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className=" font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex text-sm text-cyan-500">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-2 text-cyan-500" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

export default RecentProjects;
