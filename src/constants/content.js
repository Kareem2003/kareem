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
    company: "Odoo Developer",
    role: "Software Engineer",
    duration: "Present",
    description:
      "Developing and customizing Odoo modules for Accounting, Sales, and Inventory. Experienced in refactoring complex QWeb reports, implementing promotion logic, and optimizing database inputs using Python, XML, and PostgreSQL. Successfully resolved critical issues in invoice report generation and API integrations.",
    logo: null, // You might want to add an Odoo logo asset later
  },
  {
    company: "Savola Foods",
    role: "Marketing Budget Automation Intern",
    duration: "4 Months (2022)",
    description:
      "Completed a 4-month internship contributes to the 'Marketing Budget Automation' project. Worked with Oracle ERP, Oracle SQL, and other tools to automate budget control, purchase orders, and approval processes.",
    logo: SavolaCer, // Using the cert image as logo for now
  },
  {
    company: "PSsolution",
    role: "Intern",
    duration: "2023",
    description: "Gained practical experience in software development and professional workflows during this internship.",
    logo: PSsolutionCer,
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
