import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Trophy, ArrowDown, Sparkles, Zap, Cpu, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { personalInfo, skills, stats, socialLinks } from '../data/portfolioData';
import { SmoothParallaxBackground } from './SmoothParallaxBackground';

// Enhanced Particle System
const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Advanced Code Matrix Effect
const CodeMatrix = () => {
  const [codeElements, setCodeElements] = useState<Array<{ 
    id: number; 
    x: number; 
    chars: string[]; 
    delay: number; 
    speed: number; 
  }>>([]);

  useEffect(() => {
    const codeSnippets = [
      'const developer = "Rudraksh"',
      'function solve(problem)',
      '{ passion + code }',
      'async await success()',
      'while(learning) grow()',
      'return excellence;',
      'if(challenge) solve()',
      'class Engineer extends Human',
      'npm install creativity',
      'git commit -m "magic"'
    ];
    
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      chars: codeSnippets[Math.floor(Math.random() * codeSnippets.length)].split(''),
      delay: Math.random() * 8,
      speed: 0.8 + Math.random() * 1.2,
    }));
    setCodeElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {codeElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute font-mono text-xs text-cyan-400"
          style={{ left: `${element.x}%` }}
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{
            duration: 15 / element.speed,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {element.chars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 10,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Simplified Tech Sphere
const TechSphere = () => {
  return (
    <motion.div
      className="absolute right-8 top-1/2 transform -translate-y-1/2 w-64 h-64 hidden xl:block opacity-60"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {skills.techStack.slice(0, 8).map((tech, index) => {
          const angle = (index / 8) * 2 * Math.PI;
          const radius = 80;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech.name}
              className="absolute w-10 h-10 flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                left: '50%',
                top: '50%',
                marginLeft: '-20px',
                marginTop: '-20px',
              }}
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
              }}
              whileHover={{ scale: 1.3 }}
            >
              <div className={`w-full h-full ${tech.color} rounded-lg flex items-center justify-center text-black text-sm font-bold shadow-md backdrop-blur-sm border border-white/20`}>
                {tech.icon}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

// Dynamic Role Animator with Stagger Effect
const RoleAnimator = () => {
  const roles = [
    { text: "Full Stack Developer", color: "text-blue-400", icon: Code2 },
    { text: "Problem Solver", color: "text-purple-400", icon: Brain },
    { text: "Software Engineer", color: "text-cyan-400", icon: Cpu },
    { text: "Tech Enthusiast", color: "text-green-400", icon: Zap },
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
      className="flex items-center justify-center gap-4 h-16"
      key={currentRole}
    >
      <motion.div
        initial={{ opacity: 0, x: -50, rotateY: -90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        exit={{ opacity: 0, x: 50, rotateY: 90 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex items-center gap-3"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
        >
          {React.createElement(roles[currentRole].icon, { className: "w-6 h-6 text-white" })}
        </motion.div>
        <motion.span 
          className={`text-2xl md:text-4xl font-bold ${roles[currentRole].color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {roles[currentRole].text}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Interactive Tech Stack
const InteractiveTechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <motion.div 
      className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8, staggerChildren: 0.1 }}
    >
      {skills.techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="relative group cursor-pointer"
          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            delay: 2 + index * 0.1, 
            duration: 0.6,
            type: "spring",
            stiffness: 120
          }}
          whileHover={{ 
            scale: 1.2, 
            rotateY: 180,
            z: 50
          }}
          onHoverStart={() => setHoveredTech(tech.name)}
          onHoverEnd={() => setHoveredTech(null)}
          style={{ perspective: '1000px' }}
        >
          {/* Front Face */}
          <motion.div
            className={`w-16 h-16 ${tech.color} rounded-2xl flex items-center justify-center text-black text-xl font-bold shadow-premium relative`}
            
            style={{ 
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            
            <motion.div
              animate={hoveredTech === tech.name ? { rotate: 360 } : {}}
              transition={{ duration: 0.6 }}
            >
              {tech.icon}
            </motion.div>
            <div className="text-[8px] leading-none font-semibold">{tech.name}</div>
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={hoveredTech === tech.name ? { 
                boxShadow: `0 0 30px ${tech.color.includes('blue') ? '#3B82F6' : 
                                       tech.color.includes('purple') ? '#8B5CF6' :
                                       tech.color.includes('green') ? '#10B981' :
                                       tech.color.includes('yellow') ? '#F59E0B' : '#06B6D4'}` 
              } : {}}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Back Face */}
          <motion.div
            className="absolute inset-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <span className="text-white text-xs font-semibold text-center leading-tight">
              {tech.name}
            </span>
          </motion.div>

          {/* Category Label */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredTech === tech.name ? 1 : 0,
              y: hoveredTech === tech.name ? 0 : 10
            }}
            transition={{ duration: 0.2 }}
          >
            {tech.category}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced Parallax Background Elements
const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -75]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -450]);

  return (
    <>
      {/* Enhanced gradient orbs with 3D positioning */}
      <motion.div
        style={{
          y: y1,
          transform: 'translateZ(-100px)',
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
        animate={{
          background: [
            'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          y: y2,
          transform: 'translateZ(-200px)',
        }}
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-25"
        animate={{
          background: [
            'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          y: y3,
          transform: 'translateZ(-50px)',
        }}
        className="absolute top-1/2 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        animate={{
          background: [
            'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Additional depth layers */}
      <motion.div
        style={{
          y: y4,
          transform: 'translateZ(-400px)',
        }}
        className="absolute top-10 right-10 w-48 h-48 rounded-full blur-2xl opacity-15"
        animate={{
          background: [
            'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          ],
          scale: [1, 1.3, 1],
        }}
        transition={{
          background: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </>
  );
};

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        opacity,
        scale,
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Smooth Parallax Background System */}
      <SmoothParallaxBackground />

      {/* Simplified Tech Sphere */}
      <TechSphere />

      {/* Clean Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          className="space-y-12"
          style={{
            transform: `translateY(${mousePosition.y * 0.5}px) translateX(${mousePosition.x * 0.3}px)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Animated Name with Sparkle Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="gradient-text relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {personalInfo.name}
                
                {/* Sparkle Effects */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-6"
                  animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                >
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </motion.span>
            </motion.h1>

            {/* Subtitle with typing effect */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Building the future, one line of code at a time
            </motion.p>
          </motion.div>

          {/* Dynamic Role Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <RoleAnimator />
          </motion.div>

          {/* Enhanced Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {stats.hero.map((stat, index) => (
              <motion.div
                key={index}
                className="glass px-6 py-4 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
              >
                <motion.span 
                  className={`text-${stat.color} font-bold text-lg block group-hover:scale-110 transition-transform`}
                >
                  {stat.label.split(' ')[0]}
                </motion.span>
                <span className="text-gray-400 text-sm">
                  {stat.label.split(' ').slice(1).join(' ')}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <InteractiveTechStack />
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToContact}
                className="glass border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-glow-lg transition-all duration-300"
              >
                <Mail className="mr-3 h-6 w-6" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with Enhanced Animation */}
          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
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
                  transition={{ delay: 3.7 + index * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div 
                    className={`${link.color} p-4 rounded-2xl glass border border-white/20 hover:border-white/40 transition-all duration-300 relative overflow-hidden`}
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                      backgroundColor: "rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <Icon className="h-7 w-7 relative z-10" />
                    
                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  {/* Platform Label */}
                  <motion.div 
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        {/* <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
        > */}
          {/* <motion.div 
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
          > */}
            {/* <motion.div 
              className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center relative group-hover:border-cyan-300 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            > */}
              {/* <motion.div 
                className="w-1.5 h-4 bg-cyan-400 rounded-full mt-2 group-hover:bg-cyan-300 transition-colors"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div> */}
            
            {/* <motion.div
              className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              <span>Explore More</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};
