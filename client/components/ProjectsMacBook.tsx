import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Github,
  ExternalLink,
  Terminal,
  Play,
  Star,
  ArrowLeft,
  ArrowRight,
  Folder,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button";
import { projects } from "../data/portfolioData";

// Mobile Project Card Design
const MobileProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-4 border border-gray-700 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Project Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Folder className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white truncate">
            {project.title}
          </h3>
        </div>
        {project.featured && (
          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full">
            <Star className="w-3 h-3 text-yellow-400" />
            <span className="text-xs text-yellow-400">Featured</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.description.length > 100
          ? `${project.description.substring(0, 100)}...`
          : project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <div className="text-xs text-gray-400 mb-2">Tech Stack:</div>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Category & Complexity */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs text-gray-400">{project.category}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-xs text-gray-400">{project.complexity}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(project.githubUrl, "_blank")}
          className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-xs h-8"
        >
          <Github className="mr-1 h-3 w-3" />
          Code
        </Button>
        {project.liveUrl && (
          <Button
            size="sm"
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-xs h-8"
          >
            <Globe className="mr-1 h-3 w-3" />
            Live
          </Button>
        )}
      </div>
    </motion.div>
  );
};

// Desktop MacBook Design - Simplified
const DesktopProjectsMacBook = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const [currentProject, setCurrentProject] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  if (featuredProjects.length === 0) return null;

  const project = featuredProjects[currentProject];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* MacBook Screen */}
      <div className="relative bg-gray-800 rounded-2xl border-3 border-gray-700 shadow-2xl overflow-hidden">
        {/* Camera */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>

        {/* Screen content */}
        <div className="relative z-10 p-4">
          {/* Menu Bar */}
          <div className="flex items-center justify-between mb-3 px-3 py-2 bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/50">
            <div className="flex items-center gap-2">
              <div className="text-white text-sm font-medium">
                {project.title} - Development
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-3 h-3 text-yellow-400" />
              <span className="text-yellow-400 text-xs">
                {project.stats?.stars || 0}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-4 h-[300px]">
            {/* Terminal */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono">
                    Terminal
                  </span>
                </div>
                <Terminal className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex-1 p-3 font-mono text-xs">
                <div className="text-gray-400 mb-2">~/projects</div>
                <div className="space-y-1">
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">
                      git clone {project.githubUrl}
                    </span>
                  </div>
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">
                      cd {project.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">npm install</span>
                  </div>
                  <div className="text-cyan-400 pl-2">
                    ✓ Dependencies installed
                  </div>
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">npm start</span>
                  </div>
                  <div className="text-cyan-400 pl-2">
                    ✓ Project running on localhost:3000
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono">
                    project.json
                  </span>
                </div>
                <Code2 className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex-1 p-3 font-mono text-xs overflow-auto">
                <div className="space-y-2">
                  <div className="text-gray-400">// Featured Project</div>
                  <div>
                    <span className="text-purple-400">const </span>
                    <span className="text-cyan-400">project </span>
                    <span className="text-white">= {`{`}</span>
                  </div>
                  <div className="ml-2 space-y-1">
                    <div>
                      <span className="text-cyan-400">"title"</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">"{project.title}"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"description"</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">
                        "{project.description.substring(0, 40)}..."
                      </span>
                      <span className="text-white">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"tech"</span>
                      <span className="text-white">: [</span>
                    </div>
                    <div className="ml-2">
                      {project.tech
                        .slice(0, 3)
                        .map((tech: string, index: number) => (
                          <div key={index}>
                            <span className="text-green-400">"{tech}"</span>
                            {index < 2 && <span className="text-white">,</span>}
                          </div>
                        ))}
                      {project.tech.length > 3 && (
                        <div className="text-gray-400">
                          // +{project.tech.length - 3} more
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-white">],</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">"category"</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">
                        "{project.category}"
                      </span>
                    </div>
                  </div>
                  <div className="text-purple-400">{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Action Buttons */}
          <div className="mt-3 flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-xs h-7"
            >
              <Github className="mr-1 h-3 w-3" />
              Source
            </Button>
            {project.liveUrl && (
              <Button
                size="sm"
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-xs h-7"
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* MacBook Base with Navigation */}
      <div className="relative h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl mx-4 shadow-xl flex items-center justify-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setCurrentProject((prev) =>
                prev > 0 ? prev - 1 : featuredProjects.length - 1,
              )
            }
            className="w-6 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded border border-gray-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
          >
            <ArrowLeft className="w-3 h-3 text-gray-700" />
          </button>

          <div className="flex items-center gap-1">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-cyan-400 scale-125"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
            }
            className="w-6 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded border border-gray-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
          >
            <ArrowRight className="w-3 h-3 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsMacBook = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="relative py-8 sm:py-12">
      {/* Section Header */}
      <motion.div
        className="text-center mb-8 sm:mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          <span className="lg:hidden">
            Showcasing my best work and technical projects
          </span>
          <span className="hidden lg:inline">
            Showcasing technical projects in a developer workspace
          </span>
        </p>
      </motion.div>

      {/* Mobile View - Clean Cards */}
      <div className="block lg:hidden px-4">
        <div className="space-y-6 max-w-md mx-auto">
          {featuredProjects.map((project, index) => (
            <MobileProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
          >
            <Folder className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Desktop View - MacBook Design */}
      <div className="hidden lg:block px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <DesktopProjectsMacBook />
        </motion.div>
      </div>
    </div>
  );
};
