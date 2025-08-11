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
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
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
            <span className="text-white">{displayedText}</span>
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
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
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
      <div className="flex bg-gray-800 border-b border-gray-700">
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
              <Icon className="w-3 h-3" />
              <span>{tab.name}</span>
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
                  {personalInfo.bio.short}
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
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-xs h-8"
                  >
                    <Mail className="mr-1 h-3 w-3" />
                    Contact
                  </Button>
                  <Button
                    size="sm"
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-xs h-8"
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
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-4 px-4 overflow-hidden z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Simplified MacBook Design */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* MacBook Screen - Single clean layer */}
        <div className="relative bg-gray-800 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-gray-700 shadow-2xl overflow-hidden">
          {/* Apple logo and camera */}
          <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 rounded-full opacity-50"></div>
            <div className="w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
          </div>

          {/* Screen content */}
          <div className="relative z-10 p-3 sm:p-4 lg:p-6">
            {/* macOS Menu Bar */}
            <div className="flex items-center justify-between mb-3 px-3 py-2 bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/50">
              <div className="flex items-center gap-2">
                <div className="text-white text-sm font-medium">
                  💻 Portfolio
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="text-gray-300 text-xs px-2 py-0.5 bg-gray-600/50 rounded">Terminal</div>
                  <div className="text-gray-300 text-xs px-2 py-0.5 bg-gray-600/50 rounded">VS Code</div>
                </div>
              </div>
              <LiveClock />
            </div>

            {/* Content area - responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-[280px] sm:h-[350px] lg:h-[400px]">
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

        {/* Simplified MacBook Base */}
        <div className="relative">
          {/* Main base */}
          <div className="h-3 sm:h-5 lg:h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl sm:rounded-b-3xl mx-3 sm:mx-4 lg:mx-6 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"></div>
          </div>

          {/* Keyboard area with integrated keys */}
          <div className="relative h-6 sm:h-8 lg:h-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl sm:rounded-b-2xl mx-6 sm:mx-8 lg:mx-12 shadow-lg -mt-1 flex items-center justify-center">
            {/* Social Links as MacBook Keys */}
            <motion.div
              className="flex items-center gap-1 sm:gap-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
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
                    className="group relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                  >
                    {/* Key */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded border border-gray-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
                className="group relative ml-2 sm:ml-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95, y: 0 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-green-200 to-green-300 rounded border border-green-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95, y: 0 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-blue-200 to-blue-300 rounded border border-blue-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Resume
                  </div>
                </div>
              </motion.button>
            </motion.div>

            {/* Trackpad */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 sm:h-1.5 bg-gray-700 rounded-sm opacity-50"></div>
          </div>
        </div>
      </motion.div>

      {/* Simple hint text */}
      <motion.div
        className="mt-4 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <p className="text-gray-400 text-xs sm:text-sm">
          Live portfolio experience • Press any key to connect
        </p>
      </motion.div>
    </motion.section>
  );
};
