// =============================================================================
// PORTFOLIO DATA CONFIGURATION
// =============================================================================
// This file contains all portfolio data for easy maintenance and updates.
// Simply modify the values here to update content across the entire site.
// =============================================================================

import { Code2, Zap, Target, GraduationCap } from "lucide-react";

// PERSONAL INFORMATION
// =============================================================================
export const personalInfo = {
  name: "Rudraksh Taya",
  shortName: "Rudraksh",
  title: "Software Engineer",
  subtitle: "Full Stack Developer",
  tagline: "Building Scalable Systems & Solving Real-World Problems with Code.",
  bio: {
    short: "A passionate B.Tech Computer Science student from Chitkara University (2022–2026), combining full-stack development skills with strong computer science fundamentals.",
    detailed: "I excel in problem-solving through programming, having solved 250+ DSA problems in Java and C++, while also building modern web applications with React, Node.js, and databases. My approach bridges theoretical CS knowledge with practical software development experience."
  },
  university: {
    name: "Chitkara University",
    degree: "B.Tech Computer Science Engineering",
    duration: "2022–2026",
    cgpa: "8.7"
  },
  location: "Haryana, India",
  email: "rudrakshtaya8777@gmail.com",
  phone: "+91 9050832038"
};

// SOCIAL LINKS
// =============================================================================
export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/rudrakshtaya",
    color: "text-white"
  },
  {
    name: "LinkedIn", 
    icon: "Linkedin",
    url: "https://linkedin.com/in/rudrakshtaya",
    color: "text-neon-blue"
  },
  {
    name: "LeetCode",
    icon: "Code2", 
    url: "https://leetcode.com/rudrakshtaya",
    color: "text-neon-cyan"
  },
  // {
  //   name: "HackerRank",
  //   icon: "Trophy",
  //   url: "https://hackerrank.com/rudrakshtaya", 
  //   color: "text-neon-green"
  // }
];

// NAVIGATION ITEMS
// =============================================================================
export const navigation = {
  core: [
    // { name: "Home", href: "#home", icon: "🏠" },
    { name: "CS Skills", href: "#cs-strengths", icon: "🧠" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Contact", href: "#contact", icon: "📧" }
  ],
  more: [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
   // { name: "CS Skills", href: "#cs-strengths", icon: "🧠" },
    { name: "High-Tech CSE", href: "#high-tech-cse", icon: "⚡" },
    { name: "Experience", href: "#experience", icon: "🎯" },
    { name: "GitHub Stats", href: "#github-stats", icon: "📊" },
    { name: "Certifications", href: "#certifications", icon: "🏆" }
  ]
};

// STATISTICS & ACHIEVEMENTS
// =============================================================================
export const stats = {
  hero: [
    { label: "250+ DSA Problems", color: "neon-green" },
    { label: "10+ Full Stack Projects", color: "neon-blue" },
    { label: "Strong CS Fundamentals", color: "neon-purple" }
  ],
  about: [
    { icon: Code2, label: "DSA Problems", value: "250+", color: "text-neon-purple", bgColor: "bg-neon-purple" },
    { icon: Zap, label: "Full Stack Projects", value: "10+", color: "text-neon-blue", bgColor: "bg-neon-blue" },
    { icon: Target, label: "Programming Languages", value: "6+", color: "text-neon-cyan", bgColor: "bg-neon-cyan" },
    { icon: GraduationCap, label: "Current CGPA", value: "8.2", color: "text-neon-green", bgColor: "bg-neon-green" }
  ],
  csStrengths: [
    { label: "DSA Problems", value: "250+", color: "neon-purple" },
    { label: "CS Projects", value: "25+", color: "neon-blue" },
    { label: "Core Subjects", value: "6+", color: "neon-cyan" },
    { label: "Average Grade", value: "A+", color: "neon-green" }
  ]
};

// TECHNICAL SKILLS
// =============================================================================
export const skills = {
  programming: [
    { name: "Java", level: 92, color: "bg-orange-500", category: "Programming" },
    { name: "C++", level: 88, color: "bg-blue-600", category: "Programming" },
    { name: "Python", level: 85, color: "bg-green-500", category: "Programming" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500", category: "Web Dev" }
  ],
  webTech: [
    { name: "React", level: 88, color: "bg-cyan-400", category: "Frontend" },
    { name: "Node.js", level: 85, color: "bg-green-600", category: "Backend" },
    { name: "Express", level: 82, color: "bg-gray-600", category: "Backend" },
    { name: "MongoDB", level: 80, color: "bg-green-400", category: "Database" }
  ],
  csFundamentals: [
    { name: "DSA", level: 90, color: "bg-purple-500", category: "CS Core" },
    { name: "DBMS", level: 85, color: "bg-blue-500", category: "CS Core" },
    { name: "OS", level: 82, color: "bg-red-500", category: "CS Core" },
    { name: "OOPs", level: 88, color: "bg-indigo-500", category: "CS Core" }
  ],
  techStack: [
    { name: "Java", icon: "☕", color: "bg-orange-500", category: "Programming Language" },
    { name: "C++", icon: "⚡", color: "bg-blue-600", category: "Programming Language" },
    { name: "Python", icon: "🐍", color: "bg-green-500", category: "Programming Language" },
    { name: "React", icon: "⚛️", color: "bg-cyan-400", category: "Frontend Framework" },
    { name: "Node.js", icon: "🟢", color: "bg-green-600", category: "Backend Runtime" },
    { name: "Express", icon: "🚀", color: "bg-gray-600", category: "Backend Framework" },
    { name: "MySQL", icon: "🗄️", color: "bg-blue-500", category: "Database" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-400", category: "Database" }
  ]
};

// ACADEMIC HIGHLIGHTS
// =============================================================================
export const academicHighlights = [
  {
    title: "Data Structures & Algorithms",
    detail: "250+ problems solved on LeetCode, GeeksforGeeks",
    icon: "💡",
    technologies: ["Java", "C++"],
    color: "border-neon-purple/30 bg-neon-purple/5"
  },
  {
    title: "Operating Systems",
    detail: "Memory Management, Process Scheduling, Deadlock Handling",
    icon: "🖥️",
    technologies: ["System Calls " ],
    color: "border-neon-blue/30 bg-neon-blue/5"
  },
  {
    title: "Database Management",
    detail: "Normalization, Indexing, Query Optimization, Joins",
    icon: "🗄️",
    technologies: ["MySQL", "MongoDB"],
    color: "border-neon-cyan/30 bg-neon-cyan/5"
  },
  {
    title: "Object-Oriented Programming",
    detail: "Inheritance, Polymorphism, Encapsulation, Abstraction",
    icon: "🧬",
    technologies: ["Java", "C++"],
    color: "border-neon-green/30 bg-neon-green/5"
  },
  {
    title: "Computer Networks",
    detail: "TCP/IP, OSI Model, HTTP, WebSockets",
    icon: "🌐",
    technologies: ["REST APIs", "WebSockets", "DNS"],
    color: "border-neon-pink/30 bg-neon-pink/5"
  },
  {
    title: "Software Engineering",
    detail: "SDLC, Testing, Version Control",
    icon: "⚙️",
    technologies: ["Git", "Agile"],
    color: "border-yellow-400/30 bg-yellow-400/5"
  }
];

// COMPUTER SCIENCE TOPICS
// =============================================================================
export const csTopics = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "Brain",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple",
    borderColor: "border-neon-purple",
    description: "Strong foundation in algorithmic thinking and problem-solving",
    stats: {
      problems: "250+",
      platforms: "LeetCode, GFG, InterviewBit",
      languages: "Java, C++",
      //rating: "1847"
    },
    concepts: [
      {
        category: "Linear Structures",
        items: ["Arrays", "Linked Lists", "Stacks", "Queues", "Deques"],
        icon: "📚"
      },
      {
        category: "Non-Linear Structures",
        items: ["Binary Trees", "BST", "Heaps", "Graphs"],
        icon: "🌳"
      },
      {
        category: "Advanced Algorithms",
        items: ["Dynamic Programming", "Greedy", "Backtracking", "Divide & Conquer"],
        icon: "🧩"
      },
      {
        category: "Graph Algorithms",
        items: ["DFS", "BFS", "Dijkstra", "Minimum Spanning Tree"],
        icon: "🕸️"
      }
    ],
    projects: [
      "Pathfinding Visualizer (A* Algorithm)",
      "Sorting Algorithm Visualizer", 
      "Graph Traversal Implementation"
    ]
  },
  {
    id: "os",
    title: "Operating Systems",
    icon: "Cpu",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue",
    borderColor: "border-neon-blue",
    description: "Deep understanding of system-level programming and OS concepts",
    stats: {
      //projects: "5+",
     // languages: "C, C++",
      focus: "Memory & Process Management",
      grade: "A+"
    },
    concepts: [
      {
        category: "Process Management",
        items: ["Process Scheduling", "Inter-Process Communication", "Synchronization", "Deadlocks"],
        icon: "⚙️"
      },
      {
        category: "Memory Management",
        items: ["Virtual Memory", "Paging", "Segmentation", "Memory Allocation"],
        icon: "🧠"
      },
      {
        category: "File Systems",
        items: ["File Organization", "Directory Structure", "File Allocation", "Disk Scheduling"],
        icon: "📁"
      },
      {
        category: "Security & Protection",
        items: ["Access Control", "Authentication", "Encryption", "System Calls"],
        icon: "🔒"
      }
    ],
    projects: [
      "Process Scheduler Simulation (C++)",
      "Memory Management Simulator",
      "File System Implementation"
    ]
  },
  {
    id: "dbms",
    title: "Database Management",
    icon: "Database",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan",
    borderColor: "border-neon-cyan",
    description: "Expertise in database design, optimization, and management",
    stats: {
      systems: "MySQL, MongoDB",
      projects: "5+",
      concepts: "Advanced SQL",
      certification: "Oracle DB"
    },
    concepts: [
      {
        category: "Database Design",
        items: ["ER Modeling", "Normalization", "Schema Design", "Constraints"],
        icon: "🎯"
      },
      {
        category: "SQL & Query Optimization",
        items: ["Complex Queries", "Joins", "Indexing", "Query Planning"],
        icon: "⚡"
      },
      {
        category: "Transaction Management",
        items: ["ACID Properties", "Concurrency Control", "Locking", "Recovery"],
        icon: "🔄"
      },
      {
        category: "NoSQL & Modern DBs",
        items: ["MongoDB", "Document Stores", "Aggregation", "Replication"],
        icon: "🍃"
      }
    ],
    projects: [
      "University Management System (MySQL)",
      "E-commerce Database Design",
      "MongoDB Aggregation Pipeline"
    ]
  },
  {
    id: "oops",
    title: "Object-Oriented Programming",
    icon: "Layers",
    color: "text-neon-green",
    bgColor: "bg-neon-green",
    borderColor: "border-neon-green",
    description: "Mastery of OOP principles and design patterns",
    stats: {
      languages: "Java, C++, Python",
      //patterns: "15+ Design Patterns",
     // projects: "12+",
      principles: "SOLID"
    },
    concepts: [
      {
        category: "Core Principles",
        items: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        icon: "🏗️"
      },
      // {
      //   category: "Design Patterns",
      //   items: ["Singleton", "Factory", "Observer", "MVC", "Strategy"],
      //   icon: "🎨"
      // },
      {
        category: "Advanced Concepts",
        items: ["Generic Programming", "Exception Handling", "Multi-threading"],
        icon: "🚀"
      },
      {
        category: "SOLID Principles",
        items: ["Single Responsibility", "Open/Closed", "Interface Segregation", "Dependency Inversion"],
        icon: "💎"
      }
    ],
    projects: [
      "Library Management System (Java)",
      "Banking System with Design Patterns",
      "Game Engine Architecture (C++)"
    ]
  },
  {
    id: "networks",
    title: "Computer Networks",
    icon: "Network",
    color: "text-neon-pink",
    bgColor: "bg-neon-pink",
    borderColor: "border-neon-pink",
    description: "Understanding of networking protocols and distributed systems",
    stats: {
      protocols: "TCP/IP, HTTP, WebSockets",
     // projects: "6+",
      focus: "Network Security",
      grade: "A"
    },
    concepts: [
      {
        category: "Network Layers",
        items: ["OSI Model", "TCP/IP Stack", "Application Layer", "Transport Layer"],
        icon: "📡"
      },
      {
        category: "Protocols",
        items: ["HTTP/HTTPS", "TCP/UDP", "DNS", "DHCP", "FTP"],
        icon: "🔗"
      },
      {
        category: "Security",
        items: ["Encryption", "SSL/TLS", "Firewalls", "VPN"],
        icon: "🛡️"
      },
      {
        category: "Programming",
        items: ["Socket Programming", "REST APIs", "WebSockets", "Client-Server"],
        icon: "💻"
      }
    ],
    projects: [
      "Chat Application (Socket Programming)",
      "HTTP Server Implementation",
      "Network Security Analyzer"
    ]
  }
];

// PROJECTS DATA
// =============================================================================
export const projects = [
  // Full Stack Projects
  {
    id: 1,
    title: "MERN Stack E-Commerce Platform",
    description: "Complete e-commerce solution with user authentication, product management, shopping cart, payment integration using Stripe, and comprehensive admin dashboard with real-time analytics.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    ],
    category: "Full Stack",
    type: "Major",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    languages: ["JavaScript"],
    liveUrl: "https://ecommerce-mern-demo.vercel.app",
    githubUrl: "https://github.com/rudraksh/ecommerce-mern",
    featured: true,
    stats: { stars: 23, forks: 8, views: 1240 },
    highlights: ["Stripe Payment Integration", "Real-time Inventory", "Admin Dashboard", "JWT Authentication"],
    complexity: "High",
    duration: "3 months"
  },
  {
    id: 2,
    title: "Student Portal Management System",
    description: "Full-stack web application for university student management with course registration, grade tracking, assignment submissions, and comprehensive admin panel built with modern web technologies.",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    ],
    category: "Full Stack",
    type: "Major",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "JWT", "Material-UI"],
    languages: ["JavaScript", "SQL"],
    liveUrl: "https://student-portal-demo.herokuapp.com",
    githubUrl: "https://github.com/rudraksh/student-portal",
    featured: true,
    stats: { stars: 18, forks: 12, views: 890 },
    highlights: ["Role-based Access", "Grade Management", "Course Registration", "Real-time Notifications"],
    complexity: "High",
    duration: "4 months"
  },

  // Backend Projects
  {
    id: 3,
    title: "RESTful API for Social Media Platform",
    description: "Scalable REST API with comprehensive authentication, post management, real-time chat, file uploads, and advanced features like content moderation and analytics.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop"
    ],
    category: "Backend",
    type: "Major",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Cloudinary", "Redis"],
    languages: ["JavaScript"],
    liveUrl: "https://social-api-docs.herokuapp.com",
    githubUrl: "https://github.com/rudraksh/social-media-api",
    featured: true,
    stats: { stars: 15, forks: 7, views: 650 },
    highlights: ["30+ API Endpoints", "Real-time Chat", "File Upload", "Rate Limiting"],
    complexity: "High",
    duration: "2 months"
  },

  // Java/C++ Projects
  {
    id: 4,
    title: "Banking Management System (Java)",
    description: "Object-oriented banking system with account management, transaction processing, loan calculations, and comprehensive reporting. Implements all major OOP principles and design patterns.",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    ],
    category: "Java/C++",
    type: "Major",
    tech: ["Java", "Swing", "JDBC", "MySQL", "Maven"],
    languages: ["Java", "SQL"],
    liveUrl: null,
    githubUrl: "https://github.com/rudraksh/banking-system-java",
    featured: true,
    stats: { stars: 12, forks: 5, views: 420 },
    highlights: ["OOP Design Patterns", "Database Integration", "GUI Interface", "Transaction Management"],
    complexity: "Medium",
    duration: "6 weeks"
  },
  {
    id: 5,
    title: "Data Structures Library (C++)",
    description: "Custom implementation of fundamental data structures including dynamic arrays, linked lists, trees, graphs, and hash tables with comprehensive test suite and documentation.",
    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop"
    ],
    category: "Java/C++",
    type: "Major",
    tech: ["C++", "STL", "Google Test", "CMake", "Doxygen"],
    languages: ["C++"],
    liveUrl: null,
    githubUrl: "https://github.com/rudraksh/cpp-data-structures",
    featured: false,
    stats: { stars: 8, forks: 3, views: 290 },
    highlights: ["Template Programming", "Memory Management", "Unit Testing", "Documentation"],
    complexity: "High",
    duration: "8 weeks"
  },
  {
    id: 6,
    title: "Process Scheduler Simulator (C++)",
    description: "Operating system process scheduling simulator implementing FCFS, SJF, Priority, and Round Robin algorithms with performance metrics and visualization.",
    images: [
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop"
    ],
    category: "Java/C++",
    type: "Major",
    tech: ["C++", "Qt", "Threading", "STL"],
    languages: ["C++"],
    liveUrl: null,
    githubUrl: "https://github.com/rudraksh/os-scheduler-simulator",
    featured: false,
    stats: { stars: 14, forks: 6, views: 380 },
    highlights: ["Multiple Algorithms", "Performance Metrics", "GUI Visualization", "Multithreading"],
    complexity: "High",
    duration: "5 weeks"
  },

  // Python/CLI Projects
  {
    id: 7,
    title: "Advanced File Compression Tool",
    description: "Command-line tool implementing Huffman coding and LZ77 algorithms for file compression with support for multiple file formats and batch processing capabilities.",
    images: [
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop"
    ],
    category: "Python/CLI",
    type: "Major",
    tech: ["Python", "Click", "NumPy", "Pytest", "Setuptools"],
    languages: ["Python"],
    liveUrl: "https://pypi.org/project/file-compressor-cli/",
    githubUrl: "https://github.com/rudraksh/file-compression-tool",
    featured: false,
    stats: { stars: 11, forks: 4, views: 310 },
    highlights: ["Huffman Coding", "LZ77 Algorithm", "CLI Interface", "PyPI Package"],
    complexity: "High",
    duration: "4 weeks"
  },
  {
    id: 8,
    title: "Stock Market Data Analyzer",
    description: "Python CLI tool for fetching, analyzing, and visualizing stock market data with technical indicators, trend analysis, and automated report generation.",
    images: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
    ],
    category: "Python/CLI",
    type: "Major",
    tech: ["Python", "Pandas", "Matplotlib", "yfinance", "Click"],
    languages: ["Python"],
    liveUrl: null,
    githubUrl: "https://github.com/rudraksh/stock-analyzer-cli",
    featured: false,
    stats: { stars: 9, forks: 2, views: 275 },
    highlights: ["Technical Indicators", "Data Visualization", "API Integration", "Report Generation"],
    complexity: "Medium",
    duration: "3 weeks"
  },
  {
    id: 9,
    title: "Network Scanner & Security Tool",
    description: "Advanced network scanning tool with port scanning, vulnerability detection, and network topology mapping capabilities built with Python and Scapy.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    ],
    category: "Python/CLI",
    type: "Major",
    tech: ["Python", "Scapy", "Threading", "Socket", "Argparse"],
    languages: ["Python"],
    liveUrl: null,
    githubUrl: "https://github.com/rudraksh/network-scanner",
    featured: false,
    stats: { stars: 16, forks: 8, views: 485 },
    highlights: ["Port Scanning", "Vulnerability Detection", "Network Mapping", "Multithreading"],
    complexity: "High",
    duration: "5 weeks"
  },

  // Additional Backend Projects
  {
    id: 10,
    title: "Microservices Chat Application",
    description: "Distributed chat application using microservices architecture with message queues, real-time communication, and containerized deployment.",
    images: [
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
    ],
    category: "Backend",
    type: "Major",
    tech: ["Node.js", "Docker", "RabbitMQ", "Redis", "MongoDB", "Socket.io"],
    languages: ["JavaScript"],
    liveUrl: "https://microservices-chat-demo.herokuapp.com",
    githubUrl: "https://github.com/rudraksh/microservices-chat",
    featured: false,
    stats: { stars: 13, forks: 5, views: 390 },
    highlights: ["Microservices", "Message Queues", "Containerization", "Load Balancing"],
    complexity: "High",
    duration: "6 weeks"
  }
];

// PROJECT EXPERIENCE DATA
// =============================================================================
export const projectExperience = [
  {
    id: 1,
    semester: "Semester 1",
    period: "Oct 2022 - Dec 2022",
    title: "Python Voice Assistant",
    role: "Python Developer",
    description: "Developed a Python-based voice assistant capable of responding to both voice and text inputs. Integrated features like WhatsApp messaging automation using Twilio API, media playback, and mini-games to enhance user engagement.",
    tech: ["Python", "SpeechRecognition", "pyttsx3"],
    achievements: [
      "Enabled real-time voice interaction with >90% accuracy",
      "Automated WhatsApp messaging using Twilio integration",
      "Added built-in games and music player to improve interactivity"
    ],
    type: "AI Assistant",
    learned: "Speech recognition, NLP basics, automation with Python",
    github: "https://github.com/RudrakshTaya/Voice_Assistance-using-PYTHON.git",
    demo: ""
  },
  
  
  // {
  //   id: 2,
  //   semester: "Semester 2",
  //   period: "Jan 2023 - Mar 2023",
  //   title: "Zomato Clone",
  //   role: "Frontend Developer",
  //   description: "Designed and built a responsive clone of Zomato using HTML, CSS, and JavaScript, focusing on clean UI and seamless user experience. Emulated real-world restaurant search, filtering, and browsing functionality.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   achievements: [
  //     "Created pixel-perfect UI resembling Zomato’s layout",
  //     "Built mobile-first responsive design for all screen sizes",
  //     "Used modular CSS and reusable components for scalability"
  //   ],
  //   type: "Frontend",
  //   learned: "Responsive web design, DOM manipulation, UI/UX cloning",
  //   github: "https://github.com/RudrakshTaya/ZomatoProject.git",
  //   demo: ""
  // },
  {
    id: 2,
    semester: "Semester 4",
    period: "Nov 2024 – Ongoing",
    title: "Art and Creativity Community Platform",
    role: "Full Stack Developer",
    description: "Developed a full-stack platform where artists can showcase their work, participate in challenges, and sell art through an integrated e-commerce module. Hosted on AWS with optimized backend APIs and cloud-based media storage.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS", "Razorpay"],
    achievements: [
      "Integrated dynamic user profiles and content galleries",
      "Enabled secure e-commerce with order tracking system",
      "Deployed scalable backend with AWS EC2 and MongoDB Atlas"
    ],
    type: "Full Stack",
    learned: "MERN architecture, AWS deployment, marketplace systems",
    github: "",
    demo: ""
  },
  {
    id: 4,
    semester: "Semester 6",
    period: "Feb 2025",
    title: "Flex-It-Out – AI-Powered Fitness & Challenge Platform",
    role: "Full Stack Developer & Team Lead",
    description: "Led a team of 4 in the Bajaj Finserv Health Hackathon to develop a full-stack fitness platform promoting physical activity through real-time AI-based motion tracking, gamification, and community challenges. Integrated video chat, subscriptions, and leaderboard systems for a fully immersive and engaging experience.",
    tech: ["React", "Node.js", "MongoDB", "MediaPipe", "OpenCV", "Twilio", "Socket.IO", "Stripe", "JWT", "Firebase", "Next.js"],
    achievements: [
      "324 commits during hackathon sprint, demonstrating rapid development and iteration",
      "Implemented real-time pose detection for squats, push-ups, and crunches",
      "Integrated Twilio for live video conferencing in multiplayer workout challenges",
      "Used Socket.IO for real-time leaderboard updates and challenge syncing",
      "Enabled Stripe-based membership plans with secure checkout and webhook integration",
      "Deployed on Vercel with serverless functions for backend APIs",
    ],
    type: "Full Stack / AI / HealthTech",
    learned: "Pose estimation, payment integration, real-time systems, high-pressure delivery",
    github: "https://github.com/rudraksh/flex-it-out",
    demo: "https://flex-it-out.netlify.app"
  }
  
  
  
];

// GITHUB STATS DATA
// =============================================================================
export const githubStats = {
  overview: {
    totalRepos: 21,
    //totalStars: 142,
    //totalForks: 67,
    totalCommits: 500,
    //currentStreak: 47,
    //longestStreak: 89,
    contributionsThisYear: 50,
  },
  topLanguages: [
    { name: "JavaScript", percentage: 34.2, color: "bg-yellow-400" },
    { name: "Python", percentage: 28.5, color: "bg-blue-500" },
    { name: "TypeScript", percentage: 18.7, color: "bg-blue-600" },
    { name: "CSS", percentage: 9.3, color: "bg-blue-400" },
    { name: "Java", percentage: 6.1, color: "bg-orange-500" },
    { name: "HTML", percentage: 3.2, color: "bg-orange-600" }
  ],
  pinnedRepos: [
    {
      name: "ecommerce-mern",
      description: "Full-stack e-commerce platform built with MERN stack",
      language: "JavaScript",
      stars: 23,
      forks: 8,
      color: "text-yellow-400",
      url:""

    },
    {
      name: "task-manager-react", 
      description: "Modern task management app with drag-and-drop functionality",
      language: "TypeScript",
      stars: 18,
      forks: 5,
      color: "text-blue-400",
      url:""
    },
    {
      name: "student-portal-api",
      description: "RESTful API for student management system",
      language: "Node.js",
      stars: 15,
      forks: 7,
      color: "text-green-400",
      url:""
    },
    {
      name: "text-processor-cli",
      description: "Command-line tool for batch text processing",
      language: "Python",
      stars: 12,
      forks: 4,
      color: "text-blue-500",
      url:""
    }
  ]
};

// LEETCODE STATS DATA
// =============================================================================
export const leetcodeStats = {
  totalSolved: 196,
  easy: 81,
  medium: 98,
  hard: 17,
  //rating: 1847,
  //rankTitle: "Knight",
  globalRankApprox: "Top 6%",
  acceptanceRate: "63%",
  badges: [
    "50 Days Badge 2024",
    //"100 Days Badge 2023",
    "Contest Participant"
  ],
  recentSubmissions: [
    { problem: "Fruit into Baskets", difficulty: "Medium", status: "Accepted" },
    { problem: "Maximum Sum of Distinct Subarrays With Length K", difficulty: "Medium", status: "Accepted" },
    { problem: "Rank Scores", difficulty: "Medium", status: "Accepted" },
    { problem: "Longest Valid Parentheses", difficulty: "Hard", status: "Accepted" }
  ],
  summary: "Solved 196 problems with a 63% acceptance rate. Rated 1847 (Knight), placing in the Top ~6% globally on LeetCode. Active participant in daily challenges and contests with multiple achievement badges."
};


// BLOG POSTS DATA
// =============================================================================
export const blogs = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    platform: "Dev.to",
    date: "Dec 2024",
    likes: 45,
    comments: 12,
    url: "https://dev.to/rudraksh/building-scalable-apis"
  },
  {
    title: "React Performance Optimization Techniques",
    platform: "Medium",
    date: "Nov 2024",
    likes: 67,
    comments: 23,
    url: "https://medium.com/@rudraksh/react-optimization"
  },
  {
    title: "Database Design Patterns for Web Applications",
    platform: "Dev.to",
    date: "Oct 2024",
    likes: 34,
    comments: 8,
    url: "https://dev.to/rudraksh/database-patterns"
  }
];

// CERTIFICATIONS DATA
// =============================================================================
export const certifications = [
  {
    id: 1,
    title: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    skills: ["Cloud Architecture", "Kubernetes", "GCP Services", "DevOps"],
    credentialId: "GCD-2024-1234",
    verifyUrl: "https://cloud.google.com/certification/cloud-developer",
    level: "Professional",
    type: "Cloud"
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    skills: ["AWS Services", "System Design", "Cloud Security", "Cost Optimization"],
    credentialId: "AWS-SAA-2024-5678",
    verifyUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    level: "Associate",
    type: "Cloud"
  },
  {
    id: 3,
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX Design"],
    credentialId: "META-FE-2024-9012",
    verifyUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    level: "Professional",
    type: "Development"
  },
  {
    id: 4,
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
    skills: ["MongoDB", "Database Design", "Aggregation", "Indexing"],
    credentialId: "MDB-DEV-2024-3456",
    verifyUrl: "https://university.mongodb.com/certification",
    level: "Associate",
    type: "Database"
  },
  {
    id: 5,
    title: "Oracle Java SE 11 Developer",
    issuer: "Oracle",
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
    skills: ["Java Programming", "OOP", "Data Structures", "Algorithms"],
    credentialId: "OCP-JAVA11-2024-7890",
    verifyUrl: "https://education.oracle.com/java-se-11-developer/pexam_1Z0-819",
    level: "Professional",
    type: "Programming"
  },
  {
    id: 6,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    skills: ["Azure Services", "Cloud Concepts", "Security", "Pricing"],
    credentialId: "AZ-900-2024-1122",
    verifyUrl: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/",
    level: "Fundamentals",
    type: "Cloud"
  }
];

// ACHIEVEMENTS DATA
// =============================================================================
export const achievements = [
  {
    id: 1,
    title: "1st Place - Hackathon 2024",
    description: "Won first place in the annual university hackathon with an AI-powered student assistant app",
    date: "November 2024",
    icon: "Trophy",
    color: "text-yellow-400",
    category: "Competition"
  },
  {
    id: 2,
    title: "Google Developer Student Club Lead",
    description: "Selected as GDSC Lead for organizing tech events and workshops for 200+ students",
    date: "September 2024",
    icon: "Star",
    color: "text-blue-400",
    category: "Leadership"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Contributed to 15+ open source projects with 50+ accepted pull requests",
    date: "Ongoing",
    icon: "CheckCircle",
    color: "text-green-400",
    category: "Contribution"
  },
  {
    id: 4,
    title: "Dean's List Scholar",
    description: "Achieved Dean's List recognition for academic excellence (Top 5% of class)",
    date: "Multiple Semesters",
    icon: "Medal",
    color: "text-purple-400",
    category: "Academic"
  },
  {
    id: 5,
    title: "Tech Blog Milestone",
    description: "Technical articles reached 10K+ reads across Dev.to and Medium platforms",
    date: "December 2024",
    icon: "Target",
    color: "text-cyan-400",
    category: "Writing"
  }
];

// CONTACT INFORMATION
// =============================================================================
export const contactInfo = [
  {
    icon: "Mail",
    label: "Email",
    value: "rudrakshtaya777@gmail.com",
    href: "mailto:rudrakshtaya777@gmail.com"
  },
  {
    icon: "Phone",
    label: "Phone", 
    value: "+91 9050832038",
    href: "tel:+919050832038"
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Haryana, India",
    href: "https://maps.google.com"
  }
];

// TECH STACK FOR FOOTER
// =============================================================================
export const techStack = [
  "React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "Vite"
];
