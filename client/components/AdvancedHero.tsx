import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Trophy,
  ArrowDown,
  Sparkles,
  Zap,
  Cpu,
  Brain,
  Terminal,
  Binary,
  Wifi,
  Database,
  Cloud,
  Layers,
} from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import {
  personalInfo,
  skills,
  stats,
  socialLinks,
} from "../data/portfolioData";

// High-tech typing effect for name
const TypingName = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const name = personalInfo.name;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedText((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentIndex, name]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold mb-6 relative text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text relative inline-block drop-shadow-lg">
          {displayedText}
          <motion.span
            className="text-neon-cyan"
            animate={{ opacity: showCursor ? 1 : 0 }}
            transition={{ duration: 0.1 }}
          >
            |
          </motion.span>
        </span>

        {/* Matrix-style background effects */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 text-xs font-mono"
              style={{
                left: `${(i * 27) % 100}%`,
                top: `${(i * 17) % 100}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            >
              {i % 2 === 0 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      </motion.h1>
    </div>
  );
};

// Enhanced terminal with cycling tech commands
const TerminalSubtitle = () => {
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
    "curl -X POST /api/innovation -d '{\"passion\": \"unlimited\"}'",
    "sudo systemctl enable continuous-learning.service",
    "grep -r 'problem-solving' ~/mindset | wc -l # Always active"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < techCommands[commandIndex].length) {
        setDisplayedText((prev) => prev + techCommands[commandIndex][currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (!isCompleted) {
        setIsCompleted(true);
        // Start next command after a pause
        setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
          setIsCompleted(false);
          setCommandIndex((prev) => (prev + 1) % techCommands.length);
        }, 3000);
      }
    }, currentIndex === 0 && commandIndex === 0 ? 2000 : 50); // First command starts after name typing

    return () => clearTimeout(timer);
  }, [currentIndex, commandIndex, isCompleted, techCommands]);

  return (
    <motion.div
      className="glass p-3 sm:p-4 md:p-6 rounded-2xl border border-neon-blue/30 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mb-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
        <div className="flex gap-1 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-xs sm:text-sm font-mono">
          ~/portfolio
        </span>
      </div>

      <div className="space-y-2">
        <div className="font-mono text-left text-xs sm:text-sm md:text-base overflow-hidden min-h-[1.5rem]">
          <span className="text-neon-green">$ </span>
          <span className="text-white break-words">{displayedText}</span>
          {!isCompleted && (
            <motion.span
              className="text-neon-cyan ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.span>
          )}
        </div>

        {/* Command output/result */}
        {isCompleted && (
          <motion.div
            className="text-neon-cyan/80 text-xs sm:text-sm font-mono pl-2"
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
    </motion.div>
  );
};

// High-tech role display with matrix effect
const MatrixRoles = () => {
  const roles = [
    {
      text: "Full Stack Developer",
      color: "text-neon-blue",
      prefix: "class",
      suffix: "extends Developer",
    },
    {
      text: "Algorithm Expert",
      color: "text-neon-purple",
      prefix: "function",
      suffix: "{ return optimal; }",
    },
    {
      text: "Problem Solver",
      color: "text-neon-cyan",
      prefix: "const",
      suffix: "= true;",
    },
    {
      text: "CS Student",
      color: "text-neon-green",
      prefix: "while",
      suffix: "{ learn(); }",
    },
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="glass p-6 rounded-2xl border border-white/20 max-w-4xl mx-auto"
      key={currentRole}
    >
      <div className="grid md:grid-cols-3 gap-4 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-400 font-mono text-sm md:text-base"
        >
          {roles[currentRole].prefix}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <motion.div
            className="w-3 h-3 bg-neon-blue rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span
            className="text-xl md:text-2xl font-bold font-mono"
            style={{
              color: roles[currentRole].color.includes("neon-blue")
                ? "#3b82f6"
                : roles[currentRole].color.includes("neon-purple")
                  ? "#8b5cf6"
                  : roles[currentRole].color.includes("neon-cyan")
                    ? "#06b6d4"
                    : roles[currentRole].color.includes("neon-green")
                      ? "#10b981"
                      : "#3b82f6",
            }}
          >
            {roles[currentRole].text}
          </span>
          <motion.div
            className="w-3 h-3 bg-neon-purple rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-400 font-mono text-sm md:text-base text-right"
        >
          {roles[currentRole].suffix}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Advanced tech stack with circuit board design
const CircuitTechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Safe fallback for tech stack
  const techStack = skills?.techStack || [
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "JavaScript", icon: "JS", color: "bg-yellow-500" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <motion.div
      className="relative max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Circuit paths */}
            <path
              d="M50,100 L150,100 L150,50 L250,50 L250,150 L350,150"
              stroke="#00bcd4"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50,150 L100,150 L100,100 L200,100 L200,50 L350,50"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>

      {/* Tech stack grid */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4 relative z-10 max-w-6xl mx-auto px-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative cursor-pointer flex flex-col items-center"
            initial={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <motion.div
              className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${tech.color} rounded-xl flex items-center justify-center relative overflow-hidden border-2 ${
                index === activeIndex ? "border-neon-cyan" : "border-white/20"
              } mb-2`}
              animate={
                index === activeIndex
                  ? {
                      boxShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                        "0 0 40px rgba(6, 182, 212, 0.8)",
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2 }}
            >
              <span className="text-lg sm:text-xl md:text-2xl">{tech.icon}</span>

              {/* Circuit connections */}
              {index === activeIndex && (
                <div className="absolute inset-0 border-2 border-neon-cyan rounded-xl animate-pulse" />
              )}
            </motion.div>

            {/* Tech name - Always visible on mobile, animated on desktop */}
            <motion.div
              className="text-center w-full"
              animate={typeof window !== 'undefined' && window.innerWidth < 768 ? { opacity: 1 } : (index === activeIndex ? { opacity: 1 } : { opacity: 0.6 })}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs sm:text-sm font-mono text-white block leading-tight px-1">
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Advanced stats with animated counters
const AnimatedStats = () => {
  // Safe fallback for stats
  const heroStats = stats?.hero || [
    { label: "250+ Problems", color: "neon-green" },
    { label: "15+ Projects", color: "neon-blue" },
    { label: "3+ Years Learning", color: "neon-purple" },
    { label: "8.7 CGPA", color: "neon-cyan" },
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-4"
    >
      {heroStats.map((stat, index) => (
        <motion.div
          key={index}
          className="glass px-4 py-3 rounded-xl border border-white/20 group relative text-center min-w-[120px]"
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(59, 130, 246, 0.5)",
          }}
        >
          <motion.div
            className="font-bold text-lg font-mono text-white mb-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05, type: "spring" }}
          >
            {stat.label.split(" ")[0]}
          </motion.div>
          <div className="text-gray-400 text-xs font-mono">
            {stat.label.split(" ").slice(1).join(" ")}
          </div>

          {/* Circuit corner decoration */}
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/30"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/30"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Advanced action buttons with holographic effect
const HolographicButtons = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          size="lg"
          variant="outline"
          onClick={scrollToContact}
          className="glass border-2 border-neon-cyan/50 text-neon-cyan px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-bold text-sm sm:text-base md:text-lg font-mono relative overflow-hidden w-full sm:w-auto"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent w-full"
            animate={{ x: [-300, 300] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Terminal className="mr-3 h-6 w-6" />
          <span className="relative z-10">Initialize Contact</span>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          size="lg"
          onClick={downloadResume}
          className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-bold text-sm sm:text-base md:text-lg font-mono relative overflow-hidden w-full sm:w-auto"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
            animate={{ x: [-300, 300] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <Download className="mr-3 h-6 w-6" />
          <span className="relative z-10">Download.exe</span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export const AdvancedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    // Ensure DOM is ready before starting animations
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <div className="h-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent rounded mb-6 w-96 mx-auto flex items-center justify-center text-4xl font-bold">
              Loading...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12"
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <motion.div
          className="space-y-6"
          style={{
            transform: `translateY(${mousePosition.y * 0.3}px) translateX(${mousePosition.x * 0.2}px)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Advanced Name Display */}
          <TypingName />

          {/* Terminal Subtitle */}
          <TerminalSubtitle />

          {/* Core Values - Compact */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.span
              className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            >
              • Innovation through Code
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple text-sm font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
            >
              • Problem Solving Mindset
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
            >
              • Continuous Learning
            </motion.span>
          </motion.div>

          {/* Matrix Role Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <MatrixRoles />
          </motion.div>

          {/* Compact Stats and Tech Stack */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <AnimatedStats />
            <CircuitTechStack />
          </motion.div>

          {/* Action Buttons and Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.6 }}
          >
            <HolographicButtons />

            {/* Social Links */}
            <div className="flex justify-center space-x-4 max-w-lg mx-auto px-4">
            {(socialLinks || []).map((link, index) => {
              const iconMap: { [key: string]: any } = {
                Github: Github,
                Linkedin: Linkedin,
                Code2: Code2,
                Trophy: Trophy,
              };
              const Icon = iconMap[link.icon];

              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  initial={{ opacity: 0, y: 30, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.4,
                    type: "spring",
                  }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`${link.color} p-3 sm:p-4 md:p-5 rounded-2xl glass border border-white/20 relative overflow-hidden`}
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                      borderColor: "rgba(6, 182, 212, 0.5)",
                    }}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 relative z-10" />

                    {/* Holographic scan line */}
                    <motion.div
                      className="absolute inset-x-0 h-0.5 bg-neon-cyan top-0"
                      animate={{ y: ["-4px", "60px"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Platform Label with glitch effect */}
                  <motion.div
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-cyan-400 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-mono backdrop-blur-sm border border-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30"
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.div>
                </motion.a>
              );
            })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
