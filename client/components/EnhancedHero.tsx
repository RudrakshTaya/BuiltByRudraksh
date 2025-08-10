import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code2, Trophy, Terminal, Cpu, Brain, Zap, Database } from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { personalInfo, skills, stats, socialLinks } from '../data/portfolioData';

// Enhanced typing effect for name with glitch
const EnhancedTypingName = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const name = personalInfo?.name || "Developer";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedText(prev => prev + name[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
        // Add glitch effect after typing
        setTimeout(() => {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 500);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, name]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative mb-8">
      <motion.h1 
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold relative text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg"
          animate={isGlitching ? {
            x: [0, -2, 2, -1, 1, 0],
            textShadow: [
              "0 0 0 transparent",
              "2px 0 0 #ff0000, -2px 0 0 #00ffff",
              "0 0 0 transparent"
            ]
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <motion.span
            className="text-cyan-400"
            animate={{ opacity: showCursor ? 1 : 0 }}
            transition={{ duration: 0.1 }}
          >
            |
          </motion.span>
        </motion.span>
        
        {/* High-tech particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${(i * 23) % 100}%`,
                top: `${(i * 17) % 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </motion.h1>
    </div>
  );
};

// Fixed terminal subtitle with proper responsive design
const FixedTerminalSubtitle = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const subtitle = "Computer Science Student & Full Stack Developer";

  useEffect(() => {
    const timer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < subtitle.length) {
          setDisplayedText(prev => prev + subtitle[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentIndex, subtitle]);

  return (
    <motion.div
      className="glass p-4 sm:p-6 rounded-2xl border border-cyan-400/30 max-w-4xl mx-auto mb-8 backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-xs sm:text-sm font-mono break-all">~/portfolio/about</span>
      </div>
      <div className="font-mono text-left overflow-hidden">
        <span className="text-cyan-400">$ </span>
        <span className="text-white text-sm sm:text-base break-words">{displayedText}</span>
        <motion.span
          className="text-cyan-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          _
        </motion.span>
      </div>
    </motion.div>
  );
};

// Enhanced role display with better layout
const HighTechRoles = () => {
  const roles = [
    { text: "Full Stack Developer", color: "from-blue-400 to-cyan-400", icon: Code2 },
    { text: "Algorithm Expert", color: "from-purple-400 to-pink-400", icon: Brain },
    { text: "Problem Solver", color: "from-green-400 to-emerald-400", icon: Cpu },
    { text: "CS Student", color: "from-orange-400 to-red-400", icon: Zap },
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
      className="mb-12"
      key={currentRole}
    >
      <motion.div
        className="glass p-6 sm:p-8 rounded-3xl border-2 border-white/20 backdrop-blur-xl relative overflow-hidden max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Animated background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${roles[currentRole].color} opacity-10`}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${roles[currentRole].color} flex items-center justify-center`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            {React.createElement(roles[currentRole].icon, { className: "w-8 h-8 text-black" })}
          </motion.div>
          
          <motion.h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent text-center`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {roles[currentRole].text}
          </motion.h2>
        </div>

        {/* Scan lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-full"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Fixed stats with better responsive grid
const ResponsiveStats = () => {
  const fallbackStats = [
    { label: "250+ DSA Problems", color: "#10b981" },
    { label: "15+ Full Stack Projects", color: "#3b82f6" },
    { label: "3+ Years Learning", color: "#8b5cf6" },
    { label: "8.7 CGPA", color: "#06b6d4" }
  ];

  const heroStats = stats?.hero || fallbackStats;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-6xl mx-auto"
    >
      {heroStats.map((stat, index) => (
        <motion.div
          key={index}
          className="glass p-4 sm:p-6 rounded-2xl border border-white/20 text-center relative overflow-hidden group"
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            borderColor: 'rgba(6, 182, 212, 0.5)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 + index * 0.1, duration: 0.5 }}
        >
          {/* High-tech background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <motion.div 
              className="font-bold text-xl sm:text-2xl font-mono mb-2"
              style={{ color: typeof stat.color === 'string' ? stat.color : '#10b981' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.9 + index * 0.1, type: "spring" }}
            >
              {stat.label.split(' ')[0]}
            </motion.div>
            <div className="text-gray-400 text-sm font-mono">
              {stat.label.split(' ').slice(1).join(' ')}
            </div>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced tech stack with better responsive layout
const ResponsiveTechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const fallbackTechStack = [
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "JavaScript", icon: "JS", color: "bg-yellow-500" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-600" },
    { name: "Python", icon: "🐍", color: "bg-green-500" },
    { name: "Java", icon: "☕", color: "bg-orange-500" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-400" },
    { name: "MySQL", icon: "🗄️", color: "bg-blue-500" }
  ];

  const techStack = skills?.techStack || fallbackTechStack;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <motion.div 
      className="mb-16 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <motion.h3 
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        TECH STACK & SKILLS
      </motion.h3>

      {/* Responsive grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 3.2 + index * 0.05, 
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{ 
              scale: 1.2,
              y: -5
            }}
          >
            <motion.div
              className={`w-12 h-12 sm:w-16 sm:h-16 ${tech.color} rounded-xl flex items-center justify-center relative overflow-hidden border-2 ${
                index === activeIndex ? 'border-cyan-400 shadow-lg shadow-cyan-400/50' : 'border-white/20'
              }`}
              animate={index === activeIndex ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 30px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.5)'
                ]
              } : {}}
              transition={{ duration: 1.5 }}
            >
              <span className="text-lg sm:text-xl">{tech.icon}</span>
              
              {/* Active glow */}
              {index === activeIndex && (
                <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl animate-pulse" />
              )}
            </motion.div>
            
            {/* Tech name tooltip */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan-400 px-2 py-1 rounded-lg text-xs font-bold border border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10"
              whileHover={{ y: -2 }}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Enhanced action buttons
const HighTechButtons = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full sm:w-auto"
      >
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg relative overflow-hidden border-0 shadow-xl"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative z-10 flex items-center gap-3">
            <Terminal className="w-5 h-5" />
            CONNECT NOW
          </span>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full sm:w-auto"
      >
        <Button 
          size="lg" 
          variant="outline"
          onClick={downloadResume}
          className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 bg-black/50 hover:bg-cyan-400/10 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg relative overflow-hidden backdrop-blur-xl"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Download className="w-5 h-5" />
            DOWNLOAD CV
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

// Fixed social links with proper hover effects
const FixedSocialLinks = () => {
  const fallbackSocialLinks = [
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
      color: "text-blue-400"
    },
    {
      name: "LeetCode",
      icon: "Code2",
      url: "https://leetcode.com/rudrakshtaya",
      color: "text-cyan-400"
    }
  ];

  const linksToRender = (socialLinks && Array.isArray(socialLinks) && socialLinks.length > 0) 
    ? socialLinks 
    : fallbackSocialLinks;

  return (
    <motion.div 
      className="flex justify-center space-x-6 sm:space-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 0.8 }}
    >
      {linksToRender.map((link, index) => {
        const iconMap: { [key: string]: any } = {
          'Github': Github,
          'Linkedin': Linkedin,
          'Code2': Code2,
          'Trophy': Trophy,
          'Mail': Mail
        };
        const Icon = iconMap[link.icon] || Code2;

        return (
          <motion.a
            key={`${link.name}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ opacity: 0, y: 30, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 4.2 + index * 0.1, duration: 0.5, type: "spring" }}
            whileHover={{ y: -10, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div 
              className={`${link.color || 'text-white'} p-4 sm:p-6 rounded-2xl glass border border-white/20 relative overflow-hidden backdrop-blur-xl`}
              whileHover={{ 
                borderColor: 'rgba(6, 182, 212, 1)',
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
              }}
            >
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 relative z-10" />
              
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-x-0 h-0.5 bg-cyan-400 top-0"
                animate={{ y: [0, 60] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
            </motion.div>
            
            {/* Fixed platform label */}
            <motion.div 
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-cyan-400 px-3 py-2 rounded-xl text-sm font-bold border border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xl whitespace-nowrap z-20"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              {link.name}
            </motion.div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export const EnhancedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded mx-auto w-3/4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Loading Portfolio...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20"
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* High-tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="space-y-8 sm:space-y-12"
          style={{
            transform: `translateY(${mousePosition.y * 0.3}px) translateX(${mousePosition.x * 0.2}px)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Enhanced Name */}
          <EnhancedTypingName />

          {/* Fixed Terminal Subtitle */}
          <FixedTerminalSubtitle />

          {/* High-tech Roles */}
          <HighTechRoles />

          {/* Responsive Stats */}
          <ResponsiveStats />

          {/* Responsive Tech Stack */}
          <ResponsiveTechStack />

          {/* High-tech Buttons */}
          <HighTechButtons />

          {/* Fixed Social Links */}
          <FixedSocialLinks />
        </motion.div>
      </div>
    </motion.section>
  );
};
