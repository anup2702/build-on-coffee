export const cybersecuritySteps = [
  {
    title: "1. Cybersecurity Basics",
    description:
      "Begin your cybersecurity journey by grasping the foundational concepts, including the core principles of security, common threats, and basic defense mechanisms. In 2025, with the rise of AI-driven attacks and quantum threats, understanding these basics is essential for building resilience against evolving cyber risks.",
    topics: [
      "CIA Triad (Confidentiality, Integrity, Availability)",
      "Common Cyber Threats and Attack Vectors",
      "Basic Security Controls and Risk Management",
      "Introduction to Cryptography and Encryption",
      "Emerging Trends like AI in Cybersecurity"
    ],
    resources: [
      { name: "NIST Cybersecurity Framework", link: "https://www.nist.gov/cyberframework" },
      { name: "Coursera: Foundations of Cybersecurity", link: "https://www.coursera.org/learn/foundations-of-cybersecurity" },
      { name: "Cyber Security Roadmap", link: "https://roadmap.sh/cyber-security" }
    ],
    videos: [
      { name: "Cybersecurity Full Course 2025", link: "https://www.youtube.com/watch?v=-n7iaQVF88A" },
      { name: "How I Would Learn Cyber Security If I Could Start Over", link: "https://www.youtube.com/watch?v=rz0RL4Xue-A" },
      { name: "The Hacker's Roadmap (How to Get Started in IT in 2025)", link: "https://www.youtube.com/watch?v=5xWnmUEi1Qw" }
    ],
  },
  {
    title: "2. Networking Fundamentals",
    description:
      "Master the essentials of computer networking, which form the backbone of cybersecurity. Learn about protocols, architectures, and basic security measures to identify and mitigate network-based vulnerabilities in modern connected environments.",
    topics: [
      "OSI and TCP/IP Models",
      "IP Addressing, Subnetting, and Routing",
      "Common Network Protocols (TCP, UDP, HTTP, etc.)",
      "Network Devices (Routers, Switches, Firewalls)",
      "Basic Network Security Concepts (VPNs, IDS/IPS)"
    ],
    resources: [
      { name: "Cisco Networking Basics", link: "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html" },
      { name: "Professor Messer's CompTIA Network+ Course", link: "https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/" }
    ],
    videos: [
      { name: "NetworkChuck: Networking for Beginners", link: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
      { name: "David Bombal: Networking Fundamentals", link: "https://www.youtube.com/watch?v=3QhU9jd03a0" }
    ],
  },
  {
    title: "3. Secure Coding",
    description:
      "Develop skills to write secure software by following best practices that prevent vulnerabilities from being introduced during the coding phase. In 2025, with increasing focus on DevSecOps, secure coding is integral to the software development lifecycle.",
    topics: [
      "Input Validation and Sanitization",
      "Authentication and Session Management",
      "Error Handling and Secure Logging",
      "Secure Data Storage and Transmission",
      "Avoiding Common Vulnerabilities (e.g., Buffer Overflows, Race Conditions)"
    ],
    resources: [
      { name: "OWASP Secure Coding Practices Checklist", link: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/" },
      { name: "Secure Coding Guidelines for Java SE", link: "https://www.oracle.com/java/technologies/javase/seccodeguide.html" },
      { name: "Berkeley Secure Coding Practice Guidelines", link: "https://security.berkeley.edu/secure-coding-practice-guidelines" }
    ],
    videos: [
      { name: "Computer Hackers: Secure Coding Basics", link: "https://youtu.be/udqYmaeV--k?si=CkfS4_Tygg6bArER" }, 
      { name: "The Cyber Mentor: Secure Coding Practices", link: "https://www.youtube.com/watch?v=rz0RL4Xue-A" } 
    ],
  },
  {
    title: "4. OWASP Top 10",
    description:
      "Study the OWASP Top 10, a list of the most critical security risks to web applications. Learn to recognize, exploit, and remediate these vulnerabilities to protect modern web-based systems effectively.",
    topics: [
      "A01: Injection",
      "A02: Broken Authentication",
      "A03: Sensitive Data Exposure",
      "A04: XML External Entities (XXE)",
      "A05: Broken Access Control",
      "A06: Security Misconfiguration",
      "A07: Cross-Site Scripting (XSS)",
      "A08: Insecure Deserialization",
      "A09: Using Components with Known Vulnerabilities",
      "A10: Insufficient Logging & Monitoring"
    ],
    resources: [
      { name: "OWASP Top Ten Project", link: "https://owasp.org/www-project-top-ten/" },
      { name: "OWASP Top 10 2021", link: "https://owasp.org/Top10/" }
    ],
    videos: [
      { name: "OWASP Top 10 Explained", link: "https://www.youtube.com/watch?v=Zc5N3C51G6A" },
      { name: "OWASP Top 10 Web Application Attacks", link: "https://www.youtube.com/watch?v=vma62Kvjnuo" },
      { name: "F5: 2021 OWASP Top 10 Video Series", link: "https://www.f5.com/resources/videos/2021-owasp-top-10-video-series" }
    ],
  },
  {
    title: "5. Kali Linux",
    description:
      "Dive into Kali Linux, the leading operating system for ethical hacking and penetration testing. Master its installation, interface, and core utilities to prepare for advanced security tasks.",
    topics: [
      "Installation and Configuration",
      "Basic Command-Line Operations",
      "File Management and Permissions",
      "Package Installation and Updates",
      "Customizing the Kali Environment"
    ],
    resources: [
      { name: "Kali Linux Official Documentation", link: "https://www.kali.org/docs/" },
      { name: "Kali Linux Tutorial for Beginners", link: "https://www.stationx.net/kali-linux-tutorial/" }
    ],
    videos: [
      { name: "Kali Linux For Beginners 2025", link: "https://www.youtube.com/watch?v=G59CmfxQ5nk" },
      { name: "Linux for Ethical Hackers (Kali Linux Tutorial)", link: "https://www.youtube.com/watch?v=lZAoFs75_cs" },
      { name: "Beginners Guide to Kali Linux", link: "https://www.youtube.com/watch?v=aqiXxs0-Og0" }
    ],
  },
  {
    title: "6. Penetration Testing Tools",
    description:
      "Explore a suite of powerful tools used in penetration testing. Learn to conduct scans, exploits, and analyses to simulate real-world attacks and identify weaknesses.",
    topics: [
      "Network Scanning (Nmap, Nessus)",
      "Vulnerability Exploitation (Metasploit)",
      "Web Application Testing (Burp Suite, OWASP ZAP)",
      "Password Cracking (Hashcat, John the Ripper)",
      "Wireless and Social Engineering Tools"
    ],
    resources: [
      { name: "Awesome Penetration Testing GitHub", link: "https://github.com/wtsxDev/Penetration-Testing" },
      { name: "Top Penetration Testing Tools", link: "https://www.esecurityplanet.com/applications/open-source-penetration-testing-tools/" },
      { name: "HackerOne: 7 Pentesting Tools", link: "https://www.hackerone.com/knowledge-center/7-pentesting-tools-you-must-know-about" }
    ],
    videos: [
      { name: "NMAP Basics Tutorial for Kali Linux Beginners", link: "https://www.youtube.com/watch?v=W7076RPIgfQ" },
      { name: "Full Hands-On Ethical Hacking Course with Kali Linux", link: "https://www.youtube.com/watch?v=W013Y3UInoQ" }
    ],
  },
  {
    title: "7. Cloud Security",
    description:
      "Address security challenges in cloud computing environments. Learn to secure resources on major platforms like AWS, Azure, and Google Cloud, focusing on compliance, encryption, and threat detection in 2025's hybrid cloud landscapes.",
    topics: [
      "Cloud Shared Responsibility Model",
      "Identity and Access Management (IAM)",
      "Data Encryption and Key Management",
      "Network Security and VPCs",
      "Compliance Standards (GDPR, HIPAA) and Auditing"
    ],
    resources: [
      { name: "Cloud Security Alliance (CSA)", link: "https://cloudsecurityalliance.org/" },
      { name: "Certificate of Cloud Security Knowledge (CCSK)", link: "https://cloudsecurityalliance.org/education/ccsk" },
      { name: "AWS Security Documentation", link: "https://docs.aws.amazon.com/security/" }
    ],
    videos: [
      { name: "Cloud Security Training by SANS", link: "https://www.sans.org/cybersecurity-focus-areas/cloud-security" }, // Not direct video, but resource
      { name: "Google Cloud Security Fundamentals", link: "https://youtu.be/nusk1YHxb_4?si=REGsPd5h6nHjuIOG" } // Placeholder
    ],
  },
  {
    title: "8. Certifications and Practice Labs",
    description:
      "Pursue certifications like CEH and OSCP to validate your skills. Engage in hands-on practice using labs and CTF platforms to apply knowledge in simulated real-world scenarios.",
    topics: [
      "Certified Ethical Hacker (CEH) Preparation",
      "Offensive Security Certified Professional (OSCP) Strategies",
      "Other Certifications (CompTIA Security+, CCSP)",
      "Hands-On Labs and Capture The Flag (CTF) Challenges",
      "Building a Personal Lab Environment"
    ],
    resources: [
      { name: "EC-Council CEH Certification", link: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/" },
      { name: "Offensive Security OSCP", link: "https://www.offsec.com/courses/pen-200/" },
      { name: "Awesome OSCP Resources", link: "https://github.com/0x4D31/awesome-oscp" },
      { name: "TryHackMe Platform", link: "https://tryhackme.com/" },
      { name: "HackTheBox Platform", link: "https://www.hackthebox.com/" }
    ],
    videos: [
      { name: "CEH v13 Certification Training", link: "https://www.youtube.com/watch?v=-n7iaQVF88A" },
      { name: "How to Prepare for the OSCP Certification", link: "https://www.youtube.com/watch?v=77FN8Ja0C4Q" } // Adapted
    ],
  },
];