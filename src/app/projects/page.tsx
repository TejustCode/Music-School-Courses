"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import imga1 from "@/assets/CMimg1.png";
import imga2 from "@/assets/CMimg2.png";
import imga3 from "@/assets/CMimg3.png";
import imga4 from "@/assets/CMimg4.png";
import imgb1 from "@/assets/WBimg1.png";
import imgb2 from "@/assets/WBimg2.png";
import imgb3 from "@/assets/WBimg3.png";
import imgb4 from "@/assets/WBimg4.png";

const projectData = [
  {
    title: "Music School Courses",
    description: "Developed a fully animated website for a music school, enabling users to view and explore courses. Designed a responsive, user-friendly UI with smooth navigation for enhanced user experience.",
    techstack: "TypeScript, Next.js, Aceternity UI",
    images: [img1, img2, img3, img4],
  },
  {
    title: "Contact Management",
    description: "The Contact Manager is a React-based web app for organizing and managing contacts, featuring add, edit,delete, and search functionalities. It demonstrates proficiency in front-end development and state management",
    techstack: "Java, Spring boot, React JS , Bootstrap",
    images: [imga1, imga2, imga3, imga4],
  },
  {
    title: "Web Blogging Platform",
    description: "Web Blogger is a user-friendly platform that allows you to create and manage your own blog effortlessly. With customizable templates and an intuitive interface, you can share your thoughts, stories, and expertise with the world. Whether you're a seasoned writer or just starting out, Web Blogger makes it easy to publish your ideas and connect with your audience.",
    techstack: "Java, Spring MVC, JSP , Web Tech",
    images: [imgb1, imgb2, imgb3, imgb4],
  }
];

function ProjectsSec() {
  return (
    <div id="projectsSec" className="w-full mt-12">
      <Timeline
        data={projectData.map((project) => ({
          title: project.title,
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                {project.description} <br />
                TechStack : {project.techstack}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((imageSrc, index) => (
                  <Image
                    key={index}
                    src={imageSrc}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-32 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}

export default ProjectsSec;
