import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Database, Cloud } from "lucide-react";

const SimpleTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const commands = [
    { prompt: "~$ ", command: "whoami", output: "computer_science_student" },
    {
      prompt: "~$ ",
      command: "cat skills.txt",
      output: "React • Node.js • Python • Java • DSA",
    },
    {
      prompt: "~$ ",
      command: "git log --oneline",
      output: "250+ problems solved ✓",
    },
    {
      prompt: "~$ ",
      command: "npm run career",
      output: "Building amazing projects...",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 max-w-md mx-auto p-4">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-gray-700">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 ml-3">
          <Terminal className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm font-mono">terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="pt-3 font-mono text-sm">
        {commands.slice(0, currentLine + 1).map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2"
          >
            <div className="flex">
              <span className="text-green-400">{cmd.prompt}</span>
              <span className="text-white">{cmd.command}</span>
            </div>
            <div className="text-cyan-400 text-xs pl-3">{cmd.output}</div>
          </motion.div>
        ))}

        {/* Cursor */}
        <motion.div
          className="flex items-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-green-400">~$ </span>
          <div className="w-2 h-4 bg-white ml-1"></div>
        </motion.div>
      </div>
    </div>
  );
};

const TechStackShowcase = () => {
  const techs = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "Node.js", icon: "🟢", color: "text-green-400" },
    { name: "Python", icon: "🐍", color: "text-yellow-400" },
    { name: "Database", icon: Database, color: "text-purple-400" },
    { name: "Cloud", icon: Cloud, color: "text-cyan-400" },
    { name: "DSA", icon: Code, color: "text-orange-400" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all"
        >
          <div className="text-2xl mb-2">
            {typeof tech.icon === "string" ? (
              tech.icon
            ) : (
              <tech.icon className="w-6 h-6" />
            )}
          </div>
          <span className={`text-xs font-mono ${tech.color}`}>{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const LightweightTerminal = () => {
  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable applications with modern
            technologies
          </p>
        </motion.div>

        {/* Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SimpleTerminal />
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <TechStackShowcase />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "Problems Solved", value: "250+" },
            { label: "Projects Built", value: "15+" },
            { label: "Years Learning", value: "3+" },
            { label: "CGPA", value: "8.7" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
