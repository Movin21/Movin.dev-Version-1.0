import React from "react";
import { featuredBlogs } from "@/data";
import { FaMedium } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/background-beams";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div
      id="Blogs"
      className="w-full h-full rounded-md relative flex flex-col items-center justify-center px-4 md:px-8 lg:px-16"
    >
      <div className="mt-36 w-full max-w-7xl">
        <BackgroundBeams />
        <h1 className="pb-32 heading text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
          Featured&nbsp;
          <span className="text-cyan-500 inline-flex items-center">
            Blogs
            <FaMedium className="ml-2" />
          </span>
        </h1>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1  lg:grid-cols-1 gap-8 justify-items-center">
            {featuredBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
