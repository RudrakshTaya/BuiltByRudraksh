import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Server, Palette, Calendar, MapPin, ExternalLink, Github } from "lucide-react";
import {projectExperience} from "../data/portfolioData"
const projectExperiences = [
  {
    id: 1,
    semester: "Semester 5",
    period: "Aug 2024 - Nov 2024",
    title: "MERN Stack E-Commerce Platform",
    role: "Full Stack Developer & Team Lead",
    description: "Led a team of 4 to build a complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. Implemented real-time inventory tracking and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    achievements: [
      "Implemented secure payment gateway with 99.9% uptime",
      "Built responsive UI serving 1000+ concurrent users",
      "Reduced page load time by 40% through optimization",
      "Led code reviews and ensured best practices"
    ],
    type: "Full Stack",
    learned: "Advanced state management, payment systems, team leadership",
    github: "https://github.com/rudraksh/ecommerce-mern",
    demo: "https://ecommerce-demo.netlify.app"
  },
  {
    id: 2,
    semester: "Semester 4",
    period: "Feb 2024 - May 2024",
    title: "Student Portal Management System",
    role: "Backend Developer & API Designer",
    description: "Designed and implemented RESTful APIs for a comprehensive student portal system handling course registration, grade management, and academic records. Built with scalability and security in mind.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger", "Docker"],
    achievements: [
      "Built 25+ API endpoints with comprehensive documentation",
      "Implemented role-based access control (RBAC)",
      "Achieved 2x faster query performance through optimization",
      "Deployed using Docker with CI/CD pipeline"
    ],
    type: "Backend",
    learned: "Database design, API architecture, security best practices",
    github: "https://github.com/rudraksh/student-portal-api",
    demo: "https://api-docs.studentportal.com"
  },
  {
    id: 3,
    semester: "Semester 4",
    period: "Jan 2024 - Apr 2024",
    title: "Task Management Dashboard",
    role: "Frontend Developer & UI Designer",
    description: "Created an intuitive task management application with drag-and-drop functionality, real-time collaboration, and advanced filtering. Focused on user experience and performance optimization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    achievements: [
      "Implemented complex drag-and-drop with smooth animations",
      "Built real-time collaboration features using WebSockets",
      "Achieved 95+ Lighthouse performance score",
      "Designed responsive UI supporting all device sizes"
    ],
    type: "Frontend",
    learned: "Advanced React patterns, animation libraries, UX design",
    github: "https://github.com/rudraksh/task-manager",
    demo: "https://taskmanager-app.vercel.app"
  },
  {
    id: 4,
    semester: "Semester 3",
    period: "Aug 2023 - Dec 2023",
    title: "Python CLI Text Processing Tool",
    role: "Developer & Documentation Lead",
    description: "Developed a command-line tool for batch text processing including file format conversion, text analysis, and automated report generation. Built with modular architecture and comprehensive testing.",
    tech: ["Python", "Click", "Pandas", "Pytest", "Docker", "GitHub Actions"],
    achievements: [
      "Processed 10,000+ files with 99.8% accuracy",
      "Built comprehensive test suite with 95% coverage",
      "Created detailed documentation and user guides",
      "Published package on PyPI with 500+ downloads"
    ],
    type: "Backend",
    learned: "Python packaging, CLI design, automated testing",
    github: "https://github.com/rudraksh/text-processor-cli",
    demo: "https://pypi.org/project/text-processor-cli/"
  },
  {
    id: 5,
    semester: "Semester 3",
    period: "Sep 2023 - Nov 2023",
    title: "React Portfolio Website",
    role: "Full Stack Developer",
    description: "Built a responsive portfolio website with modern animations, dark mode, and contact functionality. Implemented blog section with markdown support and SEO optimization.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
    achievements: [
      "Achieved 100% Lighthouse accessibility score",
      "Implemented smooth page transitions and micro-interactions",
      "Built SEO-optimized blog with markdown support",
      "Deployed with automatic SSL and CDN optimization"
    ],
    type: "Frontend",
    learned: "Next.js SSG, SEO optimization, web performance",
    github: "https://github.com/rudraksh/portfolio-v2",
    demo: "https://rudraksh-portfolio.vercel.app"
  }
];

const ProjectExperienceCard = ({ project, index }: { project: typeof projectExperience[0]; index: number }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Full Stack": return Code2;
      case "Backend": return Server;
      case "Frontend": return Palette;
      default: return Code2;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "Full Stack": return "bg-neon-blue";
      case "Backend": return "bg-neon-green";
      case "Frontend": return "bg-neon-purple";
      default: return "bg-neon-blue";
    }
  };

  const Icon = getIcon(project.type);
  const colorClass = getColor(project.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 ${colorClass} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-8 w-8 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-neon-blue font-medium">{project.role}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1">
            <Calendar className="h-4 w-4" />
            {project.period}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            {project.semester}
          </div>
        </div>
      </div>

      {/* Type Badge */}
      <div className="mb-4">
        <span className={`${colorClass} text-black px-3 py-1 rounded-full text-sm font-semibold`}>
          {project.type}
        </span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
        <ul className="space-y-2">
          {project.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
              {achievement}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* What I Learned */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-2">Learning Outcomes:</h4>
        <p className="text-sm text-neon-cyan italic">{project.learned}</p>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + i * 0.05, duration: 0.2 }}
              className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors duration-300"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-neon-blue hover:text-neon-cyan transition-colors duration-300"
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export const ProjectExperience = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Project-Based Learning Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world projects that demonstrate my growth as a developer, showcasing technical skills, 
            problem-solving abilities, and hands-on experience with modern technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectExperience.map((project, index) => (
            <ProjectExperienceCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto border border-neon-blue/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Database className="h-6 w-6 text-neon-blue" />
              <h3 className="text-2xl font-bold text-white">Ready for Industry Challenges</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              These projects have equipped me with practical experience in full-stack development, 
              database design, API architecture, and modern deployment practices. I'm ready to 
              contribute to your team and take on new challenges.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
