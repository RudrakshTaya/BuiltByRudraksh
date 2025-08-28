import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Trophy,
  Terminal,
  Brain,
} from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { personalInfo, socialLinks } from "../data/portfolioData";

// Simple typing effect
const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      },
      delay + currentIndex * 100,
    );

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-cyan-400"
      >
        |
      </motion.span>
    </span>
  );
};

// Minimal floating elements
const FloatingTechIcons = () => {
  const icons = ["⚛️", "🟢", "🐍", "☕", "💻", "🚀"];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export const LightweightHero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background elements */}
      <FloatingTechIcons />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold gradient-text mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              <TypewriterText
                text="Computer Science Student & Full Stack Developer"
                delay={1000}
              />
            </motion.div>

            {/* Simple role display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold">
                  Problem Solver
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">
                  Full Stack Dev
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">
                  CS Student
                </span>
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8"
            >
              {[
                { label: "Problems Solved", value: "250+" },
                { label: "Projects Built", value: "15+" },
                { label: "Years Learning", value: "3+" },
                { label: "CGPA", value: "8.7" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 px-8 py-3 rounded-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              className="flex justify-center gap-6"
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
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`${link.color} p-4 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
