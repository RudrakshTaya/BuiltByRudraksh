import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Maximize
} from 'lucide-react';
import { Button } from './ui/button';
import { downloadResume } from '../utils/downloadResume';
import { personalInfo, skills, stats, socialLinks } from '../data/portfolioData';

// Enhanced terminal with cycling tech commands
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
        setTimeout(() => {
          setDisplayedText("");
          setCurrentIndex(0);
          setIsCompleted(false);
          setCommandIndex((prev) => (prev + 1) % techCommands.length);
        }, 3000);
      }
    }, currentIndex === 0 && commandIndex === 0 ? 2000 : 50);

    return () => clearTimeout(timer);
  }, [currentIndex, commandIndex, isCompleted, techCommands]);

  return (
    <div className="bg-gray-900/95 rounded-lg border border-gray-600 h-full flex flex-col shadow-2xl backdrop-blur-sm">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800/90 rounded-t-lg border-b border-gray-600">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono ml-2">Terminal</span>
        </div>
        <Terminal className="w-4 h-4 text-gray-400" />
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-4 font-mono text-sm overflow-hidden bg-black/50">
        <div className="text-green-400 mb-3 text-sm">~/portfolio</div>
        
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

// VS Code style portfolio content
const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState('portfolio.md');

  const tabs = [
    { id: 'portfolio.md', name: 'portfolio.md', icon: FileText },
    { id: 'stats.json', name: 'stats.json', icon: Code2 },
    { id: 'contact.js', name: 'contact.js', icon: Settings }
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
    <div className="bg-gray-900/95 rounded-lg border border-gray-600 h-full flex flex-col shadow-2xl backdrop-blur-sm">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800/90 rounded-t-lg border-b border-gray-600">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono ml-2">VS Code</span>
        </div>
        <Code2 className="w-4 h-4 text-gray-400" />
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800/90 border-b border-gray-600 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm border-r border-gray-600 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gray-900/95 text-white'
                  : 'bg-gray-800/90 text-gray-400 hover:text-white hover:bg-gray-750'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split('.')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-auto bg-black/50">
        <AnimatePresence mode="wait">
          {activeTab === 'portfolio.md' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-2xl font-bold text-white mb-2"># {personalInfo.name}</h1>
                <p className="text-cyan-400 font-mono">## {personalInfo.title} | {personalInfo.subtitle}</p>
                <p className="text-gray-300 mt-4">{personalInfo.bio.short}</p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">### Core Values</h3>
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
                <h3 className="text-lg font-semibold text-white mb-4">### Quick Actions</h3>
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

          {activeTab === 'stats.json' && (
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
                    <span className="text-cyan-400">"{stat.label.toLowerCase().replace(/\s+/g, '_')}"</span>
                    <span className="text-white">: </span>
                    <span className="text-green-400">"{stat.label.split(' ')[0]}"</span>
                    {index < heroStats.length - 1 && <span className="text-white">,</span>}
                  </div>
                ))}
                <div className="text-purple-400">{`}`}</div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contact.js' && (
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
                  {index < socialLinks.length - 1 && <span className="text-white">,</span>}
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
      className="relative min-h-screen flex items-center justify-center py-8 px-4 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* MacBook Container */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* MacBook Screen */}
          <div className="relative mx-auto" style={{ perspective: '2000px' }}>
            {/* Screen with bezels */}
            <div 
              className="relative bg-black rounded-t-3xl border-8 border-gray-700 shadow-2xl mx-4 sm:mx-8"
              style={{
                background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                transform: 'rotateX(2deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Outer bezel */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-t-3xl p-2">
                {/* Inner bezel */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-t-2xl border border-gray-600">
                  {/* Apple logo */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full opacity-40 shadow-inner"></div>
                  
                  {/* Camera */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 translate-x-10 w-2 h-2 bg-green-400 rounded-full opacity-70 animate-pulse shadow-lg"></div>
                  
                  {/* Screen content area */}
                  <div className="p-4 pt-12 h-96 sm:h-[500px] lg:h-[600px]">
                    {/* macOS Menu Bar */}
                    <div className="flex items-center justify-between mb-4 px-4 py-3 bg-gray-800/90 rounded-lg border border-gray-600/50 shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="text-white text-base font-medium">🍎 Rudraksh Portfolio</div>
                        <div className="hidden sm:flex items-center gap-3">
                          <div className="text-gray-300 text-xs px-2 py-1 bg-gray-700/50 rounded">Terminal</div>
                          <div className="text-gray-300 text-xs px-2 py-1 bg-gray-700/50 rounded">VS Code</div>
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm font-mono bg-gray-700/50 px-3 py-1 rounded">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>

                    {/* Split screen layout */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 h-full">
                      <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <PortfolioTerminal />
                      </motion.div>

                      <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                      >
                        <VSCodePortfolio />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Base with Keyboard */}
            <div className="relative">
              {/* Main keyboard base */}
              <div 
                className="relative h-8 sm:h-12 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-b-3xl mx-4 sm:mx-8 shadow-2xl border-t border-gray-500"
                style={{
                  transform: 'rotateX(5deg)',
                  transformOrigin: 'top',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Keyboard surface */}
                <div className="absolute inset-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl">
                  {/* Trackpad */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-2 sm:h-3 bg-gray-600 rounded border border-gray-500 shadow-inner"></div>
                  
                  {/* MacBook Keyboard-Style Social Link Buttons */}
                  <div className="absolute top-1 sm:top-2 right-4 sm:right-8 flex gap-2 sm:gap-3">
                    {socialLinks.slice(0, 3).map((link, index) => {
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
                          className="relative group cursor-pointer"
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95, y: 0.5 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                        >
                          {/* MacBook Key */}
                          <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-md shadow-lg border border-gray-400/50 flex items-center justify-center transform transition-all duration-200 group-hover:from-gray-300 group-hover:via-gray-400 group-hover:to-gray-500 group-active:scale-95">
                            {/* Key highlight */}
                            <div className="absolute inset-0.5 bg-gradient-to-b from-white/60 to-transparent rounded-sm opacity-80"></div>
                            
                            {/* Icon */}
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 relative z-10 drop-shadow-sm" />
                            
                            {/* Key press shadow */}
                            <div className="absolute inset-0 bg-gray-600/30 rounded-md opacity-0 group-active:opacity-100 transition-opacity duration-100"></div>
                          </div>
                          
                          {/* Key base shadow */}
                          <div className="absolute top-0.5 left-0 w-full h-full bg-gray-600/40 rounded-md -z-10 group-active:top-0.25"></div>
                          
                          {/* Tooltip */}
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <div className="bg-gray-900/95 text-white px-2 py-1 rounded text-xs font-mono whitespace-nowrap border border-gray-600 shadow-lg">
                              {link.name}
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-gray-600"></div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
                
                {/* Apple logo on keyboard base */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full opacity-30 shadow-inner"></div>
              </div>

              {/* Bottom MacBook feet */}
              <div className="relative h-2 sm:h-3 bg-gradient-to-b from-gray-800 to-black rounded-b-2xl mx-12 sm:mx-20 shadow-lg -mt-1">
                <div className="absolute bottom-0 left-6 w-3 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-0 right-6 w-3 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
