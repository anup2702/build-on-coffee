import { BookOpen, Wrench, User, Award, Route } from "lucide-react";
export const products = [
  {
    id: 1,
    name: "Courses",
    description:
      "Curated CS courses with video tutorials, docs, and references.",
    icon: BookOpen,
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    route: "/courses",
  },
  {
    id: 2,
    name: "Tools",
    description: "Discover and use the best developer tools for productivity.",
    icon: Wrench,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    hoverColor: "group-hover:text-green-600 dark:group-hover:text-green-400",
    route: "/tools",
  },
  {
    id: 3,
    name: "SnapFolio",
    description:
      "Generate your developer portfolio instantly. Try SnapFolio now!",
    icon: User,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    hoverColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    route: "https://snapfolio.vercel.app",
    external: true,
  },
  {
    id: 4,
    name: "Certificates",
    description:
      "Browse top courses from leading platforms and earn certificates to showcase your skills.",
    icon: Award,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    hoverColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    route: "/free-certificates",
  },
   {
  id: 5,
  name: "Glossary",
  description:
    "A collection of essential tech terms explained simply – perfect for beginners and experts alike.",
  icon: BookOpen,
  color: "from-purple-500 to-indigo-500",
  bgColor: "bg-purple-50 dark:bg-purple-900/20",
  borderColor: "border-purple-200 dark:border-purple-800",
  hoverColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
  route: "/glossary",
},

  {
    id: 6,
    name: "Documentation",
    description:
      "Explore official docs for frameworks, languages, databases, cloud and more.",
    icon: BookOpen,
    color: "from-sky-500 to-cyan-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/20",
    borderColor: "border-sky-200 dark:border-sky-800",
    hoverColor: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
    route: "/documentation",
  },
  {
    id: 7,
    name: "Roadmaps",
    description:
      "Explore structured learning paths with videos, resources, and topic breakdowns for various tech domains.",
    icon: Route,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    hoverColor: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
    route: "/roadmap",
  }
];
