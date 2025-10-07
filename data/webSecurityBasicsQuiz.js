
export const webSecurityBasicsQuiz = {
  questions: {
    beginner: [
      {
        question: "What does HTTPS stand for?",
        options: [
          "HyperText Transfer Protocol Secure",
          "HyperText Transfer Protocol Standard",
          "HyperText Transfer Protocol Simple",
          "HyperText Transfer Protocol Service",
        ],
        answer: "HyperText Transfer Protocol Secure",
      },
      {
        question: "What is the purpose of a firewall?",
        options: [
          "To prevent unauthorized access to a network",
          "To speed up internet connection",
          "To store website data",
          "To block all incoming traffic",
        ],
        answer: "To prevent unauthorized access to a network",
      },
      {
        question: "Which of the following is a common type of malware?",
        options: ["Virus", "Cookie", "Cache", "Firewall"],
        answer: "Virus",
      },
      {
        question: "What is a phishing attack?",
        options: [
          "An attempt to trick users into revealing sensitive information",
          "A type of network hardware",
          "A method to clean up computer viruses",
          "A way to secure a website",
        ],
        answer: "An attempt to trick users into revealing sensitive information",
      },
      {
        question: "What is the role of an SSL/TLS certificate?",
        options: [
          "To encrypt data between a web server and a browser",
          "To block spam emails",
          "To increase website loading speed",
          "To store user passwords",
        ],
        answer: "To encrypt data between a web server and a browser",
      },
      {
        question: "What is a strong password?",
        options: [
          "A password that is long and contains a mix of characters",
          "A password that is easy to remember, like '123456'",
          "A password that is the same for all accounts",
          "A password that is your name",
        ],
        answer: "A password that is long and contains a mix of characters",
      },
      {
        question: "What does SQL injection refer to?",
        options: [
          "A technique to manipulate a database by inserting malicious SQL code",
          "A way to speed up database queries",
          "A type of database software",
          "A method to secure a database",
        ],
        answer: "A technique to manipulate a database by inserting malicious SQL code",
      },
      {
        question: "What is two-factor authentication (2FA)?",
        options: [
          "A security process that requires two different authentication factors",
          "A method to bypass a login screen",
          "A type of antivirus software",
          "A way to share passwords securely",
        ],
        answer: "A security process that requires two different authentication factors",
      },
      {
        question: "What is Cross-Site Scripting (XSS)?",
        options: [
          "A vulnerability that allows attackers to inject malicious scripts into web pages",
          "A way to style web pages",
          "A type of web hosting",
          "A method to block scripts from running",
        ],
        answer: "A vulnerability that allows attackers to inject malicious scripts into web pages",
      },
      {
        question: "Why is it important to keep software updated?",
        options: [
          "To patch security vulnerabilities",
          "To change the user interface",
          "To slow down the computer",
          "To use more disk space",
        ],
        answer: "To patch security vulnerabilities",
      },
    ],
    intermediate: [
      {
        question: "What is the principle of least privilege?",
        options: [
          "Granting only the necessary permissions for a user or system to perform its task",
          "Giving all users administrative rights",
          "Allowing access to all resources by default",
          "Restricting access based on time of day",
        ],
        answer: "Granting only the necessary permissions for a user or system to perform its task",
      },
      {
        question: "What is a CSRF (Cross-Site Request Forgery) attack?",
        options: [
          "An attack that tricks a user into performing an unwanted action on a web application",
          "An attack that steals cookies",
          "An attack that injects malicious scripts",
          "An attack that crashes a server",
        ],
        answer: "An attack that tricks a user into performing an unwanted action on a web application",
      },
      {
        question: "What is the difference between symmetric and asymmetric encryption?",
        options: [
          "Symmetric uses one key for both encryption and decryption, while asymmetric uses two different keys",
          "Symmetric is less secure than asymmetric",
          "Symmetric is only used for files, while asymmetric is for communication",
          "Symmetric is faster than asymmetric",
        ],
        answer: "Symmetric uses one key for both encryption and decryption, while asymmetric uses two different keys",
      },
      {
        question: "What is a Content Security Policy (CSP)?",
        options: [
          "A security feature that helps prevent XSS and other code injection attacks",
          "A policy for managing user-generated content",
          "A set of rules for password strength",
          "A way to block certain IP addresses",
        ],
        answer: "A security feature that helps prevent XSS and other code injection attacks",
      },
      {
        question: "What is a DDoS (Distributed Denial-of-Service) attack?",
        options: [
          "An attack that overwhelms a server with traffic from multiple sources",
          "An attack that steals data from a server",
          "An attack that modifies website content",
          "An attack that targets a single user",
        ],
        answer: "An attack that overwhelms a server with traffic from multiple sources",
      },
      {
        question: "What are HTTP security headers?",
        options: [
          "Headers that provide an extra layer of security by restricting browser behaviors",
          "Headers that contain user authentication information",
          "Headers that cache website content",
          "Headers that define the content type of a response",
        ],
        answer: "Headers that provide an extra layer of security by restricting browser behaviors",
      },
      {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        options: [
          "To create a secure and encrypted connection over a public network",
          "To increase internet speed",
          "To block ads on websites",
          "To host a website",
        ],
        answer: "To create a secure and encrypted connection over a public network",
      },
      {
        question: "What is security through obscurity?",
        options: [
          "A discredited security approach that relies on hiding system details to protect it",
          "A recommended security best practice",
          "A type of encryption algorithm",
          "A method for detecting intrusions",
        ],
        answer: "A discredited security approach that relies on hiding system details to protect it",
      },
      {
        question: "What is a honeypot in cybersecurity?",
        options: [
          "A decoy system used to attract and trap attackers",
          "A secure storage for passwords",
          "A tool for encrypting network traffic",
          "A type of firewall",
        ],
        answer: "A decoy system used to attract and trap attackers",
      },
      {
        question: "What is the role of a Web Application Firewall (WAF)?",
        options: [
          "To filter and monitor HTTP traffic between a web application and the internet",
          "To block all traffic from a specific country",
          "To speed up a web application",
          "To store website logs",
        ],
        answer: "To filter and monitor HTTP traffic between a web application and the internet",
      },
    ],
    advanced: [
      {
        question: "What is a Zero-Day vulnerability?",
        options: [
          "A security flaw that is known to the software vendor but has not been patched yet",
          "A vulnerability that has been patched",
          "A vulnerability that only affects outdated software",
          "A vulnerability that is impossible to exploit",
        ],
        answer: "A security flaw that is known to the software vendor but has not been patched yet",
      },
      {
        question: "What is the difference between a threat, a vulnerability, and a risk?",
        options: [
          "A threat is a potential for harm, a vulnerability is a weakness, and a risk is the likelihood of a threat exploiting a vulnerability",
          "A threat is a weakness, a vulnerability is a potential for harm, and a risk is the likelihood of a threat exploiting a vulnerability",
          "A threat is the likelihood of a threat exploiting a vulnerability, a vulnerability is a weakness, and a risk is a potential for harm",
          "They all mean the same thing",
        ],
        answer: "A threat is a potential for harm, a vulnerability is a weakness, and a risk is the likelihood of a threat exploiting a vulnerability",
      },
      {
        question: "What is a side-channel attack?",
        options: [
          "An attack based on information gained from the implementation of a computer system, rather than weaknesses in the algorithm itself",
          "An attack that targets the side of a computer",
          "An attack that is carried out through a secondary communication channel",
          "An attack that is not a direct attack",
        ],
        answer: "An attack based on information gained from the implementation of a computer system, rather than weaknesses in the algorithm itself",
      },
      {
        question: "What is the purpose of DNSSEC?",
        options: [
          "To provide authentication and integrity for DNS responses",
          "To encrypt DNS queries",
          "To speed up DNS lookups",
          "To block malicious domains",
        ],
        answer: "To provide authentication and integrity for DNS responses",
      },
      {
        question: "What is a sandbox in the context of web security?",
        options: [
          "A restricted environment in which to run code, to limit the potential harm it can do",
          "A tool for testing website performance",
          "A type of firewall",
          "A secure storage for sensitive data",
        ],
        answer: "A restricted environment in which to run code, to limit the potential harm it can do",
      },
      {
        question: "What is a timing attack?",
        options: [
          "A side-channel attack in which the attacker attempts to compromise a cryptosystem by analyzing the time taken to execute cryptographic algorithms",
          "An attack that is scheduled to occur at a specific time",
          "An attack that targets the system clock",
          "An attack that slows down a system",
        ],
        answer: "A side-channel attack in which the attacker attempts to compromise a cryptosystem by analyzing the time taken to execute cryptographic algorithms",
      },
      {
        question: "What is the purpose of the 'secure' flag on a cookie?",
        options: [
          "To ensure the cookie is only sent over HTTPS",
          "To prevent the cookie from being accessed by JavaScript",
          "To make the cookie expire after a certain time",
          "To encrypt the cookie",
        ],
        answer: "To ensure the cookie is only sent over HTTPS",
      },
      {
        question: "What is a Man-in-the-Middle (MitM) attack?",
        options: [
          "An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
          "An attack that targets the middle of a network",
          "An attack that is carried out by a person in the middle of a room",
          "An attack that is not a direct attack",
        ],
        answer: "An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other",
      },
      {
        question: "What is the purpose of the 'HttpOnly' flag on a cookie?",
        options: [
          "To prevent the cookie from being accessed by JavaScript",
          "To ensure the cookie is only sent over HTTPS",
          "To make the cookie expire after a certain time",
          "To encrypt the cookie",
        ],
        answer: "To prevent the cookie from being accessed by JavaScript",
      },
      {
        question: "What is a buffer overflow vulnerability?",
        options: [
          "A vulnerability that occurs when a program writes data beyond the boundary of a buffer, overwriting adjacent memory locations",
          "A vulnerability that occurs when a program runs out of memory",
          "A vulnerability that occurs when a program is too slow",
          "A vulnerability that occurs when a program is too fast",
        ],
        answer: "A vulnerability that occurs when a program writes data beyond the boundary of a buffer, overwriting adjacent memory locations",
      },
    ],
  },
};
