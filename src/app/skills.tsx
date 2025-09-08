"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Development",
    children:
      "React, React Native, Vue.js",
  },
  {
    icon: FingerPrintIcon,
    title: "Backend & APIs",
    children:
      "Node.js, Express.js, REST, GraphQL, Socket.IO",
  },
  {
    icon: SwatchIcon,
    title: "Databases & Caching",
    children:
      "MongoDB, MySQL, PostgreSQL, Redis, Memcached",
  },
  {
    icon: HashtagIcon,
    title: "Cloud/DevOps & Tools",
    children:
      "Firebase (FCM), Docker, Git/GitHub, CI/CD fundamentals",
  },
  {
    icon: EyeIcon,
    title: "Testing",
    children:
      "Detox (E2E)",
  },
  {
    icon: DocumentTextIcon,
    title: "Languages",
    children:
      "English (Fluent), Arabic (Fluent), French (Intermediate)",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
<Typography
  variant="lead"
  className="mx-auto w-full !text-gray-500 lg:w-10/12"
>
  From building robust backends and scalable APIs, to crafting seamless web
  frontends and intuitive mobile experiences. My work
  bridges functionality with user experience, ensuring every layer of the
  stack comes together smoothly.
</Typography>

      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
