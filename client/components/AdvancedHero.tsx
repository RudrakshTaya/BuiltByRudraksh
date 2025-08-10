import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Trophy, ArrowDown, Sparkles, Zap, Cpu, Brain, Terminal, Binary, Wifi, Database, Cloud, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { personalInfo, skills, stats, socialLinks } from '../data/portfolioData';

// High-tech typing effect for name
const TypingName = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const name = personalInfo.name;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedText(prev => prev + name[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [currentIndex, name]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text relative inline-block">
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
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </motion.h1>
    </div>
  );
};

// Advanced terminal-style subtitle
const TerminalSubtitle = () => {
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
      }, 30);
      return () => clearInterval(typingInterval);
    }, 2000); // Start after name typing

    return () => clearTimeout(timer);
  }, [currentIndex, subtitle]);

  return (
    <motion.div
      className="glass p-4 rounded-2xl border border-neon-blue/30 max-w-2xl mx-auto mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm font-mono">~/portfolio/about</span>
      </div>
      <div className="font-mono text-left">
        <span className="text-neon-green">$ </span>
        <span className="text-white">{displayedText}</span>
        <motion.span
          className="text-neon-cyan"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          _
        </motion.span>
      </div>
    </motion.div>
  );
};

// High-tech role display with matrix effect
const MatrixRoles = () => {
  const roles = [
    { text: "Full Stack Developer", color: "text-neon-blue", prefix: "class", suffix: "extends Developer" },
    { text: "Algorithm Expert", color: "text-neon-purple", prefix: "function", suffix: "{ return optimal; }" },
    { text: "Problem Solver", color: "text-neon-cyan", prefix: "const", suffix: "= true;" },
    { text: "CS Student", color: "text-neon-green", prefix: "while", suffix: "{ learn(); }" },
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
          <span className={`text-xl md:text-2xl font-bold font-mono ${roles[currentRole].color}`}>
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="relative max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Circuit paths */}
          <motion.path
            d="M50,100 L150,100 L150,50 L250,50 L250,150 L350,150"
            stroke="#00bcd4"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M50,150 L100,150 L100,100 L200,100 L200,50 L350,50"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </svg>
      </div>

      {/* Tech stack grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 relative z-10">
        {skills.techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`relative cursor-pointer transition-all duration-300 ${
              index === activeIndex ? 'scale-110' : ''
            }`}
            whileHover={{ scale: 1.15, rotateY: 10 }}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className={`w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center relative overflow-hidden border-2 ${
                index === activeIndex ? 'border-neon-cyan' : 'border-white/20'
              }`}
              animate={index === activeIndex ? {
                boxShadow: ['0 0 20px rgba(6, 182, 212, 0.5)', '0 0 40px rgba(6, 182, 212, 0.8)', '0 0 20px rgba(6, 182, 212, 0.5)']
              } : {}}
              transition={{ duration: 2 }}
            >
              {tech.icon}
              
              {/* Circuit connections */}
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 border-2 border-neon-cyan rounded-xl"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
            
            {/* Tech name */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity"
              animate={index === activeIndex ? { opacity: 1 } : {}}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Advanced stats with animated counters
const AnimatedStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.hero.map((stat, index) => (
        <motion.div
          key={index}
          className="glass p-6 rounded-2xl border border-white/20 hover:border-neon-blue/50 transition-all duration-300 group relative overflow-hidden"
          whileHover={{ scale: 1.05, y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 + index * 0.1, duration: 0.5 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="relative z-10 text-center">
            <motion.div 
              className={`text-${stat.color} font-bold text-2xl font-mono mb-2`}
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
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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
          className="glass border-2 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-glow-lg transition-all duration-300 font-mono relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
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
          className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-glow transition-all duration-300 font-mono relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

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

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <motion.div
          className="space-y-12"
          style={{
            transform: `translateY(${mousePosition.y * 0.3}px) translateX(${mousePosition.x * 0.2}px)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Advanced Name Display */}
          <TypingName />

          {/* Terminal Subtitle */}
          <TerminalSubtitle />

          {/* Matrix Role Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <MatrixRoles />
          </motion.div>

          {/* Animated Stats */}
          <AnimatedStats />

          {/* Circuit Tech Stack */}
          <CircuitTechStack />

          {/* Holographic Buttons */}
          <HolographicButtons />

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => {
              const iconMap: { [key: string]: any } = {
                'Github': Github,
                'Linkedin': Linkedin,
                'Code2': Code2,
                'Trophy': Trophy
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
                  transition={{ delay: 4.2 + index * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div 
                    className={`${link.color} p-4 rounded-2xl glass border border-white/20 hover:border-neon-cyan/50 transition-all duration-300 relative overflow-hidden`}
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    <Icon className="h-7 w-7 relative z-10" />
                    
                    {/* Holographic scan line */}
                    <motion.div
                      className="absolute inset-x-0 h-0.5 bg-neon-cyan"
                      animate={{ y: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>
                  
                  {/* Platform Label with glitch effect */}
                  <motion.div 
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-3 py-1 rounded-lg text-sm font-mono backdrop-blur-sm border border-neon-cyan/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    /{link.name.toLowerCase()}
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
