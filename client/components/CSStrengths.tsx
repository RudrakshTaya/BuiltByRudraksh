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
  Award,
  Target,
  Zap,
  BookOpen,
  Terminal,
  GitBranch,
} from "lucide-react";
import { csTopics, stats } from "../data/portfolioData";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<any>> = {
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
  Award,
  Target,
  Zap,
  BookOpen,
  Terminal,
  GitBranch,
};

const csTopicsData = csTopics;

const TopicCard = ({
  topic,
  isActive,
  onClick,
}: {
  topic: (typeof csTopicsData)[0];
  isActive: boolean;
  onClick: () => void;
}) => {
  const IconComponent = iconMap[topic.icon as string] || Code2;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`glass p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
        isActive
          ? `${topic.borderColor}/50 bg-gradient-to-br from-${topic.bgColor}/10 to-transparent`
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-4">
        <div
          className={`w-10 h-10 md:w-12 md:h-12 ${topic.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
        >
          <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-black" />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`text-base md:text-lg font-bold ${isActive ? topic.color : "text-white"} transition-colors`}
          >
            {topic.title}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            {topic.description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ChevronRight
            className={`h-5 w-5 transition-transform ${isActive ? "rotate-90" : ""} ${topic.color}`}
          />
          {!isActive && (
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-muted-foreground opacity-70"
            >
              Click
            </motion.div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {Object.entries(topic.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className={`text-sm font-mono ${topic.color}`}>{value}</div>
            <div className="text-xs text-muted-foreground capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DetailedView = ({ topic }: { topic: (typeof csTopics)[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Concepts Grid */}
      <div>
        <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <BookOpen className={`h-6 w-6 ${topic.color}`} />
          Key Concepts & Topics
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {topic.concepts.map((concept, index) => (
            <motion.div
              key={concept.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{concept.icon}</span>
                <h5 className={`text-lg font-semibold ${topic.color}`}>
                  {concept.category}
                </h5>
              </div>
              <div className="space-y-2">
                {concept.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 ${topic.bgColor} rounded-full`}
                    />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Terminal className={`h-6 w-6 ${topic.color}`} />
          Related Projects
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          {topic.projects.map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass p-4 rounded-xl border ${topic.borderColor}/30 bg-gradient-to-br from-${topic.bgColor}/5 to-transparent hover:from-${topic.bgColor}/10 transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className={`h-4 w-4 ${topic.color}`} />
                <span className="text-white font-medium text-sm">
                  {project}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                Practical implementation of {topic.title.toLowerCase()} concepts
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const CSStrengths = () => {
  const [activeTopicId, setActiveTopicId] = useState("dsa");
  const activeTopic =
    csTopicsData.find((t) => t.id === activeTopicId) || csTopicsData[0];
  const detailsSectionRef = React.useRef<HTMLDivElement>(null);

  const handleTopicClick = (topicId: string) => {
    setActiveTopicId(topicId);

    // Auto-scroll to details section with a slight delay to allow state to update
    setTimeout(() => {
      if (detailsSectionRef.current) {
        detailsSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            Computer Science Strengths
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep understanding of fundamental CS concepts, backed by hands-on
            projects and real-world applications. These skills form the
            foundation for solving complex software engineering challenges.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          <div className="text-center glass p-6 rounded-xl border border-neon-purple/30">
            <div className="text-3xl font-bold text-neon-purple mb-2">250+</div>
            <div className="text-muted-foreground text-sm">DSA Problems</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-neon-blue/30">
            <div className="text-3xl font-bold text-neon-blue mb-2">25+</div>
            <div className="text-muted-foreground text-sm">CS Projects</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-neon-cyan/30">
            <div className="text-3xl font-bold text-neon-cyan mb-2">6+</div>
            <div className="text-muted-foreground text-sm">Core Subjects</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-neon-green/30">
            <div className="text-3xl font-bold text-neon-green mb-2">A+</div>
            <div className="text-muted-foreground text-sm">Average Grade</div>
          </div>
        </motion.div>

        {/* Topic Selection Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-cyan/10 to-neon-green/10 px-6 py-3 rounded-full border border-neon-cyan/20">
            <Target className="h-4 w-4 text-neon-cyan" />
            <span className="text-neon-cyan font-medium text-sm md:text-base">
              Click any topic below to explore detailed concepts and projects ↓
            </span>
          </div>
        </motion.div>

        {/* Topic Selection Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          {csTopicsData.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isActive={activeTopicId === topic.id}
              onClick={() => handleTopicClick(topic.id)}
            />
          ))}
        </motion.div>

        {/* Detailed Topic View */}
        <motion.div
          ref={detailsSectionRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-6 md:p-8 rounded-2xl border border-white/10 relative"
          id="topic-details"
        >
          {/* Visual indicator that content has changed */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            key={activeTopicId}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Section header with clear indication */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={`header-${activeTopicId}`}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 px-4 py-2 rounded-full border border-neon-blue/30 mb-4">
              <span className="text-sm text-neon-blue font-medium">
                Currently Viewing
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="w-2 h-2 bg-neon-blue rounded-full"
              />
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-4 mb-8 text-center md:text-left">
            <motion.div
              className={`w-16 h-16 ${activeTopic.bgColor} rounded-xl flex items-center justify-center`}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              key={`icon-${activeTopicId}`}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {React.createElement(
                iconMap[activeTopic.icon as string] || Code2,
                { className: "h-8 w-8 text-black" },
              )}
            </motion.div>
            <div>
              <motion.h3
                className={`text-2xl md:text-3xl font-bold ${activeTopic.color} mb-2`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={`title-${activeTopicId}`}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {activeTopic.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-base md:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={`desc-${activeTopicId}`}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {activeTopic.description}
              </motion.p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <DetailedView key={activeTopicId} topic={activeTopic} />
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto border border-neon-blue/30">
            <Award className="h-12 w-12 text-neon-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Technical Interviews
            </h3>
            <p className="text-muted-foreground mb-6">
              With strong theoretical knowledge and practical implementation
              experience, I'm well-prepared for technical interviews and
              challenging software engineering roles that require deep CS
              understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
              >
                View Implementation Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("github-stats")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="glass border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Code2 className="h-4 w-4 mr-2 inline" />
                See Coding Stats
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
