import { BookOpen, Wrench, User, Award, Route, LayoutGrid } from "lucide-react";
export const products = [
  {
    id: 1,
    name: "Courses",
    description:
      "Curated CS courses with video tutorials, docs, and references.",
    icon: BookOpen,
    color: "bg-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    borderColor: "border-blue-200 dark:border-blue-800",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    route: "/courses",
  },
  {
    id: 2,
    name: "Tools",
    description: "Discover and use the best developer tools for productivity.",
    icon: Wrench,
    color: "bg-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/10",
    borderColor: "border-green-200 dark:border-green-800",
    hoverColor: "group-hover:text-green-600 dark:group-hover:text-green-400",
    route: "/tools",
  },
  {
    id: 3,
    name: "Learning Paths",
    description:
      "Structured multi-week journeys with daily/weekly milestones and progress tracking.",
    icon: Route,
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    route: "/paths",
  },
  {
    id: 4,
    name: "SnapFolio",
    description:
      "Generate your developer portfolio instantly. Try SnapFolio now!",
    icon: User,
    color: "bg-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    borderColor: "border-purple-200 dark:border-purple-800",
    hoverColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    route: "https://snap-folio-chi.vercel.app/",
    external: true,
  },
  {
    id: 5,
    name: "Certificates",
    description:
      "Browse top courses from leading platforms and earn certificates to showcase your skills.",
    icon: Award,
    color: "bg-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
    borderColor: "border-orange-200 dark:border-orange-800",
    hoverColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    route: "/free-certificates",
  },
   {
  id: 6,
  name: "Glossary",
  description:
    "A collection of essential tech terms explained simply – perfect for beginners and experts alike.",
  icon: BookOpen,
  color: "bg-indigo-500",
  bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
  borderColor: "border-indigo-200 dark:border-indigo-800",
  hoverColor: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
  route: "/glossary",
},

  {
    id: 7,
    name: "Documentation",
    description:
      "Explore official docs for frameworks, languages, databases, cloud and more.",
    icon: BookOpen,
    color: "bg-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/10",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    hoverColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    route: "/documentation",
  },
  {
    id: 8,
    name: "Roadmaps",
    description:
      "Explore structured learning paths with videos, resources, and topic breakdowns for various tech domains.",
    icon: Route,
    color: "bg-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/10",
    borderColor: "border-pink-200 dark:border-pink-800",
    hoverColor: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
    route: "/roadmap",
  },
{
  id: 9,
  name: "Projects Gallery",
  description:
    "Explore and share creative builds with rich details, visuals, and live demos to connect with like-minded developers.",
  icon: LayoutGrid,
  color: "bg-teal-500",
  bgColor: "bg-teal-50 dark:bg-teal-900/10",
  borderColor: "border-teal-200 dark:border-teal-800",
  hoverColor: "group-hover:text-teal-600 dark:group-hover:text-teal-400",
  route: "/projects",
},

{
  id: 11,
  name: "Interview Questions",
  description:
    "Curated set of DSA, System Design, CS Fundamentals, and Behavioral questions with structured answers.",
  icon: BookOpen, 
  color: "bg-green-500",
  bgColor: "bg-green-50 dark:bg-green-900/10",
  borderColor: "border-green-200 dark:border-green-800",
  hoverColor: "group-hover:text-green-600 dark:group-hover:text-green-400",
  route: "/InterviewQuestions",
},
{
    id: 12,
    name: "Quizzes",
    description:
      "Test your knowledge with interactive quizzes across DSA, Web Development, and more.",
    icon: BookOpen, // you can swap to another icon if you prefer
    color: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/10",
    borderColor: "border-red-200 dark:border-red-800",
    hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-400",
    route: "/quiz",
  },
];
