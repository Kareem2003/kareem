import { assets } from "../assets";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import CV from "../assets/myCV.pdf";

const {
  profile,
  DucksRow,
  ReactCer,
  NodeCer,
  CloudCer,
  GithubCer,
  PSsolutionCer,
  SavolaCer,
  SoftSkillsCer,
  WebDevCer1,
  WebDevCer2,
  CSS,
  HTML,
  JavaScript,
  ReactImg,
  Tailwind,
  TypeScript,
  NodeJS,
  Odoo,
  Python,
} = assets;

export const HERO_CONTENT = {
  name: "Kareem Abdallah",
  title: "Odoo Developer | Front-End Developer",
  description:
    "Specialized in building robust ERP solutions with Odoo and creating immersive web experiences. I bridge the gap between complex backend logic and beautiful frontend design.",
  image: profile,
  resumeLink: CV,
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Kareem2003",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/kareem2003",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/+201090992653",
  },
];

export const SKILLS = [
  { name: "Odoo", image: Odoo },
  { name: "Python", image: Python },
  { name: "HTML", image: HTML },
  { name: "CSS", image: CSS },
  { name: "JavaScript", image: JavaScript },
  { name: "TypeScript", image: TypeScript },
  { name: "React", image: ReactImg },
  { name: "Tailwind", image: Tailwind },
  { name: "Node.js", image: NodeJS },
];

export const EXPERIENCES = [
  {
    company: "Pomo Tech",
    role: "Odoo Developer",
    duration: "09/2024 - Present",
    description:
      "Full-stack development of custom Odoo modules and applications, including reporting solutions. Integrated React Native frontend components with Odoo applications to deliver seamless, cross-platform user experiences.",
    logo: Odoo, 
  },
  {
    company: "PS Solutions",
    role: "Front End Developer",
    duration: "07/2024 - 10/2024",
    description:
      "Collaborated with a team to design and develop visually appealing UI using React JS. Implemented front-end designs to create dynamic, engaging websites that improve UI. Demonstrated expertise in crafting interactive user experiences across various projects.",
    logo: PSsolutionCer,
  },
  {
    company: "PS Solutions",
    role: "Mobile Developer",
    duration: "08/2023 - 10/2023",
    description:
      "Developed full-stack mobile applications using React Native and Laravel during internship. Created innovative mobile solutions with React Native and Laravel, enhancing user experience.",
    logo: PSsolutionCer,
  },
  {
    company: "Savola Foods",
    role: "IT Intern – Marketing and Budget Automation",
    duration: "07/2022 - 09/2022",
    description:
      "Gained practical experience in the IT department of a multinational company. Worked with Oracle systems to support data management and reporting processes. Collaborated with senior IT, finance, and Marketing teams to streamline workflow processes.",
    logo: SavolaCer,
  },
];

export const CERTIFICATIONS = [
  {
    title: "Web Developer Challenger",
    issuer: "Challenger",
    description:
      "This certificate covers the fundamentals of web development, including HTML, CSS, and JavaScript, teaching how to build responsive websites from scratch.",
    image: WebDevCer2,
  },
  {
    title: "Web Developer",
    issuer: "Coursera",
    description:
      "Comprehensive web development course covering responsive design, accessibility, and modern JavaScript frameworks.",
    image: WebDevCer1,
  },
  {
    title: "Soft Skills",
    issuer: "Unknown",
    description:
      "Emphasizes the development of interpersonal skills such as communication, teamwork, problem-solving, and adaptability.",
    image: SoftSkillsCer,
  },
  {
    title: "ReactJS",
    issuer: "Unknown",
    description: "Advanced React concepts including hooks, context, and state management.",
    image: ReactCer,
  },
  {
    title: "Node.js & Express",
    issuer: "Unknown",
    description: "Backend development fundamentals using Node.js and Express framework.",
    image: NodeCer,
  },
  {
    title: "Cloud Computing Basics",
    issuer: "Unknown",
    description: "Introduction to cloud infrastructure and services.",
    image: CloudCer,
  },
  {
    title: "GitHub",
    issuer: "GitHub",
    description: "Version control and collaboration best practices.",
    image: GithubCer,
  },
];

export const PROJECTS = [
  {
    title: "Ducks Row",
    description:
      "Duck's Row is a web platform that helps users find hangout spots by filtering options based on location and budget.",
    image: DucksRow,
    link: "https://github.com/Duck-s-Row/Duck-s-Row.github.io",
    tags: ["React", "HTML", "CSS"],
  },
  {
    title: "ToDo App",
    description:
      "A Simple ToDo app is built using React Native. The app provides a clean interface for adding, viewing, and completing tasks.",
    image: null, 
    link: "https://github.com/Kareem2003/TodoApp",
    tags: ["React Native", "Mobile"],
  },
  {
    title: "NCT Table",
    description:
      "This project is a simple Flutter application to show the time table of the NCT.",
    image: null,
    link: "https://github.com/Kareem2003/NCT_Table",
    tags: ["Flutter", "Dart"],
  },
  {
    title: "Wagbat",
    description:
      "Wagbat is a food delivery application designed to facilitate food delivery service to fellow students.",
    image: null,
    link: "https://github.com/Kareem2003/NCT_Table",
    tags: ["App", "Delivery"],
  },
];

export const CONTACT_CONTENT = {
  text: "You can reach out to me via the contact information below",
  email: "kareem.abdallah@example.com", // Placeholder, check App.jsx if there is one
};
