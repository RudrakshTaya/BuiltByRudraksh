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

// Enhanced terminal with cycling tech commands (keeping the same as before)
const PortfolioTerminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commandIndex, setCommandIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const techCommands = [
    "echo 'CS Student & Full Stack Developer'",
    "git status --porcelain | grep -c '^M' # 250+ DSA problems solved",
    "npm run build --production # Building scalable web applications",
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
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm font-mono ml-1 sm:ml-2">
            Terminal
          </span>
        </div>
        <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-2 sm:p-4 font-mono text-xs sm:text-sm overflow-hidden">
        <div className="text-gray-400 mb-2 text-xs sm:text-sm">~/portfolio</div>

        <div className="space-y-2">
          <div className="min-h-[1.5rem]">
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
              className="text-cyan-400/80 text-sm pl-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {commandIndex === 0 && "✓ Ready to build amazing things"}
              {commandIndex === 1 && "✓ 250+ problems solved successfully"}
              {commandIndex === 2 &&
                "✓ Build successful - ready for production"}
              {commandIndex === 3 &&
                "✓ 3 containers running - full stack ready"}
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

// VS Code style portfolio content
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
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm font-mono ml-1 sm:ml-2">
            VS Code
          </span>
        </div>
        <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-r border-gray-700 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-750"
              }`}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(".")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 p-3 sm:p-6 overflow-auto">
        <AnimatePresence mode="wait">
          {activeTab === "portfolio.md" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  # {personalInfo.name}
                </h1>
                <p className="text-cyan-400 font-mono">
                  ## {personalInfo.title} | {personalInfo.subtitle}
                </p>
                <p className="text-gray-300 mt-4">{personalInfo.bio.short}</p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  ### Core Values
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                    • Innovation through Code
                  </span>
                  <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">
                    • Problem Solving Mindset
                  </span>
                  <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                    • Continuous Learning
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  ### Quick Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={scrollToContact}
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Initialize Contact
                  </Button>
                  <Button
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                  >
                    <Download className="mr-2 h-4 w-4" />
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
              className="font-mono text-sm"
            >
              <div className="text-gray-400 mb-4">// Portfolio Statistics</div>
              <div className="space-y-4">
                <div className="text-white">
                  <span className="text-purple-400">{`{`}</span>
                </div>
                {heroStats.map((stat, index) => (
                  <div key={index} className="ml-4">
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
              className="font-mono text-sm space-y-4"
            >
              <div className="text-gray-400">// Social Links Configuration</div>
              <div>
                <span className="text-purple-400">const </span>
                <span className="text-cyan-400">socialLinks </span>
                <span className="text-white">= [</span>
              </div>
              {socialLinks.map((link, index) => (
                <div key={index} className="ml-4">
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
      className="relative min-h-[95vh] flex items-center justify-center py-8 px-4 overflow-hidden z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* MacBook Frame */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto z-30"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Enhanced MacBook Screen with Realistic Bezels */}
        <div className="relative bg-black rounded-3xl border-4 sm:border-8 border-gray-800 shadow-2xl overflow-hidden">
          {/* Realistic screen bezel with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl sm:rounded-3xl border border-gray-700"></div>

          {/* Inner bezel */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-xl sm:rounded-2xl border border-gray-800"></div>

          {/* Apple logo (top center of bezel) */}
          <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-30">
            <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-inner"></div>
          </div>

          {/* Camera dot */}
          <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 translate-x-8 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>

          {/* Screen content with enhanced visibility */}
          <div className="relative z-10 p-3 sm:p-6 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-950/95 rounded-lg backdrop-blur-sm">
            {/* macOS Menu Bar */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/90 rounded-lg backdrop-blur-sm border border-gray-700/50 shadow-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-white text-sm sm:text-base font-medium truncate">
                  💻 Rudraksh Portfolio
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="text-gray-300 text-xs px-2 py-1 bg-gray-700/50 rounded-md">
                    Terminal
                  </div>
                  <div className="text-gray-300 text-xs px-2 py-1 bg-gray-700/50 rounded-md">
                    VS Code
                  </div>
                </div>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm font-mono bg-gray-700/50 px-2 py-1 rounded-md">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            {/* Responsive layout */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-4 h-[350px] sm:h-[450px] lg:h-[550px]">
              {/* Terminal Side */}
              <motion.div
                className="order-1 xl:order-1"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <PortfolioTerminal />
              </motion.div>

              {/* VS Code Side */}
              <motion.div
                className="order-2 xl:order-2"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <VSCodePortfolio />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced MacBook Base with 3D Perspective */}
        <div className="relative perspective-1000">
          {/* Main MacBook base layer with enhanced styling */}
          <div className="relative h-4 sm:h-8 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-b-[2.5rem] sm:rounded-b-[4rem] mx-4 sm:mx-8 shadow-2xl transform rotateX-2 border-t border-gray-600">
            {/* Realistic MacBook hinge */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-t-sm"></div>

            {/* Apple logo on base */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4">
              <div className="w-full h-full bg-gradient-to-b from-gray-400 to-gray-600 rounded-full opacity-40 shadow-inner"></div>
            </div>

            {/* Base highlight */}
            <div className="absolute inset-x-0 top-1 h-0.5 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>
          </div>

          {/* Keyboard section */}
          <div className="relative h-3 sm:h-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-b-[2rem] sm:rounded-b-[3rem] mx-8 sm:mx-16 shadow-xl transform rotateX-3 -mt-0.5">
            {/* Keyboard surface pattern */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent"></div>

            {/* Trackpad indication */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-1 sm:h-1.5 bg-gray-700 rounded-sm opacity-60 border border-gray-600"></div>
          </div>

          {/* Bottom support pad */}
          <div className="relative h-1.5 sm:h-3 bg-gradient-to-b from-gray-900 to-black rounded-b-xl mx-12 sm:mx-24 shadow-lg -mt-0.5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"></div>

            {/* Rubber feet */}
            <div className="absolute bottom-0 left-4 w-2 h-0.5 bg-gray-800 rounded-full opacity-80"></div>
            <div className="absolute bottom-0 right-4 w-2 h-0.5 bg-gray-800 rounded-full opacity-80"></div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced MacBook Keyboard-Style Social Links */}
      <motion.div
        className="mt-6 sm:mt-10 lg:mt-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {/* Keyboard Container with realistic styling */}
        <div className="relative mx-auto max-w-md px-4">
          {/* Keyboard base */}
          <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-700">
            {/* Keyboard surface pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-transparent to-gray-900/50 rounded-2xl"></div>

            {/* Function row label */}
            <div className="text-center mb-3 sm:mb-4">
              <span className="text-gray-400 text-xs sm:text-sm font-mono uppercase tracking-wider">
                Quick Connect
              </span>
            </div>

            {/* Social links as keyboard keys */}
            <MacBookKeyboardRow gap="md" className="justify-center">
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
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  >
                    <MacBookKey
                      icon={Icon}
                      tooltip={`Connect on ${link.name}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="lg"
                      variant={index === 0 ? "function" : index === 1 ? "modifier" : "default"}
                      className="hover:shadow-xl hover:shadow-primary/20"
                    />
                  </motion.div>
                );
              })}
            </MacBookKeyboardRow>

            {/* Keyboard bottom row - Action keys */}
            <div className="mt-4 sm:mt-6">
              <MacBookKeyboardRow gap="sm" className="justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  <MacBookKey
                    icon={Mail}
                    tooltip="Send Message"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    size="md"
                    variant="return"
                    className="hover:shadow-xl hover:shadow-green-500/20"
                  />
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                >
                  <MacBookKey
                    label="⌘"
                    tooltip="View Projects"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    size="md"
                    variant="modifier"
                    className="hover:shadow-xl hover:shadow-purple-500/20"
                  />
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                >
                  <MacBookKey
                    icon={Download}
                    tooltip="Download Resume"
                    onClick={downloadResume}
                    size="md"
                    variant="function"
                    className="hover:shadow-xl hover:shadow-blue-500/20"
                  />
                </motion.div>
              </MacBookKeyboardRow>
            </div>

            {/* Keyboard branding */}
            <div className="mt-4 text-center">
              <div className="text-gray-500 text-xs font-mono">
                Press any key to connect
              </div>
            </div>
          </div>

          {/* Keyboard shadow/reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-2xl -z-10 translate-y-1"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};
