
export const networkingFundamentalsQuiz = {
  title: "Networking Fundamentals Quiz",
  questions: {
    beginner: [
      {
        question: "What is a computer network?",
        options: [
          "A single computer",
          "A collection of interconnected computers and devices that can share resources",
          "A type of software",
          "A programming language"
        ],
        answer: "A collection of interconnected computers and devices that can share resources"
      },
      {
        question: "What does LAN stand for?",
        options: [
          "Local Area Network",
          "Large Area Network",
          "Long Access Network",
          "Limited Area Network"
        ],
        answer: "Local Area Network"
      },
      {
        question: "What does WAN stand for?",
        options: [
          "Wide Area Network",
          "Wireless Area Network",
          "Web Access Network",
          "World Area Network"
        ],
        answer: "Wide Area Network"
      },
      {
        question: "What is an IP address?",
        options: [
          "A unique numerical label assigned to each device connected to a computer network",
          "A type of cable",
          "A software program",
          "A website address"
        ],
        answer: "A unique numerical label assigned to each device connected to a computer network"
      },
      {
        question: "What is a router?",
        options: [
          "A device that connects multiple networks and forwards data packets between them",
          "A device that stores data",
          "A device that prints documents",
          "A device that displays images"
        ],
        answer: "A device that connects multiple networks and forwards data packets between them"
      },
      {
        question: "What is a switch?",
        options: [
          "A device that connects devices within a local area network (LAN) and forwards data to the intended recipient",
          "A device that connects to the internet",
          "A device that provides wireless connectivity",
          "A device that converts analog signals to digital signals"
        ],
        answer: "A device that connects devices within a local area network (LAN) and forwards data to the intended recipient"
      },
      {
        question: "What is the purpose of a firewall?",
        options: [
          "To prevent unauthorized access to a network",
          "To speed up network traffic",
          "To store network configurations",
          "To monitor network performance"
        ],
        answer: "To prevent unauthorized access to a network"
      },
      {
        question: "What is a protocol?",
        options: [
          "A set of rules that govern how data is transmitted over a network",
          "A type of network cable",
          "A software program",
          "A hardware device"
        ],
        answer: "A set of rules that govern how data is transmitted over a network"
      },
      {
        question: "What is HTTP?",
        options: [
          "HyperText Transfer Protocol, used for transmitting web pages",
          "HyperText Markup Language",
          "A type of network device",
          "A programming language"
        ],
        answer: "HyperText Transfer Protocol, used for transmitting web pages"
      },
      {
        question: "What is DNS?",
        options: [
          "Domain Name System, which translates human-readable domain names into IP addresses",
          "Data Network Service",
          "Digital Naming System",
          "Dynamic Network Security"
        ],
        answer: "Domain Name System, which translates human-readable domain names into IP addresses"
      }
    ],
    intermediate: [
      {
        question: "What is the OSI model?",
        options: [
          "Open Systems Interconnection model, a conceptual framework that describes network functions in seven layers",
          "Operating System Interface model",
          "Optical Signal Integration model",
          "Online Service Infrastructure model"
        ],
        answer: "Open Systems Interconnection model, a conceptual framework that describes network functions in seven layers"
      },
      {
        question: "Which layer of the OSI model is responsible for logical addressing (IP addresses)?",
        options: [
          "Physical Layer",
          "Data Link Layer",
          "Network Layer",
          "Transport Layer"
        ],
        answer: "Network Layer"
      },
      {
        question: "Which layer of the OSI model is responsible for reliable data transfer (TCP/UDP)?",
        options: [
          "Network Layer",
          "Transport Layer",
          "Session Layer",
          "Presentation Layer"
        ],
        answer: "Transport Layer"
      },
      {
        question: "What is TCP?",
        options: [
          "Transmission Control Protocol, a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of a stream of octets between applications",
          "Total Control Protocol",
          "Transfer Communication Protocol",
          "Technical Control Protocol"
        ],
        answer: "Transmission Control Protocol, a connection-oriented protocol that provides reliable, ordered, and error-checked delivery of a stream of octets between applications"
      },
      {
        question: "What is UDP?",
        options: [
          "User Datagram Protocol, a connectionless protocol that provides unreliable, unordered delivery of data",
          "Universal Data Protocol",
          "Unicast Datagram Protocol",
          "Unified Data Protocol"
        ],
        answer: "User Datagram Protocol, a connectionless protocol that provides unreliable, unordered delivery of data"
      },
      {
        question: "What is a subnet mask?",
        options: [
          "A 32-bit number that divides an IP address into network and host addresses",
          "A security feature for networks",
          "A type of network cable",
          "A device that filters network traffic"
        ],
        answer: "A 32-bit number that divides an IP address into network and host addresses"
      },
      {
        question: "What is DHCP?",
        options: [
          "Dynamic Host Configuration Protocol, used for automatically assigning IP addresses to devices on a network",
          "Domain Host Control Protocol",
          "Data Handling Control Protocol",
          "Digital Host Configuration Protocol"
        ],
        answer: "Dynamic Host Configuration Protocol, used for automatically assigning IP addresses to devices on a network"
      },
      {
        question: "What is NAT?",
        options: [
          "Network Address Translation, a method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device",
          "Network Access Technology",
          "New Address Type",
          "Node Access Translation"
        ],
        answer: "Network Address Translation, a method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device"
      },
      {
        question: "What is a VPN?",
        options: [
          "Virtual Private Network, which extends a private network across a public network, and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network",
          "Very Private Network",
          "Virtual Public Network",
          "Verified Private Network"
        ],
        answer: "Virtual Private Network, which extends a private network across a public network, and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network"
      },
      {
        question: "What is the purpose of a gateway?",
        options: [
          "A network node that serves as an access point to another network",
          "A device that stores data",
          "A device that prints documents",
          "A device that displays images"
        ],
        answer: "A network node that serves as an access point to another network"
      }
    ],
    advanced: [
      {
        question: "What is BGP?",
        options: [
          "Border Gateway Protocol, a routing protocol that enables the exchange of routing information between autonomous systems (AS) on the internet",
          "Basic Gateway Protocol",
          "Binary Gateway Protocol",
          "Broadband Gateway Protocol"
        ],
        answer: "Border Gateway Protocol, a routing protocol that enables the exchange of routing information between autonomous systems (AS) on the internet"
      },
      {
        question: "What is MPLS?",
        options: [
          "Multiprotocol Label Switching, a routing technique in telecommunications networks that directs data from one network node to the next based on short path labels rather than long network addresses",
          "Multi-Purpose Labeling System",
          "Managed Packet Labeling System",
          "Mobile Packet Layer Switching"
        ],
        answer: "Multiprotocol Label Switching, a routing technique in telecommunications networks that directs data from one network node to the next based on short path labels rather than long network addresses"
      },
      {
        question: "What is SDN?",
        options: [
          "Software-Defined Networking, an architecture that decouples the network control and forwarding functions, enabling network administration to become programmable and abstracting underlying infrastructure from applications and network services",
          "Standard Data Network",
          "Secure Data Network",
          "Systematic Data Network"
        ],
        answer: "Software-Defined Networking, an architecture that decouples the network control and forwarding functions, enabling network administration to become programmable and abstracting underlying infrastructure from applications and network services"
      },
      {
        question: "What is a VLAN?",
        options: [
          "Virtual Local Area Network, a logical grouping of network devices that allows them to communicate as if they were on the same physical network, regardless of their actual physical location",
          "Very Large Area Network",
          "Video Local Area Network",
          "Voice Local Area Network"
        ],
        answer: "Virtual Local Area Network, a logical grouping of network devices that allows them to communicate as if they were on the same physical network, regardless of their actual physical location"
      },
      {
        question: "What is the purpose of a load balancer?",
        options: [
          "To distribute network traffic across multiple servers to ensure high availability and reliability",
          "To store network configurations",
          "To monitor network performance",
          "To prevent unauthorized access to a network"
        ],
        answer: "To distribute network traffic across multiple servers to ensure high availability and reliability"
      },
      {
        question: "What is a proxy server?",
        options: [
          "A server that acts as an intermediary for requests from clients seeking resources from other servers",
          "A server that stores data",
          "A server that prints documents",
          "A server that displays images"
        ],
        answer: "A server that acts as an intermediary for requests from clients seeking resources from other servers"
      },
      {
        question: "What is the difference between a forward proxy and a reverse proxy?",
        options: [
          "A forward proxy sits in front of clients and forwards requests to servers, while a reverse proxy sits in front of servers and forwards requests from clients",
          "There is no difference",
          "A forward proxy is for security, while a reverse proxy is for performance",
          "A forward proxy is for internal networks, while a reverse proxy is for external networks"
        ],
        answer: "A forward proxy sits in front of clients and forwards requests to servers, while a reverse proxy sits in front of servers and forwards requests from clients"
      },
      {
        question: "What is a Content Delivery Network (CDN)?",
        options: [
          "A geographically distributed network of proxy servers and their data centers, which work together to provide fast delivery of Internet content",
          "A single server that stores all content",
          "A private network for a single organization",
          "A type of local area network (LAN)"
        ],
        answer: "A geographically distributed network of proxy servers and their data centers, which work together to provide fast delivery of Internet content"
      },
      {
        question: "What is the purpose of a network segmentation?",
        options: [
          "To divide a computer network into smaller subnetworks, each acting as its own broadcast domain",
          "To combine multiple networks into one",
          "To speed up network traffic",
          "To prevent unauthorized access to a network"
        ],
        answer: "To divide a computer network into smaller subnetworks, each acting as its own broadcast domain"
      },
      {
        question: "What is a network topology?",
        options: [
          "The arrangement of the various elements (links, nodes, etc.) of a computer network",
          "The speed of a network",
          "The security of a network",
          "The cost of a network"
        ],
        answer: "The arrangement of the various elements (links, nodes, etc.) of a computer network"
      }
    ]
  }
};
