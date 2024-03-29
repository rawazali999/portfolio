import React from "react";
import Image from "next/image";

const Card = ({ project }) => {
  const { name, description, image, technologies, github, link } = project;

  return (
    <div className="m-2 flex  max-w-xs flex-col justify-between overflow-hidden rounded-xl shadow-md dark:border-2">
      <Image
        width={250}
        height={100}
        className="h-auto w-full"
        src={`/images/${image}`}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-400">{description}</p>
      </div>
      <div className="space-x-1 space-y-1 p-4 ">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className=" inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="p-4 ">
        <a
          href={github}
          target="_blank"
          className="mr-4 cursor-pointer text-blue-300 underline  hover:text-blue-500"
        >
          GitHub
        </a>
        <a
          href={link}
          target="_blank"
          className="cursor-pointer text-blue-300 underline hover:text-blue-500"
        >
          see live
        </a>
      </div>
    </div>
  );
};

export default Card;
