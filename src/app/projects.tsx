"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Internal CMS",
    desc: "Designed and implemented an internal CMS using Node.js, Express.js, React, and MongoDB, enabling non-technical teams to manage app content.",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "User Management System",
    desc: "Built a full-stack user management system with Node.js, Express.js, and MongoDB, supporting CRUD operations and profile photo uploads.",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "E-commerce Platform",
    desc: "Developed a prototype e-commerce platform with ASP.NET Core MVC, Entity Framework Core, and Vue.js, featuring a product catalog, filtering, and shopping cart.",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "React Native Features",
    desc: "Delivered new React Native features that improved mobile app navigation and overall usability.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
