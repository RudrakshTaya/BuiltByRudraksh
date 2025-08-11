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
  User,
  Briefcase,
  Star,
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

// Mobile Card Design - Clean and Simple
const MobilePortfolioCard = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Star },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Mobile Header Card */}
      <motion.div
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 border border-gray-700 shadow-xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">R</span>
          </div>
          <h1 className="text-xl font-bold text-white mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-cyan-400 text-sm font-mono mb-1">
            {personalInfo.title}
          </p>
          <p className="text-gray-300 text-sm">
            CS Student & Full Stack Developer
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">250+</div>
            <div className="text-xs text-gray-400">Problems Solved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">15+</div>
            <div className="text-xs text-gray-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">8.7</div>
            <div className="text-xs text-gray-400">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">3+</div>
            <div className="text-xs text-gray-400">Years Learning</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button
            onClick={downloadResume}
            variant="outline"
            className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center border border-gray-600 transition-all duration-200">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        className="bg-gray-800 rounded-xl p-1 border border-gray-700 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-white">About Me</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Passionate Computer Science student with expertise in full-stack development. 
                Love solving complex problems and building innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs">
                  Problem Solver
                </span>
                <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                  Full Stack Dev
                </span>
                <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded-full text-xs">
                  CS Student
                </span>
              </div>
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-white">Projects</h3>
              <div className="space-y-2">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-white text-sm">Featured Projects</div>
                  <div className="text-gray-400 text-xs">MERN Stack Applications</div>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-white text-sm">DSA Solutions</div>
                  <div className="text-gray-400 text-xs">250+ Problems Solved</div>
                </div>
              </div>
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="sm"
                className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                View All Projects
              </Button>
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-white">Skills</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">React & Node.js</span>
                    <span className="text-cyan-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">DSA & Problem Solving</span>
                    <span className="text-green-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Python & Java</span>
                    <span className="text-purple-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Desktop MacBook Design - Simplified
const DesktopMacBookDesign = () => {
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
    <div className="w-full max-w-4xl mx-auto">
      {/* MacBook Screen */}
      <div className="relative bg-gray-800 rounded-2xl border-3 border-gray-700 shadow-2xl overflow-hidden">
        {/* Camera */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>

        {/* Screen content */}
        <div className="relative z-10 p-4">
          {/* Menu Bar */}
          <div className="flex items-center justify-between mb-3 px-3 py-2 bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/50">
            <div className="flex items-center gap-2">
              <div className="text-white text-sm font-medium">💻 Portfolio</div>
              <div className="flex items-center gap-2">
                <div className="text-gray-300 text-xs px-2 py-0.5 bg-gray-600/50 rounded">Terminal</div>
                <div className="text-gray-300 text-xs px-2 py-0.5 bg-gray-600/50 rounded">VS Code</div>
              </div>
            </div>
            <LiveClock />
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-4 h-[350px]">
            {/* Terminal */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
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
              <div className="flex-1 p-3 font-mono text-xs">
                <div className="text-gray-400 mb-2">~/portfolio</div>
                <div className="space-y-1">
                  <div>
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
                    >
                      ✓ Ready
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Portfolio Info */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono">Portfolio</span>
                </div>
                <Code2 className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex-1 p-3 text-xs">
                <div className="space-y-3">
                  <div>
                    <h1 className="text-lg font-bold text-white mb-1">
                      {personalInfo.name}
                    </h1>
                    <p className="text-cyan-400 font-mono">{personalInfo.title}</p>
                    <p className="text-gray-300 mt-2">CS Student & Full Stack Developer</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Base */}
      <div className="relative h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl mx-4 shadow-xl flex items-center justify-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
        
        {/* Social Keys */}
        <div className="flex items-center gap-2">
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
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-6 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded border border-gray-400/30 flex items-center justify-center shadow-sm">
                  <Icon className="w-3 h-3 text-gray-700" />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    {link.name}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const MacBookPortfolio = () => {
  return (
    <motion.section
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-6 px-4 overflow-hidden z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Mobile View - Clean Card Design */}
      <div className="block lg:hidden w-full">
        <MobilePortfolioCard />
      </div>

      {/* Desktop View - MacBook Design */}
      <div className="hidden lg:block w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <DesktopMacBookDesign />
        </motion.div>
      </div>

      {/* Simple hint text */}
      <motion.div
        className="mt-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <p className="text-gray-400 text-xs sm:text-sm">
          <span className="lg:hidden">Swipe through sections to explore</span>
          <span className="hidden lg:inline">Live portfolio experience • Press any key to connect</span>
        </p>
      </motion.div>
    </motion.section>
  );
};
