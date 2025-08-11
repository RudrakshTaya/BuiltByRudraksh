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
  Folder,
  Play,
  Settings,
  Search,
  X,
  Minimize,
  Maximize,
} from "lucide-react";
import { Button } from "./ui/button";
import { MacBookKey, MacBookKeyboardRow } from "./ui/macbook-key";
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
    <div className="text-gray-300 text-xs sm:text-sm font-mono bg-gray-700/50 px-2 py-1 rounded-md">
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};

// Enhanced terminal with better sizing
const PortfolioTerminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commandIndex, setCommandIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const techCommands = [
    "echo 'CS Student & Full Stack Developer'",
    "git status --porcelain | grep -c '^M' # 250+ DSA problems solved",
    "npm run build --production # Building scalable applications",
    "docker ps | grep 'react\\|node\\|mongo' # Containerized MERN stack",
    "python -c \"print('ML + Data Structures = Innovation')\"",
    "javac Algorithm.java && java Problem --solve --optimize",
    'curl -X POST /api/innovation -d \'{"passion": "unlimited"}\'',
    "sudo systemctl enable continuous-learning.service",
    "grep -r 'problem-solving' ~/mindset | wc -l # Always active",
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
          }, 3000);
        }
      },
      currentIndex === 0 && commandIndex === 0 ? 2000 : 50,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, commandIndex, isCompleted, techCommands]);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl overflow-hidden">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 bg-gray-800 rounded-t-lg border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs font-mono ml-1">
            Terminal
          </span>
        </div>
        <Terminal className="w-3 h-3 text-gray-400 flex-shrink-0" />
      </div>

      {/* Terminal content with proper scrolling */}
      <div className="flex-1 p-2 sm:p-3 font-mono text-xs overflow-hidden">
        <div className="text-gray-400 mb-1 text-xs">~/portfolio</div>

        <div className="space-y-1 overflow-hidden">
          <div className="min-h-[1rem] break-words">
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
              className="text-cyan-400/80 text-xs pl-2 break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {commandIndex === 0 && "✓ Ready to build amazing things"}
              {commandIndex === 1 && "✓ 250+ problems solved successfully"}
              {commandIndex === 2 && "✓ Build successful - ready for production"}
              {commandIndex === 3 && "✓ 3 containers running - full stack ready"}
              {commandIndex === 4 && "ML + Data Structures = Innovation"}
              {commandIndex === 5 && "✓ Algorithm compiled and optimized"}
              {commandIndex === 6 && "✓ 200 OK - Innovation API active"}
              {commandIndex === 7 && "✓ Service enabled and running"}
              {commandIndex === 8 && "∞ Always learning, always growing"}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// VS Code style portfolio content with better sizing
const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio.md");

  const tabs = [
    { id: "portfolio.md", name: "portfolio.md", icon: FileText },
    { id: "stats.json", name: "stats.json", icon: Code2 },
    { id: "contact.js", name: "contact.js", icon: Settings },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroStats = stats?.hero || [
    { label: "250+ Problems", color: "neon-green" },
    { label: "15+ Projects", color: "neon-blue" },
    { label: "3+ Years Learning", color: "neon-purple" },
    { label: "8.7 CGPA", color: "neon-cyan" },
  ];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl overflow-hidden">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 bg-gray-800 rounded-t-lg border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs font-mono ml-1">
            VS Code
          </span>
        </div>
        <Code2 className="w-3 h-3 text-gray-400 flex-shrink-0" />
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto flex-shrink-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs border-r border-gray-700 transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-750"
              }`}
            >
              <Icon className="w-3 h-3 flex-shrink-0" />
              <span className="hidden sm:inline truncate">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(".")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Content with proper scrolling */}
      <div className="flex-1 p-2 sm:p-3 overflow-auto">
        <AnimatePresence mode="wait">
          {activeTab === "portfolio.md" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3 text-xs sm:text-sm"
            >
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white mb-1">
                  # {personalInfo.name}
                </h1>
                <p className="text-cyan-400 font-mono text-xs sm:text-sm">
                  ## {personalInfo.title} | {personalInfo.subtitle}
                </p>
                <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-relaxed">
                  {personalInfo.bio.short}
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                  ### Core Values
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs">
                    • Innovation through Code
                  </span>
                  <span className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                    • Problem Solving Mindset
                  </span>
                  <span className="px-2 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                    • Continuous Learning
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                  ### Quick Actions
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToContact}
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-xs"
                  >
                    <Mail className="mr-1 h-3 w-3" />
                    Initialize Contact
                  </Button>
                  <Button
                    size="sm"
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-xs"
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Download.exe
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "stats.json" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-mono text-xs"
            >
              <div className="text-gray-400 mb-2">// Portfolio Statistics</div>
              <div className="space-y-2">
                <div className="text-white">
                  <span className="text-purple-400">{`{`}</span>
                </div>
                {heroStats.map((stat, index) => (
                  <div key={index} className="ml-2">
                    <span className="text-cyan-400">
                      "{stat.label.toLowerCase().replace(/\s+/g, "_")}"
                    </span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">
                      "{stat.label.split(" ")[0]}"
                    </span>
                    {index < heroStats.length - 1 && (
                      <span className="text-white">,</span>
                    )}
                  </div>
                ))}
                <div className="text-purple-400">{`}`}</div>
              </div>
            </motion.div>
          )}

          {activeTab === "contact.js" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-mono text-xs space-y-2"
            >
              <div className="text-gray-400">// Social Links Configuration</div>
              <div>
                <span className="text-purple-400">const </span>
                <span className="text-cyan-400">socialLinks </span>
                <span className="text-white">= [</span>
              </div>
              {socialLinks.map((link, index) => (
                <div key={index} className="ml-2">
                  <span className="text-white">{`{ `}</span>
                  <span className="text-cyan-400">name</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"{link.name}"</span>
                  <span className="text-white">, </span>
                  <span className="text-cyan-400">url</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"{link.url}"</span>
                  <span className="text-white"> {`}`}</span>
                  {index < socialLinks.length - 1 && (
                    <span className="text-white">,</span>
                  )}
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
      className="relative min-h-[95vh] flex flex-col items-center justify-center py-8 px-4 overflow-hidden z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* MacBook with Integrated Keyboard */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto z-30"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* MacBook Screen */}
        <div className="relative bg-black rounded-3xl border-4 sm:border-6 lg:border-8 border-gray-800 shadow-2xl overflow-hidden mb-2">
          {/* Screen bezel */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl sm:rounded-3xl border border-gray-700"></div>
          
          {/* Inner bezel */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-xl sm:rounded-2xl border border-gray-800"></div>

          {/* Apple logo and camera */}
          <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-30">
            <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-inner"></div>
          </div>
          <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 translate-x-8 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>

          {/* Screen content */}
          <div className="relative z-10 p-3 sm:p-4 lg:p-6">
            {/* macOS Menu Bar with live time */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-800/90 rounded-lg backdrop-blur-sm border border-gray-700/50 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-white text-xs sm:text-sm font-medium truncate">
                  💻 Rudraksh Portfolio
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="text-gray-300 text-xs px-1.5 py-0.5 bg-gray-700/50 rounded-md">
                    Terminal
                  </div>
                  <div className="text-gray-300 text-xs px-1.5 py-0.5 bg-gray-700/50 rounded-md">
                    VS Code
                  </div>
                </div>
              </div>
              <LiveClock />
            </div>

            {/* Main content area with fixed height */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-3 h-[300px] sm:h-[400px] lg:h-[500px]">
              {/* Terminal Side */}
              <motion.div
                className="order-1"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <PortfolioTerminal />
              </motion.div>

              {/* VS Code Side */}
              <motion.div
                className="order-2"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <VSCodePortfolio />
              </motion.div>
            </div>
          </div>
        </div>

        {/* MacBook Base */}
        <div className="relative perspective-1000">
          {/* Main base */}
          <div className="relative h-3 sm:h-6 lg:h-8 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] mx-4 sm:mx-6 lg:mx-8 shadow-2xl transform rotateX-2 border-t border-gray-600">
            {/* Hinge */}
            <div className="absolute inset-x-0 top-0 h-0.5 sm:h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-t-sm"></div>
            
            {/* Apple logo on base */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4">
              <div className="w-full h-full bg-gradient-to-b from-gray-400 to-gray-600 rounded-full opacity-40 shadow-inner"></div>
            </div>
            
            {/* Base highlight */}
            <div className="absolute inset-x-0 top-0.5 sm:top-1 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>
          </div>

          {/* Keyboard Area - This is where the keys belong! */}
          <div className="relative h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-b-[1.5rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3.5rem] mx-6 sm:mx-10 lg:mx-16 shadow-xl transform rotateX-3 -mt-1 flex items-center justify-center">
            {/* Keyboard surface pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-transparent to-gray-900/30 rounded-b-[1.5rem] sm:rounded-b-[2.5rem] lg:rounded-b-[3.5rem]"></div>
            
            {/* ACTUAL KEYBOARD KEYS IN THE RIGHT PLACE */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {/* Social Links Row */}
              <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                {socialLinks.map((link, index) => {
                  const iconMap: { [key: string]: any } = {
                    Github: Github,
                    Linkedin: Linkedin,
                    Code2: Code2,
                    Trophy: Trophy,
                  };
                  const Icon = iconMap[link.icon];

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                    >
                      <MacBookKey
                        icon={Icon}
                        tooltip={`Connect on ${link.name}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        variant={index === 0 ? "function" : index === 1 ? "modifier" : "default"}
                        className="hover:shadow-lg hover:shadow-primary/20"
                      />
                    </motion.div>
                  );
                })}
                
                {/* Action Keys */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <MacBookKey
                    icon={Mail}
                    tooltip="Contact"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    size="sm"
                    variant="return"
                    className="hover:shadow-lg hover:shadow-green-500/20"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                >
                  <MacBookKey
                    icon={Download}
                    tooltip="Resume"
                    onClick={downloadResume}
                    size="sm"
                    variant="function"
                    className="hover:shadow-lg hover:shadow-blue-500/20"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Trackpad */}
            <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 lg:w-16 h-1 sm:h-1.5 lg:h-2 bg-gray-700 rounded-sm opacity-60 border border-gray-600"></div>
          </div>

          {/* Bottom support */}
          <div className="relative h-1 sm:h-2 lg:h-3 bg-gradient-to-b from-gray-900 to-black rounded-b-xl mx-10 sm:mx-16 lg:mx-24 shadow-lg -mt-0.5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"></div>
            
            {/* Rubber feet */}
            <div className="absolute bottom-0 left-2 sm:left-4 w-1 sm:w-2 h-0.5 bg-gray-800 rounded-full opacity-80"></div>
            <div className="absolute bottom-0 right-2 sm:right-4 w-1 sm:w-2 h-0.5 bg-gray-800 rounded-full opacity-80"></div>
          </div>
        </div>
      </motion.div>

      {/* Optional floating action hint */}
      <motion.div
        className="mt-4 sm:mt-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <p className="text-gray-400 text-xs sm:text-sm font-mono">
          Press any key to connect • Live portfolio experience
        </p>
      </motion.div>
    </motion.section>
  );
};
