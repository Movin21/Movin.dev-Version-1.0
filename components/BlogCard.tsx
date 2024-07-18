import Image from "next/image";

const BlogCard = ({
  title,
  description,
  date,
  image,
  href,
}: {
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
}) => {
  return (
    <div className="relative overflow-hidden w-80 h-[28rem] rounded-2xl transition duration-200 group bg-black hover:shadow-xl border border-cyan-500 m-4">
      <div className="w-full h-48 bg-black-500 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <h2 className="font-bold mb-2 text-lg text-cyan-500 line-clamp-2">
            {title}
          </h2>
          <p className="font-light text-sm text-white line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <span className="text-sm text-white">{date}</span>

          <a
            href={href}
            target="_blank"
            className="relative z-10 px-4 py-2 bg-cyan-500 text-white font-bold rounded-xl block text-xs transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-800 hover:shadow-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
