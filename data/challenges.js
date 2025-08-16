import { Code2, Timer, Flame, Activity } from "lucide-react";

export const challenges = [
  {
    id: 1,
    name: "Reverse a String",
    description: "Write a function to reverse a string without using `.reverse()`.",
    icon: Code2,
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    hoverColor: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
    level: "Easy",
    route: "/challenges1"
  },
  {
    id: 2,
    name: "Missing Number",
    description: "Find the missing number in this array: [1, 2, 3, 5].",
    icon: Timer,
    color: "bg-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
    borderColor: "border-orange-200 dark:border-orange-800",
    hoverColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    level: "Easy",
    route: "/challenges2"
  },
  {
    id: 3,
    name: "Fibonacci Sequence",
    description: "Print the first 10 numbers in the Fibonacci sequence.",
    icon: Flame,
    color: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/10",
    borderColor: "border-red-200 dark:border-red-800",
    hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-400",
    level: "Easy",
    route: "/challenges3"
  },
  {
    id: 4,
    name: "Is Power of Two",
    description: "Write a function to check if a number is a power of two.",
    icon: Activity,
    color: "bg-lime-500",
    bgColor: "bg-lime-50 dark:bg-lime-900/10",
    borderColor: "border-lime-200 dark:border-lime-800",
    hoverColor: "group-hover:text-lime-600 dark:group-hover:text-lime-400",
    level: "Easy",
    route: "/challenges4"
  }
];
