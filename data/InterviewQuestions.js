import { Layers, Database, Cpu, Globe, Code, Server } from "lucide-react";

const interviewSubjects = [
  {
    id: 1,
    name: "Data Structures & Algorithms",
    icon: Layers,
    description: "Arrays, strings, trees, graphs, DP, greedy, and more.",
    link: "https://www.geeksforgeeks.org/dsa/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/",
    external: true,
    
  },
  {
    id: 2,
    name: "DBMS",
    icon: Database,
    description: "SQL, normalization, indexing, transactions, ACID/BASE.",
    link: "https://www.geeksforgeeks.org/dbms/commonly-asked-dbms-interview-questions/",
    external: true,

  },
  {
    id: 3,
    name: "Operating System",
    icon: Cpu,
    description: "Processes, threads, scheduling, memory, deadlocks.",
    link: "https://www.geeksforgeeks.org/operating-systems/operating-systems-interview-questions/",
    external: true,

  },
  {
    id: 4,
    name: "Computer Networks",
    icon: Globe,
    description: "OSI/TCP models, routing, HTTP/HTTPS, DNS, TCP/UDP.",
    link: "https://www.geeksforgeeks.org/blogs/networking-interview-questions/",
    external: true,
   
  },
 
  {
    id: 5,
    name: "System Design",
    icon: Server,
    description: "Scalability, caching, sharding, queues, consistency.",
    link: "https://www.geeksforgeeks.org/system-design/top-10-system-design-interview-questions-and-answers/",
    external: true,
  
  },
];

export default interviewSubjects;
