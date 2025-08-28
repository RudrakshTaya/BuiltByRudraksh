import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Database, Cloud, GitBranch, Cpu } from "lucide-react";

const FixedSizeTerminal = () => {
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
    <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-gray-700 w-full max-w-lg mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 p-3 border-b border-gray-700 bg-[#1e1e1e] rounded-t-lg">
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

      {/* Terminal Content - Fixed Height */}
      <div className="p-4 font-mono text-sm h-[200px] overflow-hidden">
        <div className="space-y-2">
          {commands.slice(0, currentLine + 1).map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <div className="flex">
                <span className="text-green-400">{cmd.prompt}</span>
                <span className="text-white">{cmd.command}</span>
              </div>
              <div className="text-cyan-400 text-xs pl-3 min-h-[16px]">
                {cmd.output}
              </div>
            </motion.div>
          ))}

          {/* Cursor - Always visible */}
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
    </div>
  );
};

const TechStackGrid = () => {
  const techs = [
    {
      name: "React",
      icon: "⚛️",
      color: "text-blue-400",
      desc: "Frontend Framework",
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "text-green-400",
      desc: "Backend Runtime",
    },
    {
      name: "Python",
      icon: "🐍",
      color: "text-yellow-400",
      desc: "Programming Language",
    },
    {
      name: "Database",
      icon: Database,
      color: "text-purple-400",
      desc: "Data Management",
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "text-orange-400",
      desc: "Version Control",
    },
    { name: "Cloud", icon: Cloud, color: "text-cyan-400", desc: "Deployment" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="group p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300 text-center"
        >
          <div className="text-3xl mb-3">
            {typeof tech.icon === "string" ? (
              tech.icon
            ) : (
              <tech.icon className={`w-8 h-8 mx-auto ${tech.color}`} />
            )}
          </div>
          <h3 className={`font-bold ${tech.color} mb-1`}>{tech.name}</h3>
          <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {tech.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const CodeExecution = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");

  const executeCode = () => {
    setIsRunning(true);
    setOutput("");

    setTimeout(() => {
      setOutput("✓ Portfolio compiled successfully!");
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-lg p-4 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-mono">Code Runner</span>
        </div>
        <button
          onClick={executeCode}
          disabled={isRunning}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-3 py-1 rounded text-xs font-mono transition-colors"
        >
          {isRunning ? "Running..." : "▶ Run"}
        </button>
      </div>

      <div className="bg-black/50 rounded p-3 font-mono text-xs min-h-[60px]">
        {isRunning ? (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-green-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-yellow-400">
              Executing portfolio.build()...
            </span>
          </div>
        ) : output ? (
          <div className="text-green-400">{output}</div>
        ) : (
          <div className="text-gray-500">Ready to execute code...</div>
        )}
      </div>
    </div>
  );
};

export const LightweightTerminal = () => {
  return (
    <motion.section
      className="py-16 px-4 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Tech Stack & Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Passionate about building scalable applications with modern
            technologies
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Terminal Demo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FixedSizeTerminal />
            </motion.div>

            {/* Code Runner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <CodeExecution />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Tech Stack Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <TechStackGrid />
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                {
                  label: "Problems Solved",
                  value: "250+",
                  color: "text-green-400",
                },
                {
                  label: "Projects Built",
                  value: "15+",
                  color: "text-blue-400",
                },
                {
                  label: "Years Learning",
                  value: "3+",
                  color: "text-purple-400",
                },
                { label: "CGPA", value: "8.2", color: "text-yellow-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`text-xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
