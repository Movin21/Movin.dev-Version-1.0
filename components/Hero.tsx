import { FaDownload, FaLinkedin } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import DownloadButton from "./ui/downloadButton";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { FlipWords } from "./ui/flip-words";
import { FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="min-h-[45rem] bg-black-500 md:w-max lg:w-full rounded-md relative flex flex-col items-center justify-center"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
      </div>
      <div className="flex flex-col items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Byte-sized Dreams, Infinite Possibilities
          </p>
        </div>
        <div>
          <FlipWords
            className="text-center text-3xl md:text-4xl lg:text-7xl "
            words={["<Student_Devoloper/>", "Tech_Enthusiast"]}
          ></FlipWords>
        </div>
        <div>
          <p className="text-center md:tracking-wider mt-2 mb-4 text-sm">
            from Sri Lanka.
          </p>
        </div>
      </div>
      <div className="sm:pt-96 lg:pt-0">
        <div className="flex space-x-4 lg:mt-15 sm: mt-24 relative z-10">
          <a
            href="https://www.linkedin.com/in/movindu-liyanage-291b48282/"
            target="_blank"
          >
            <FaLinkedin className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none" />
          </a>
          <a
            href="./Movindu Liyanage Resume.pdf"
            download="Resumé_Movindu Liyanage"
          >
            <DownloadButton
              title="Download Resumé"
              icon={<FaDownload />}
              position="right"
            />
          </a>
          <a href="https://github.com/Movin21" target="_blank">
            <FaGithubSquare className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none" />
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
