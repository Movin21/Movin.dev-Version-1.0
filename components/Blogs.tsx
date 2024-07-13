import { cn } from "@/utils/cn";
import { FaMedium } from "react-icons/fa6";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { FaIcons } from "react-icons/fa6";
import { Meteors } from "./ui/meteors";
import { BackgroundBeams } from "./ui/background-beams";
import { FollowerPointerCard } from "./ui/following-pointer";
const Blogs = () => {
  return (
    <div className="md:w-max h-full lg:w-full rounded-md relative flex flex-col items-center justify-center ">
      <div className="mt-36">
        <BackgroundBeams />
        <h1 className="pb-32 heading text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
          Featured&nbsp;
          <span className="text-cyan-500 inline-flex items-center">
            Blogs
            <FaMedium className="ml-2" />
          </span>
        </h1>
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-xl border border-zinc-100">
          <div className="w-80 mx-auto">
            <div className=" p-4">
              <h2 className="font-bold my-4 text-lg text-black">
                {blogContent.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-white">
                {blogContent.description}
              </h2>
              <div className="flex flex-row justify-between items-center mt-10">
                <span className="text-sm text-white">{blogContent.date}</span>
                <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",

  authorAvatar: "/manu.png",
};
