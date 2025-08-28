import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Database,
  Cpu,
  Network,
  Code2,
  TreePine,
  Activity,
  Shield,
  Layers,
  ChevronRight,
  Play,
  Square,
  Circle,
  FileText,
  Terminal,
} from "lucide-react";

export const OOPStrengths = () => {
  const [activeClass, setActiveClass] = useState("ComputerScientist");
  const [isRunning, setIsRunning] = useState(false);

  const classes = [
    {
      name: "ComputerScientist",
      extends: "Student",
      implements: ["ProblemSolver", "Innovator"],
      properties: [
        { name: "name", type: "string", access: "public", value: "Rudraksh Taya" },
        { name: "skills", type: "SkillSet[]", access: "private", value: "250+ DSA Problems" },
        { name: "passion", type: "string", access: "protected", value: "Full Stack Development" },
        { name: "experience", type: "number", access: "public", value: "3+ years" },
      ],
      methods: [
        {
          name: "solveProblem",
          returnType: "Solution",
          params: ["difficulty: Hard"],
          access: "public",
          description: "Analyzes complex problems and provides optimal solutions",
        },
        {
          name: "buildApplication",
          returnType: "Project",
          params: ["tech: TechStack", "requirements: string[]"],
          access: "public",
          description: "Creates scalable full-stack applications",
        },
        {
          name: "learn",
          returnType: "Knowledge",
          params: ["technology: string"],
          access: "private",
          description: "Continuously acquires new technical skills",
        },
        {
          name: "collaborate",
          returnType: "Success",
          params: ["team: Developer[]"],
          access: "public",
          description: "Works effectively in team environments",
        },
      ],
      interfaces: {
        ProblemSolver: [
          "analyzeComplexity(): BigO",
          "optimizeAlgorithm(): Algorithm",
          "debugCode(): FixedCode",
        ],
        Innovator: [
          "createSolution(): Innovation",
          "thinkOutsideBox(): CreativeIdea",
          "improveExisting(): Enhancement",
        ],
      },
    },
    {
      name: "TechStack",
      extends: "Object",
      implements: ["Scalable", "Modern"],
      properties: [
        { name: "frontend", type: "Framework[]", access: "public", value: "React, Next.js" },
        { name: "backend", type: "Runtime[]", access: "public", value: "Node.js, Express" },
        { name: "database", type: "DB[]", access: "public", value: "MongoDB, MySQL" },
        { name: "languages", type: "Language[]", access: "public", value: "JS, TS, Python, Java" },
      ],
      methods: [
        {
          name: "buildFullStack",
          returnType: "Application",
          params: ["requirements: string[]"],
          access: "public",
          description: "Constructs complete web applications",
        },
        {
          name: "deployToCloud",
          returnType: "DeployedApp",
          params: ["platform: CloudProvider"],
          access: "public",
          description: "Deploys applications to cloud platforms",
        },
      ],
      interfaces: {
        Scalable: [
          "handleLoad(): LoadBalancer",
          "scaleHorizontally(): ScaledSystem",
        ],
        Modern: [
          "useLatestFeatures(): ModernCode",
          "followBestPractices(): QualityCode",
        ],
      },
    },
    {
      name: "ProjectManager",
      extends: "Object",
      implements: ["Organized", "Efficient"],
      properties: [
        { name: "projects", type: "Project[]", access: "private", value: "15+ completed" },
        { name: "methodology", type: "string", access: "public", value: "Agile" },
        { name: "tools", type: "Tool[]", access: "public", value: "Git, Docker, AWS" },
      ],
      methods: [
        {
          name: "planProject",
          returnType: "ProjectPlan",
          params: ["scope: string", "timeline: Date"],
          access: "public",
          description: "Creates detailed project roadmaps",
        },
        {
          name: "trackProgress",
          returnType: "Status",
          params: ["milestones: Milestone[]"],
          access: "public",
          description: "Monitors project development progress",
        },
      ],
      interfaces: {
        Organized: [
          "structureCode(): CleanArchitecture",
          "documentProcess(): Documentation",
        ],
        Efficient: [
          "optimizeWorkflow(): EfficientProcess",
          "automateRepeated(): Automation",
        ],
      },
    },
  ];

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  const currentClass = classes.find(cls => cls.name === activeClass) || classes[0];

  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* IDE Header */}
        <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-t-lg">
          <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] rounded-t-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#569cd6]" />
              <span className="text-[#d4d4d4] font-mono">ComputerScience.java</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-3 py-1 bg-[#0e639c] hover:bg-[#1177bb] text-white rounded text-sm transition-colors disabled:opacity-50"
              >
                {isRunning ? (
                  <Square className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isRunning ? "Running..." : "Run"}
              </button>
            </div>
          </div>

          {/* Class Tabs */}
          <div className="flex bg-[#1e1e1e] border-b border-[#3c3c3c] overflow-x-auto">
            {classes.map((cls) => (
              <button
                key={cls.name}
                onClick={() => setActiveClass(cls.name)}
                className={`px-4 py-2 text-sm font-mono border-r border-[#3c3c3c] transition-colors whitespace-nowrap ${
                  activeClass === cls.name
                    ? "bg-[#1e1e1e] text-[#d4d4d4] border-t-2 border-t-[#007acc]"
                    : "bg-[#2d2d2d] text-[#969696] hover:bg-[#1e1e1e]"
                }`}
              >
                {cls.name}.java
              </button>
            ))}
          </div>
        </div>

        {/* Code Content */}
        <div className="bg-[#1e1e1e] border-l border-r border-b border-[#3c3c3c] rounded-b-lg">
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClass}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Imports */}
                <div className="mb-4">
                  <span className="text-[#c586c0]">import</span>
                  <span className="text-[#d4d4d4]"> java.util.*;</span><br />
                  <span className="text-[#c586c0]">import</span>
                  <span className="text-[#d4d4d4]"> java.util.concurrent.*;</span><br />
                  <span className="text-[#c586c0]">import</span>
                  <span className="text-[#d4d4d4]"> java.util.stream.*;</span>
                </div>

                {/* Class Definition */}
                <div className="mb-6">
                  <span className="text-[#569cd6]">public class</span>
                  <span className="text-[#4ec9b0]"> {currentClass.name}</span>
                  {currentClass.extends && (
                    <>
                      <span className="text-[#569cd6]"> extends</span>
                      <span className="text-[#4ec9b0]"> {currentClass.extends}</span>
                    </>
                  )}
                  {currentClass.implements.length > 0 && (
                    <>
                      <span className="text-[#569cd6]"> implements</span>
                      <span className="text-[#4ec9b0]"> {currentClass.implements.join(", ")}</span>
                    </>
                  )}
                  <span className="text-[#d4d4d4]"> {`{`}</span>
                </div>

                {/* Properties */}
                <div className="ml-4 mb-6">
                  <div className="text-[#6a9955] mb-2">// Class Properties</div>
                  {currentClass.properties.map((prop, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-2"
                    >
                      <span className="text-[#569cd6]">{prop.access}</span>
                      <span className="text-[#4ec9b0]"> {prop.type}</span>
                      <span className="text-[#9cdcfe]"> {prop.name}</span>
                      <span className="text-[#d4d4d4]"> = </span>
                      <span className="text-[#ce9178]">"{prop.value}"</span>
                      <span className="text-[#d4d4d4]">;</span>
                    </motion.div>
                  ))}
                </div>

                {/* Constructor */}
                <div className="ml-4 mb-6">
                  <div className="text-[#6a9955] mb-2">// Constructor</div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-[#569cd6]">public</span>
                    <span className="text-[#dcdcaa]"> {currentClass.name}</span>
                    <span className="text-[#d4d4d4]">() {`{`}</span><br />
                    <span className="ml-4 text-[#6a9955]">// Initialize with passion for technology</span><br />
                    <span className="ml-4 text-[#569cd6]">this</span>
                    <span className="text-[#d4d4d4]">.passion = </span>
                    <span className="text-[#ce9178]">"Continuous Learning"</span>
                    <span className="text-[#d4d4d4]">;</span><br />
                    <span className="text-[#d4d4d4]">{`}`}</span>
                  </motion.div>
                </div>

                {/* Methods */}
                <div className="ml-4 mb-6">
                  <div className="text-[#6a9955] mb-2">// Methods</div>
                  {currentClass.methods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="mb-4"
                    >
                      <div className="text-[#6a9955] text-xs mb-1">
                        // {method.description}
                      </div>
                      <div>
                        <span className="text-[#569cd6]">{method.access}</span>
                        <span className="text-[#4ec9b0]"> {method.returnType}</span>
                        <span className="text-[#dcdcaa]"> {method.name}</span>
                        <span className="text-[#d4d4d4]">(</span>
                        <span className="text-[#9cdcfe]">{method.params.join(", ")}</span>
                        <span className="text-[#d4d4d4]">) {`{`}</span><br />
                        <span className="ml-4 text-[#6a9955]">// Implementation details...</span><br />
                        <span className="ml-4 text-[#c586c0]">return</span>
                        <span className="text-[#d4d4d4]"> new </span>
                        <span className="text-[#4ec9b0]">{method.returnType}</span>
                        <span className="text-[#d4d4d4]">();</span><br />
                        <span className="text-[#d4d4d4]">{`}`}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Class End */}
                <div>
                  <span className="text-[#d4d4d4]">{`}`}</span>
                </div>

                {/* Interfaces */}
                {Object.entries(currentClass.interfaces).map(([interfaceName, methods], index) => (
                  <motion.div
                    key={interfaceName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="mt-8"
                  >
                    <div className="text-[#6a9955] mb-2">// Interface Definition</div>
                    <div className="mb-2">
                      <span className="text-[#569cd6]">interface</span>
                      <span className="text-[#4ec9b0]"> {interfaceName}</span>
                      <span className="text-[#d4d4d4]"> {`{`}</span>
                    </div>
                    {methods.map((method, methodIndex) => (
                      <div key={methodIndex} className="ml-4 text-[#dcdcaa]">
                        {method};
                      </div>
                    ))}
                    <div className="text-[#d4d4d4]">{`}`}</div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Console Output */}
          {isRunning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#0c0c0c] border-t border-[#3c3c3c] p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-[#007acc]" />
                <span className="text-[#d4d4d4] text-sm font-mono">Console Output</span>
              </div>
              <div className="font-mono text-sm text-[#d4d4d4]">
                <div className="text-[#92c5f7]">Running {currentClass.name}...</div>
                <div className="text-[#b5cea8]">✓ Object instantiated successfully</div>
                <div className="text-[#b5cea8]">✓ All methods compiled</div>
                <div className="text-[#b5cea8]">✓ Ready to solve problems!</div>
                <div className="text-[#dcdcaa]">Output: "Passionate Computer Science Student Ready for Innovation!"</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};
