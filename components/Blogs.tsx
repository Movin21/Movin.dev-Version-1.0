import React from "react";
import Image from "next/image";
import { FaMedium } from "react-icons/fa6";
import { BackgroundBeams } from "./ui/background-beams";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const featuredBlogs = [
    {
      title: "Introduction to Angular",
      description:
        "Angular is a popular open-source web application framework developed and maintained by Google. It is written in TypeScript, a superset of JavaScript, and is designed to simplify the development of complex web applications",
      date: "July 14, 2024",
      image: "/public/bg.png",
      href: "/blog/featured-post-1",
    },
  ];

  return (
    <div className="md:w-max h-full lg:w-full rounded-md relative flex flex-col items-center justify-center">
      <div className="mt-36 w-full ">
        <BackgroundBeams />
        <h1 className="pb-32 heading text-3xl sm:text-4xl lg:text-5xl text-center font-bold">
          Featured&nbsp;
          <span className="text-cyan-500 inline-flex items-center">
            Blogs
            <FaMedium className="ml-2" />
          </span>
        </h1>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 gap-y-8 justify-items-center">
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
