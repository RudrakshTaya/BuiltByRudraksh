import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  GitFork,
  Eye,
  Code2,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Users,
  Tag,
  Search,
  Filter,
  Folder,
  FileText,
  Globe,
  Database,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";
import { projects } from "../data/portfolioData";

export const GitHubProjects = () => {
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Full Stack",
    "Backend",
    "Frontend",
    "Java/C++",
    "Python/CLI",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      "C++": "#f34b7d",
      React: "#61dafb",
      Node: "#68a063",
      MongoDB: "#4db33d",
      MySQL: "#00758f",
    };
    return colors[language] || "#8b949e";
  };

  const getRepoIcon = (type: string) => {
    switch (type) {
      case "Full Stack":
        return Globe;
      case "Backend":
        return Server;
      case "Frontend":
        return Smartphone;
      case "Java/C++":
        return Code2;
      case "Python/CLI":
        return Terminal;
      default:
        return Folder;
    }
  };

  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* GitHub Header */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden">
          {/* Header Bar */}
          <div className="bg-[#161b22] border-b border-[#30363d] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Github className="w-8 h-8 text-[#e6edf3]" />
                <div>
                  <h1 className="text-xl font-semibold text-[#e6edf3]">
                    rudrakshtaya / repositories
                  </h1>
                  <p className="text-[#7d8590] text-sm">
                    Public repositories • {projects.length} total
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#7d8590] text-sm">
                  {filteredProjects.length} repositories
                </span>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-[#0d1117] border-b border-[#30363d] px-6 py-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7d8590]" />
                <input
                  type="text"
                  placeholder="Find a repository..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#21262d] border border-[#30363d] rounded-md text-[#e6edf3] text-sm focus:border-[#58a6ff] focus:outline-none"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#7d8590]" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-[#21262d] border border-[#30363d] rounded-md text-[#e6edf3] text-sm px-3 py-2 focus:border-[#58a6ff] focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Repository List */}
          <div className="divide-y divide-[#30363d]">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const Icon = getRepoIcon(project.category);
                const isSelected = selectedRepo === project.id;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 hover:bg-[#161b22] transition-colors cursor-pointer ${
                      isSelected ? "bg-[#161b22]" : ""
                    }`}
                    onClick={() =>
                      setSelectedRepo(isSelected ? null : project.id)
                    }
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Repository Name and Description */}
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-[#7d8590]" />
                          <h3 className="text-[#58a6ff] font-semibold hover:underline break-words">
                            {project.title}
                          </h3>
                          <span className="bg-[#21262d] border border-[#30363d] text-[#7d8590] text-xs px-2 py-0.5 rounded-full">
                            Public
                          </span>
                          {project.featured && (
                            <span className="bg-[#1f6feb] text-white text-xs px-2 py-0.5 rounded-full">
                              ⭐ Featured
                            </span>
                          )}
                        </div>

                        <p className="text-[#7d8590] text-sm mb-3 leading-relaxed break-words">
                          {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.slice(0, 4).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-[#21262d] border border-[#30363d] text-[#e6edf3] text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-[#7d8590] text-xs">
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>

                        {/* Repository Stats */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#7d8590]">
                          {/* Primary Language */}
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(
                                  project.tech[0],
                                ),
                              }}
                            />
                            <span>{project.tech[0]}</span>
                          </div>

                          {/* Stars */}
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{Math.floor(Math.random() * 50) + 10}</span>
                          </div>

                          {/* Forks */}
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{Math.floor(Math.random() * 20) + 2}</span>
                          </div>

                          {/* Updated */}
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>
                              Updated {Math.floor(Math.random() * 30) + 1} days
                              ago
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 ml-0 sm:ml-4 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white text-sm rounded-md transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="hidden sm:inline">Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-3 py-1.5 bg-[#1f6feb] hover:bg-[#388bfd] text-white text-sm rounded-md transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="hidden sm:inline">Live</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-[#30363d]"
                        >
                          {/* README Preview */}
                          <div className="bg-[#0d1117] border border-[#30363d] rounded-md overflow-hidden">
                            <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-[#7d8590]" />
                                <span className="text-[#e6edf3] text-sm font-medium">
                                  README.md
                                </span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="text-[#e6edf3] font-semibold mb-2">
                                📋 Project Overview
                              </h4>
                              <p className="text-[#7d8590] text-sm mb-3 leading-relaxed">
                                {project.longDescription || project.description}
                              </p>

                              {/* Key Features */}
                              {project.highlights && (
                                <div className="mb-3">
                                  <h5 className="text-[#e6edf3] text-sm font-medium mb-2">
                                    ✨ Key Features
                                  </h5>
                                  <ul className="space-y-1">
                                    {project.highlights
                                      .slice(0, 3)
                                      .map((feature, featureIndex) => (
                                        <li
                                          key={featureIndex}
                                          className="text-[#7d8590] text-sm flex items-start gap-2"
                                        >
                                          <span className="text-[#238636] mt-0.5">
                                            •
                                          </span>
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                  </ul>
                                </div>
                              )}

                              {/* Complete Tech Stack */}
                              <div>
                                <h5 className="text-[#e6edf3] text-sm font-medium mb-2">
                                  🛠️ Technologies Used
                                </h5>
                                <div className="flex flex-wrap gap-1">
                                  {project.tech.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="bg-[#21262d] border border-[#30363d] text-[#e6edf3] text-xs px-2 py-1 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="bg-[#161b22] border-t border-[#30363d] px-6 py-4">
            <div className="flex items-center justify-between text-sm text-[#7d8590]">
              <div>
                Showing {filteredProjects.length} of {projects.length}{" "}
                repositories
              </div>
              <div className="flex items-center gap-4">
                <span>👨‍💻 Built with passion</span>
                <span>⚡ Always learning</span>
                <span>🚀 Ready for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
