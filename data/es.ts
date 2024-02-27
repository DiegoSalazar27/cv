import { getAssetPath } from "@/app/lib/utils";
import { Data } from "@/types/data";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import { Calendar, Mail, Send } from "lucide-react";

const data: Data = {
  name: "Diego Salazar",
  // globalName: 'Taro yamada',
  lastUpdatedAt: new Date(),
  // status: {
  //   color: 'active',
  //   label: '転職活動中',
  // },
  location: "San Cristobal, Venezuela",
  bio: "FullStack & App Developer",
  summary:
    "Soy un desarrollador FullStack inclinado al Frontend con 5 años de experiencia. Como desarrollador siempre intento mantenerme al día con las ultimas tendencias del desarrollo para poder brindar soluciones robustas y óptimas teniendo en consideración la mejor experiencia de usuario y experiencia de desarrollador posibles.",
  avatarUrl: getAssetPath() + "/locale/ja/profile.webp",
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
      school: "Universidad Nacional Experimental Del Táchira",
      degree: `Ingeniería Electronica`,
      start: "2017",
      end: "Retirado",
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
      description: "",
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
      label: "Correo",
      href: "mailto:diegosalazargm@gmail.com",
      icon: Mail,
      toolbar: true,
    },
    {
      label: "Contactame",
      href: "https://www.linkedin.com/in/diegosalazar27/",
      icon: SiLinkedin,
      toolbar: true,
    },
  ],
  links: [
    {
      label: "Github",
      href: "https://github.com/DiegoSalazar27",
      icon: SiGithub,
    },
  ],
  projects: [
    {
      title: "Chakra Form",
      techStack: [
        "Proyecto Personal",
        "Paquete",
        "React",
        "Formulario",
        "ChakraUI",
        "Input",
      ],
      description:
        "Utilidad para crear formularios usando ChakraUI y React-hook-forms basado en un JSON",
      link: {
        label: "Chakra Form",
        href: "https://diegosalazar27.github.io/chakra-form/",
      },
    },
    {
      title: "Chakra Month Picker",
      techStack: [
        "Proyecto Personal",
        "Paquete",
        "React",
        "Componente",
        "ChakraUI",
        "Input",
      ],
      description: "Componente de React para seleccionar meses usando ChakraUI",
      link: {
        label: "Chakra Month Picker",
        href: "https://diegosalazar27.github.io/chakra-month-picker/",
      },
    },
  ],
};

export default data;
