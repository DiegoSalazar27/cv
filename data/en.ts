import { getAssetPath } from "@/app/lib/utils";
import { Data } from "@/types/data";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Calendar, Mail, Send } from "lucide-react";

const data: Data = {
  name: "Diego Salazar",
  lastUpdatedAt: new Date(),
  location: "San Cristobal, Venezuela",
  bio: "FullStack & App Developer",
  summary:
    "Full Stack developer strong in Frontend with 5 years of experience. As a developer I always try to be up to date with the latest trends in development so I can bring optimal and robust solutions while also keeping the best user and developer experience keeping the technical debt low, using the best tool for the task.",
  avatarUrl: getAssetPath() + "/locale/en/profile.webp",
  skills: [
    "JavaScript",
    "TypeScript",
    "Dart",
    "React",
    "NextJs",
    "NodeJs",
    "NestJs",
    "Tailwind",
    "ChakraUI",
    "Flutter",
    "Mongo",
    "MySQL",
    "GraphQL",
    "Firebase",
    "GCP",
    "AWS",
    "RestAPI",
    "Docker",
  ],
  education: [
    {
      school: "National Experimental University of Tachira",
      degree: `Electronic Engineering`,
      start: "2017",
      end: "Retired",
    },
  ],
  work: [
    {
      company: "Digital Node",
      // link: "#",
      badges: ["Remote"],
      title: "Senior FullStack Developer",
      start: "2020",
      end: "Present",
      description: "",
    },
    {
      company: "Critical QA",
      // link: "https://criticalqa.com",
      badges: ["Remote"],
      title: "Senior Frontend Developer",
      start: "2021",
      end: "2022",
      description: ``,
    },
    {
      company: "A La Carta Online",
      // link: "#",
      badges: [],
      title: "Frontend Developer",
      start: "2020",
      end: "2021",
      description: "",
    },
  ],
  contacts: [
    {
      label: "Mail",
      href: "mailto:diegosalazargm@gmail.com",
      icon: Mail,
      toolbar: true,
    },
    {
      label: "Contact me",
      href: "https://www.linkedin.com/in/diegosalazar27/",
      icon: SiLinkedin,
      toolbar: true,
    },
  ],
  projects: [
    {
      title: "Chakra Form",
      techStack: [
        "Side Project",
        "package",
        "React",
        "Form",
        "ChakraUI",
        "Input",
      ],
      description:
        "An utility to create forms powered by ChakraUI and React-Hook-Forms using a JSON object",
      link: {
        label: "Chakra Form",
        href: "https://diegosalazar27.github.io/chakra-form/",
      },
    },
    {
      title: "Chakra Month Picker",
      techStack: [
        "Side Project",
        "package",
        "React",
        "Component",
        "ChakraUI",
        "Input",
      ],
      description: "Month picker component for React using ChakraUI",
      link: {
        label: "Chakra Month Picker",
        href: "https://diegosalazar27.github.io/chakra-month-picker/",
      },
    },
  ],
  links: [
    {
      label: "Github",
      href: "https://github.com/DiegoSalazar27",
      icon: SiGithub,
    },
  ],
};

export default data;
