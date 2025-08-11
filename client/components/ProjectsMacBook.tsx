import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Github, 
  ExternalLink, 
  Terminal,
  Folder,
  Play,
  Star,
  GitFork,
  Eye
} from 'lucide-react';
import { Button } from './ui/button';
import { projects } from '../data/portfolioData';

// Featured project display
const ProjectCodeDisplay = ({ project }: { project: any }) => {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm font-mono ml-1 sm:ml-2">project.json</span>
        </div>
        <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>

      {/* Content */}
      <div className="flex-1 p-3 sm:p-4 overflow-auto font-mono text-xs sm:text-sm">
        <div className="space-y-3">
          <div className="text-gray-400">// Featured Project</div>
          <div>
            <span className="text-purple-400">const </span>
            <span className="text-cyan-400">project </span>
            <span className="text-white">= {`{`}</span>
          </div>
          <div className="ml-4 space-y-2">
            <div>
              <span className="text-cyan-400">"title"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"{project.title}"</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-cyan-400">"description"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"{project.description.substring(0, 80)}..."</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-cyan-400">"technologies"</span>
              <span className="text-white">: [</span>
            </div>
            <div className="ml-4 space-y-1">
              {project.tech.slice(0, 4).map((tech: string, index: number) => (
                <div key={index}>
                  <span className="text-green-400">"{tech}"</span>
                  {index < Math.min(project.tech.length - 1, 3) && <span className="text-white">,</span>}
                </div>
              ))}
              {project.tech.length > 4 && (
                <div className="text-gray-400">// ... {project.tech.length - 4} more</div>
              )}
            </div>
            <div>
              <span className="text-white">],</span>
            </div>
            <div>
              <span className="text-cyan-400">"category"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"{project.category}"</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-cyan-400">"complexity"</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"{project.complexity}"</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-cyan-400">"featured"</span>
              <span className="text-white">: </span>
              <span className="text-yellow-400">{project.featured ? 'true' : 'false'}</span>
            </div>
          </div>
          <div className="text-purple-400">{`}`}</div>
        </div>
      </div>
    </div>
  );
};

// Project terminal display
const ProjectTerminal = ({ project }: { project: any }) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const commands = [
    `git clone https://github.com/rudraksh/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    `cd ${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    'npm install',
    'npm start',
    `echo "Project: ${project.title} is running!"`
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [commands.length]);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm font-mono ml-1 sm:ml-2">Terminal</span>
        </div>
        <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-hidden">
        <div className="space-y-2">
          <div className="text-gray-400">~/projects</div>
          {commands.slice(0, currentCommand + 1).map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1"
            >
              <div>
                <span className="text-green-400">$ </span>
                <span className="text-white">{cmd}</span>
              </div>
              {index === 4 && currentCommand >= 4 && (
                <div className="text-cyan-400 pl-2">✓ Project started successfully!</div>
              )}
              {index === 2 && currentCommand >= 2 && (
                <div className="text-cyan-400 pl-2">✓ Dependencies installed</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsMacBook = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
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
    <div className="relative py-8 sm:py-12">
      {/* Section Header */}
      <motion.div
        className="text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing technical projects in a developer workspace
        </p>
      </motion.div>

      {/* MacBook Frame */}
      <motion.div
        className="relative w-full max-w-5xl mx-auto px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* MacBook Screen */}
        <div className="relative bg-black rounded-2xl sm:rounded-3xl border-3 sm:border-6 border-gray-800 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-xl sm:rounded-2xl border border-gray-700"></div>
          
          {/* Screen content */}
          <div className="relative z-10 p-2 sm:p-4 min-h-[300px] sm:min-h-[400px]">
            {/* macOS Menu Bar */}
            <div className="flex items-center justify-between mb-2 sm:mb-4 px-2 py-1 bg-gray-800/60 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-white text-xs sm:text-sm font-medium truncate">
                  {project.title} - Development
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400 text-xs">{project.stats?.stars || 0}</span>
              </div>
            </div>

            {/* Split screen layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 h-[250px] sm:h-[350px]">
              {/* Terminal Side */}
              <ProjectTerminal project={project} />
              
              {/* VS Code Side */}
              <ProjectCodeDisplay project={project} />
            </div>

            {/* Project Actions */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-xs sm:text-sm"
              >
                <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Source Code
              </Button>
              {project.liveUrl && (
                <Button
                  size="sm"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-xs sm:text-sm"
                >
                  <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* MacBook Base - Smaller for this section */}
        <div className="relative">
          <div className="h-2 sm:h-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-b-[1.5rem] sm:rounded-b-[2rem] mx-4 sm:mx-8 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
          <div className="h-1 sm:h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-xl mx-8 sm:mx-16 shadow-lg opacity-60">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
          </div>
        </div>
      </motion.div>

      {/* Project Navigation */}
      <div className="flex justify-center mt-6 sm:mt-8 gap-2">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentProject 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
