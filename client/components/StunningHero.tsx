import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code2, Sparkles, Zap, Cpu, Brain, Terminal, Play, Pause, Volume2, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { personalInfo, skills, stats, socialLinks } from '../data/portfolioData';

// Glitch effect for name
const GlitchName = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const name = personalInfo?.name || "Developer";

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative">
      <motion.h1 
        className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 relative select-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Main name */}
        <motion.span 
          className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          animate={isGlitching ? {
            x: [0, -5, 5, -3, 3, 0],
            textShadow: [
              "0 0 0 transparent",
              "3px 0 0 #ff0000, -3px 0 0 #00ffff",
              "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
              "0 0 0 transparent"
            ]
          } : {}}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.span>

        {/* Glitch overlay */}
        <AnimatePresence>
          {isGlitching && (
            <>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent opacity-70"
                initial={{ x: 0 }}
                animate={{ x: [-2, 2, -1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {name}
              </motion.span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent opacity-50"
                initial={{ x: 0 }}
                animate={{ x: [2, -2, 1, -1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {name}
              </motion.span>
            </>
          )}
        </AnimatePresence>

        {/* Holographic overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles around name */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.h1>
    </div>
  );
};

// Animated role display with dramatic effects
const DramaticRoles = () => {
  const roles = [
    { text: "FULL STACK DEVELOPER", color: "from-blue-400 to-cyan-400", icon: Code2 },
    { text: "CS STUDENT", color: "from-purple-400 to-pink-400", icon: Brain },
    { text: "PROBLEM SOLVER", color: "from-green-400 to-emerald-400", icon: Cpu },
    { text: "TECH INNOVATOR", color: "from-orange-400 to-red-400", icon: Zap },
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="relative mb-12"
      key={currentRole}
    >
      <motion.div
        className="glass p-8 rounded-3xl border-2 border-white/20 backdrop-blur-xl relative overflow-hidden"
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        exit={{ opacity: 0, rotateX: 90 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Dynamic background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${roles[currentRole].color} opacity-20`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex items-center justify-center gap-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${roles[currentRole].color} flex items-center justify-center`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            {React.createElement(roles[currentRole].icon, { className: "w-8 h-8 text-black" })}
          </motion.div>
          
          <motion.h2 
            className={`text-3xl md:text-5xl font-black bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {roles[currentRole].text}
          </motion.h2>
        </div>

        {/* Scan lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-full"
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

// Massive tech stack display
const MegaTechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback tech stack
  const fallbackTechStack = [
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "JavaScript", icon: "JS", color: "bg-yellow-500" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
    { name: "Node.js", icon: "📗", color: "bg-green-500" },
    { name: "Python", icon: "🐍", color: "bg-green-600" },
    { name: "Java", icon: "☕", color: "bg-orange-500" },
    { name: "Git", icon: "🔧", color: "bg-red-500" },
    { name: "Docker", icon: "🐳", color: "bg-blue-400" },
  ];

  // Enhanced validation for tech stack
  let techStackToRender = fallbackTechStack;

  try {
    if (skills?.techStack && Array.isArray(skills.techStack) && skills.techStack.length > 0) {
      const validTechStack = skills.techStack.filter(tech =>
        tech &&
        typeof tech === 'object' &&
        tech.name &&
        typeof tech.name === 'string'
      );

      if (validTechStack.length > 0) {
        techStackToRender = validTechStack;
      }
    }
  } catch (error) {
    console.warn('Error processing techStack, using fallback:', error);
    techStackToRender = fallbackTechStack;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStackToRender.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [techStackToRender.length]);

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.h3 
        className="text-2xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        TECHNOLOGIES & SKILLS
      </motion.h3>
      
      {/* Hexagonal grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
        {Array.isArray(techStackToRender) && techStackToRender.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              delay: 2 + index * 0.05, 
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{ 
              scale: 1.3, 
              rotateZ: 360,
              y: -10
            }}
          >
            <motion.div
              className={`w-20 h-20 ${tech.color} rounded-2xl flex items-center justify-center relative overflow-hidden border-4 ${
                index === activeIndex ? 'border-cyan-400 shadow-2xl shadow-cyan-400/50' : 'border-white/20'
              }`}
              animate={index === activeIndex ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 40px rgba(6, 182, 212, 0.8)',
                  '0 0 20px rgba(6, 182, 212, 0.5)'
                ]
              } : {}}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                animate={index === activeIndex ? { rotate: 360 } : {}}
                transition={{ duration: 2, ease: "linear" }}
              >
                {tech.icon}
              </motion.div>
              
              {/* Active glow */}
              {index === activeIndex && (
                <>
                  <motion.div
                    className="absolute inset-0 border-4 border-cyan-400 rounded-2xl"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/20 rounded-2xl"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </>
              )}
            </motion.div>
            
            {/* Tech name popup */}
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan-400 px-3 py-2 rounded-lg text-sm font-bold border border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ y: -5 }}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Explosive stats display
const ExplosiveStats = () => {
  // Fallback stats
  const fallbackStats = [
    { label: "250+ Problems", color: "neon-blue" },
    { label: "15+ Projects", color: "neon-purple" },
    { label: "3+ Years", color: "neon-cyan" },
    { label: "8.7 CGPA", color: "neon-green" }
  ];

  // Enhanced validation for stats
  let statsToRender = fallbackStats;

  try {
    if (stats?.hero && Array.isArray(stats.hero) && stats.hero.length > 0) {
      const validStats = stats.hero.filter(stat =>
        stat &&
        typeof stat === 'object' &&
        stat.label &&
        typeof stat.label === 'string'
      );

      if (validStats.length > 0) {
        statsToRender = validStats;
      }
    }
  } catch (error) {
    console.warn('Error processing stats, using fallback:', error);
    statsToRender = fallbackStats;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {statsToRender.map((stat, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 + index * 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotateZ: 5 }}
        >
          <motion.div
            className="glass p-8 rounded-3xl border-2 border-white/20 text-center relative overflow-hidden"
            animate={{
              borderColor: ['rgba(255,255,255,0.2)', 'rgba(6,182,212,0.8)', 'rgba(255,255,255,0.2)'],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
          >
            {/* Background explosion effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent"
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />
            
            <motion.div 
              className={`text-${stat.color} font-black text-4xl md:text-6xl mb-3 relative z-10`}
              animate={{
                scale: [1, 1.1, 1],
                textShadow: [
                  '0 0 0 transparent',
                  '0 0 20px currentColor',
                  '0 0 0 transparent'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {stat.label.split(' ')[0]}
            </motion.div>
            <div className="text-white font-bold text-lg relative z-10">
              {stat.label.split(' ').slice(1).join(' ')}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Epic action buttons
const EpicButtons = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 1 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <Button 
          size="lg" 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-12 py-6 rounded-full font-black text-xl relative overflow-hidden border-0 shadow-2xl"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative z-10 flex items-center gap-3">
            <Terminal className="w-6 h-6" />
            LET'S CONNECT
          </span>
        </Button>
        
        {/* Button glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <Button 
          size="lg" 
          variant="outline"
          onClick={downloadResume}
          className="border-4 border-cyan-400 text-cyan-400 bg-black/50 hover:bg-cyan-400/10 px-12 py-6 rounded-full font-black text-xl relative overflow-hidden backdrop-blur-xl"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="relative z-10 flex items-center gap-3">
            <Download className="w-6 h-6" />
            DOWNLOAD CV
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

// Social links with explosion effects
const ExplosiveSocials = () => {
  // Create fallback social links to prevent errors
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
      color: "text-neon-blue"
    },
    {
      name: "LeetCode",
      icon: "Code2",
      url: "https://leetcode.com/rudrakshtaya",
      color: "text-neon-cyan"
    }
  ];

  // Enhanced validation and fallback handling
  let linksToRender = fallbackSocialLinks;

  try {
    if (socialLinks && Array.isArray(socialLinks) && socialLinks.length > 0) {
      // Filter out any invalid links
      const validLinks = socialLinks.filter(link =>
        link &&
        typeof link === 'object' &&
        link.name &&
        link.url &&
        typeof link.name === 'string' &&
        typeof link.url === 'string'
      );

      if (validLinks.length > 0) {
        linksToRender = validLinks;
      }
    }
  } catch (error) {
    console.warn('Error processing socialLinks, using fallback:', error);
    linksToRender = fallbackSocialLinks;
  }

  return (
    <motion.div
      className="flex justify-center space-x-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
    >
      {Array.isArray(linksToRender) && linksToRender.map((link, index) => {
        // Enhanced icon mapping with more options
        const iconMap: { [key: string]: any } = {
          'Github': Github,
          'Linkedin': Linkedin,
          'Code2': Code2,
          'Trophy': Trophy,
          'Mail': Mail
        };

        // Safe icon selection with fallback
        let Icon = Code2; // Default fallback
        if (link && link.icon && typeof link.icon === 'string' && iconMap[link.icon]) {
          Icon = iconMap[link.icon];
        }

        // Skip if link is invalid
        if (!link || !link.name || !link.url) {
          return null;
        }

        return (
          <motion.a
            key={`${link.name}-${index}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{
              delay: 4.2 + index * 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{
              scale: 1.3,
              rotateZ: 360,
              y: -20
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`${link.color || 'text-white'} p-6 rounded-3xl border-4 border-white/20 relative overflow-hidden backdrop-blur-xl`}
              whileHover={{
                borderColor: 'rgba(6, 182, 212, 1)',
                boxShadow: "0 0 50px rgba(6, 182, 212, 0.8)",
              }}
            >
              {Icon && <Icon className="h-10 w-10 relative z-10" />}

              {/* Explosion effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-cyan-400/50 to-transparent"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 3, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/50 rounded-3xl"
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Platform label */}
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan-400 px-4 py-2 rounded-xl text-lg font-bold border-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xl"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              {link.name}
            </motion.div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export const StunningHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
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
      {/* Dynamic grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <motion.div
          className="space-y-8"
          style={{
            transform: `translateY(${mousePosition.y * 0.5}px) translateX(${mousePosition.x * 0.3}px)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Glitch Name */}
          <GlitchName />

          {/* Dramatic subtitle */}
          <motion.p
            className="text-xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Creating <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold">digital experiences</span> that push the boundaries of technology
          </motion.p>

          {/* Dramatic Roles */}
          <DramaticRoles />

          {/* Explosive Stats */}
          <ExplosiveStats />

          {/* Mega Tech Stack */}
          <MegaTechStack />

          {/* Epic Buttons */}
          <EpicButtons />

          {/* Explosive Social Links */}
          <ExplosiveSocials />
        </motion.div>
      </div>
    </motion.section>
  );
};
