import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Trophy,
  FileText,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import {
  personalInfo,
  skills,
  stats,
  socialLinks,
} from "../data/portfolioData";

// Real-time clock component
const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-gray-300 text-xs font-mono bg-gray-700/50 px-2 py-1 rounded">
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};

// Simple terminal component
const PortfolioTerminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commandIndex, setCommandIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const techCommands = [
    "echo 'CS Student & Full Stack Developer'",
    "git status # 250+ DSA problems solved",
    "npm run build # Building scalable apps",
    "docker ps # Containerized MERN stack",
    "python -c \"print('Innovation')\"",
  ];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < techCommands[commandIndex].length) {
          setDisplayedText(
            (prev) => prev + techCommands[commandIndex][currentIndex],
          );
          setCurrentIndex((prev) => prev + 1);
        } else if (!isCompleted) {
          setIsCompleted(true);
          setTimeout(() => {
            setDisplayedText("");
            setCurrentIndex(0);
            setIsCompleted(false);
            setCommandIndex((prev) => (prev + 1) % techCommands.length);
          }, 2000);
        }
      },
      currentIndex === 0 && commandIndex === 0 ? 1000 : 50,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, commandIndex, isCompleted, techCommands]);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs font-mono">Terminal</span>
        </div>
        <Terminal className="w-3 h-3 text-gray-400" />
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-3 font-mono text-xs overflow-hidden">
        <div className="text-gray-400 mb-2">~/portfolio</div>
        <div className="space-y-1">
          <div className="min-h-[1rem]">
            <span className="text-green-400">$ </span>
            <span className="text-white break-all">{displayedText}</span>
            {!isCompleted && (
              <motion.span
                className="text-cyan-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            )}
          </div>
          {isCompleted && (
            <motion.div
              className="text-cyan-400/80 text-xs pl-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              ✓ Ready
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Simple VS Code component
const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio.md");

  const tabs = [
    { id: "portfolio.md", name: "Portfolio", icon: FileText },
    { id: "stats.json", name: "Stats", icon: Code2 },
    { id: "contact.js", name: "Contact", icon: Settings },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col overflow-hidden">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs font-mono">VS Code</span>
        </div>
        <Code2 className="w-3 h-3 text-gray-400" />
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 flex-shrink-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-2 py-1.5 text-xs border-r border-gray-700 transition-colors ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              <Icon className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 p-3 overflow-auto">
        <AnimatePresence mode="wait">
          {activeTab === "portfolio.md" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3 text-xs"
            >
              <div>
                <h1 className="text-lg font-bold text-white mb-1">
                  # {personalInfo.name}
                </h1>
                <p className="text-cyan-400 font-mono">
                  {personalInfo.title}
                </p>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  CS Student passionate about full-stack development and problem solving.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToContact}
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-xs h-7"
                  >
                    <Mail className="mr-1 h-3 w-3" />
                    Contact
                  </Button>
                  <Button
                    size="sm"
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-xs h-7"
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "stats.json" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs space-y-2"
            >
              <div className="text-gray-400">// Portfolio Stats</div>
              <div className="text-white">
                <div>{"{"}</div>
                <div className="ml-2 space-y-1">
                  <div><span className="text-cyan-400">"problems_solved"</span>: <span className="text-green-400">"250+"</span>,</div>
                  <div><span className="text-cyan-400">"projects"</span>: <span className="text-green-400">"15+"</span>,</div>
                  <div><span className="text-cyan-400">"cgpa"</span>: <span className="text-green-400">"8.7"</span></div>
                </div>
                <div>{"}"}</div>
              </div>
            </motion.div>
          )}

          {activeTab === "contact.js" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs space-y-2"
            >
              <div className="text-gray-400">// Social Links</div>
              <div>
                <span className="text-purple-400">const </span>
                <span className="text-cyan-400">links </span>
                <span className="text-white">= [</span>
              </div>
              {socialLinks.slice(0, 3).map((link, index) => (
                <div key={index} className="ml-2">
                  <span className="text-green-400">"{link.name}"</span>
                  {index < 2 && <span className="text-white">,</span>}
                </div>
              ))}
              <div className="text-white">];</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const MacBookPortfolio = () => {
  return (
    <motion.section
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-4 px-2 sm:px-4 overflow-hidden z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Single Clean MacBook Design */}
      <motion.div
        className="relative w-full max-w-[95vw] sm:max-w-4xl lg:max-w-5xl mx-auto"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* MacBook Screen - Clean Single Layer */}
        <div className="relative bg-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 sm:border-3 lg:border-4 border-gray-700 shadow-2xl overflow-hidden">
          {/* Simple top bar with camera */}
          <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>

          {/* Screen content - proper mobile containment */}
          <div className="relative z-10 p-2 sm:p-3 lg:p-4">
            {/* macOS Menu Bar */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/50">
              <div className="flex items-center gap-2">
                <div className="text-white text-xs sm:text-sm font-medium truncate">
                  💻 Portfolio
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="text-gray-300 text-xs px-1.5 py-0.5 bg-gray-600/50 rounded">Terminal</div>
                  <div className="text-gray-300 text-xs px-1.5 py-0.5 bg-gray-600/50 rounded">VS Code</div>
                </div>
              </div>
              <LiveClock />
            </div>

            {/* Content area - mobile-first responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 h-[250px] sm:h-[320px] lg:h-[380px]">
              {/* Terminal */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <PortfolioTerminal />
              </motion.div>

              {/* VS Code */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <VSCodePortfolio />
              </motion.div>
            </div>
          </div>
        </div>

        {/* SINGLE Clean MacBook Base - No confusing layers */}
        <div className="relative h-4 sm:h-6 lg:h-8 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl mx-2 sm:mx-3 lg:mx-4 shadow-xl border-t border-gray-600/50 flex items-center justify-center">
          {/* Clean surface highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
          
          {/* Integrated keyboard keys - properly contained */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2 px-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {/* Social Links */}
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
                  className="group relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Clean key design */}
                  <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded border border-gray-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                    <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-gray-700" />
                  </div>
                  
                  {/* Simple tooltip */}
                  <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {link.name}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Action buttons */}
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative ml-1 sm:ml-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-b from-green-200 to-green-300 rounded border border-green-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                <Mail className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-green-700" />
              </div>
              <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  Contact
                </div>
              </div>
            </motion.button>

            <motion.button
              onClick={downloadResume}
              className="group relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-b from-blue-200 to-blue-300 rounded border border-blue-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                <Download className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-blue-700" />
              </div>
              <div className="absolute -bottom-6 sm:-bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  Resume
                </div>
              </div>
            </motion.button>

            {/* Simple trackpad indicator */}
            <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 lg:w-10 h-0.5 sm:h-1 bg-gray-600 rounded-sm opacity-40"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Simple hint text - mobile contained */}
      <motion.div
        className="mt-3 sm:mt-4 text-center px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <p className="text-gray-400 text-xs sm:text-sm">
          Live portfolio • Press any key to connect
        </p>
      </motion.div>
    </motion.section>
  );
};
