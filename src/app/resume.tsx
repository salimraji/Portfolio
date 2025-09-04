"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Science in Computer Science - Notre Dame University - Louaize (2020-2024)",
  },
  {
    icon: BriefcaseIcon,
    children: "Software Developer at Data Quest (Nov 2024 - Present)",
  },
  {
    icon: BuildingOffice2Icon,
    children: "Software Development Intern at Data Quest (Oct 2024 - Nov 2024)",
  },
  {
    icon: BuildingOffice2Icon,
    children: "Full Stack Development Trainee at Koein (June 2024 - July 2024)",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24" id="about">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            A highly skilled and creative Software Developer with experience in crafting visually stunning and functionally robust websites and web applications.
          </Typography>
          <a href="/Salim Raji Resume.pdf" download>
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Download CV
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </a>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
