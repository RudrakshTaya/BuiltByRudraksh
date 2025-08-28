import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Trophy,
  Terminal,
  Brain,
  Play,
  Folder,
  FileText,
} from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { personalInfo, socialLinks } from "../data/portfolioData";

// VS Code style typing effect
const VSCodeTypewriter = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      },
      delay + currentIndex * 80,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-[#007acc]"
      >
        |
      </motion.span>
    </span>
  );
};

// VS Code Interface Component
const VSCodeInterface = () => {
  const [activeTab, setActiveTab] = useState(0);

  const files = [
    { name: "portfolio.tsx", icon: FileText, active: true },
    { name: "skills.json", icon: FileText, active: false },
    { name: "projects.md", icon: FileText, active: false },
  ];

  const codeContent = [
    `const developer = {
  name: "${personalInfo.name}",
  role: "Full Stack Developer",
  education: "Computer Science Student",
  skills: ["React", "Node.js", "Python", "Java"],
  problemsSolved: "250+",
  currentFocus: "Building amazing projects",
  status: "Available for opportunities"
};`,
    `{
  "frontend": ["React", "TypeScript", "Tailwind CSS"],
  "backend": ["Node.js", "Python", "Java", "Express"],
  "database": ["MongoDB", "PostgreSQL", "Firebase"],
  "tools": ["Git", "Docker", "VS Code", "Figma"],
  "learning": ["Next.js", "GraphQL", "AWS", "Kubernetes"]
}`,
    `# 🚀 Featured Projects

## E-Commerce Platform
- **Tech Stack**: React, Node.js, MongoDB
- **Features**: Full CRUD, Payment Integration, Admin Dashboard
- **Status**: ✅ Completed

## Task Management System  
- **Tech Stack**: MERN Stack
- **Features**: Real-time updates, Team collaboration
- **Status**: 🔄 In Progress

## Portfolio Website
- **Tech Stack**: React, TypeScript, Framer Motion
- **Features**: Responsive design, Interactive animations
- **Status**: ✅ Live`,
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg overflow-hidden shadow-2xl">
      {/* VS Code Title Bar */}
      <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-b border-[#3c3c3c]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
          </div>
          <span className="text-[#cccccc] text-sm font-medium ml-3">
            Visual Studio Code
          </span>
        </div>
        <div className="text-[#cccccc] text-sm">
          {personalInfo.name} - Portfolio
        </div>
      </div>

      {/* File Tabs */}
      <div className="bg-[#252526] border-b border-[#3c3c3c] flex">
        {files.map((file, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-4 py-3 text-sm border-r border-[#3c3c3c] transition-colors ${
              activeTab === index
                ? "bg-[#1e1e1e] text-[#ffffff]"
                : "bg-[#2d2d30] text-[#cccccc] hover:bg-[#1e1e1e]"
            }`}
          >
            <file.icon className="w-4 h-4" />
            {file.name}
            {activeTab === index && (
              <div className="w-2 h-2 rounded-full bg-[#007acc] ml-1"></div>
            )}
          </button>
        ))}
      </div>

      {/* Code Content */}
      <div className="bg-[#1e1e1e] p-6 font-mono text-sm min-h-[400px]">
        <div className="flex gap-4">
          {/* Line Numbers */}
          <div className="text-[#858585] select-none">
            {codeContent[activeTab].split("\n").map((_, i) => (
              <div key={i} className="leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1">
            <pre className="text-[#d4d4d4] leading-6 whitespace-pre-wrap">
              <VSCodeTypewriter text={codeContent[activeTab]} delay={500} />
            </pre>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] px-4 py-1 text-white text-xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>◯ Connected to Portfolio Server</span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 1, Col 1</span>
          <span>🚀 Ready</span>
        </div>
      </div>
    </div>
  );
};

// Floating Terminal Commands
const TerminalCommands = () => {
  const commands = [
    "git commit -m 'Add new feature'",
    "npm run build",
    "docker compose up",
    "python manage.py migrate",
    "yarn test --coverage",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {commands.map((cmd, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-green-400 text-sm bg-black/20 px-2 py-1 rounded border border-green-400/30"
          style={{
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        >
          $ {cmd}
        </motion.div>
      ))}
    </div>
  );
};

export const LightweightHero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4">
      {/* Background elements */}
      <TerminalCommands />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Welcome Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#007acc]/10 border border-[#007acc]/30 rounded-full px-4 py-2 mb-4">
                <Terminal className="w-4 h-4 text-[#007acc]" />
                <span className="text-[#007acc] text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                <span className="text-[#569cd6]">const</span>{" "}
                <span className="text-[#9cdcfe]">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-[#ce9178]">"{personalInfo.name}"</span>
              </h1>

              <div className="text-lg sm:text-xl text-[#d4d4d4] font-mono">
                <span className="text-[#c586c0]">// </span>
                <VSCodeTypewriter
                  text="Full Stack Developer & Computer Science Student"
                  delay={1000}
                />
              </div>
            </motion.div>

            {/* VS Code Interface */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <VSCodeInterface />
            </motion.div>

            {/* Quick Actions Terminal Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700/50">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-mono text-sm">
                  Quick Actions Terminal
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300">Available commands:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={scrollToContact}
                    className="justify-start border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono text-xs"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    ./contact
                  </Button>

                  <Button
                    size="sm"
                    onClick={downloadResume}
                    className="justify-start bg-[#007acc] hover:bg-[#005a9e] text-white font-mono text-xs"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    ./download-resume
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Social links - GitHub style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              {socialLinks.map((link, index) => {
                const iconMap = {
                  Github: Github,
                  Linkedin: Linkedin,
                  Code2: Code2,
                  Trophy: Trophy,
                };
                const Icon = iconMap[link.icon as keyof typeof iconMap];

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2 bg-[#21262d] border border-[#30363d] rounded-lg px-4 py-3 hover:border-[#58a6ff] transition-all duration-300">
                      <Icon className="h-5 w-5 text-[#f0f6fc]" />
                      <span className="text-[#f0f6fc] text-sm font-medium">
                        {link.name}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
