import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Copy,
  ExternalLink,
  Star,
  GitFork,
  Eye,
  Code2,
  Book,
  Award,
  Calendar,
  MapPin,
  Mail,
  Github,
  Linkedin,
  CheckCircle,
  Circle,
} from "lucide-react";
import {
  personalInfo,
  skills,
  academicHighlights,
} from "../data/portfolioData";

export const ReadmeAbout = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* README Header */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden">
          {/* File Header */}
          <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#7d8590]" />
              <span className="text-[#e6edf3] font-medium">README.md</span>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() =>
                    handleCopy(
                      document.getElementById("readme-content")?.innerText ||
                        "",
                      "full",
                    )
                  }
                  className="flex items-center gap-1 px-2 py-1 text-xs text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#21262d] rounded"
                >
                  {copiedSection === "full" ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  Copy
                </button>
                <div className="flex items-center gap-1 text-[#7d8590] text-sm">
                  <Star className="w-4 h-4" />
                  <span>42</span>
                  <GitFork className="w-4 h-4 ml-2" />
                  <span>12</span>
                  <Eye className="w-4 h-4 ml-2" />
                  <span>156</span>
                </div>
              </div>
            </div>
          </div>

          {/* README Content */}
          <div
            id="readme-content"
            className="p-6 text-[#e6edf3] font-mono text-sm leading-relaxed"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Title */}
              <h1 className="text-2xl font-bold mb-6 text-[#58a6ff]">
                # {personalInfo.name} 👨‍💻
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#238636] text-white px-2 py-1 rounded text-xs">
                  ✅ Available for Opportunities
                </span>
                <span className="bg-[#1f6feb] text-white px-2 py-1 rounded text-xs">
                  📚 Computer Science Student
                </span>
                <span className="bg-[#8b5cf6] text-white px-2 py-1 rounded text-xs">
                  🚀 Full Stack Developer
                </span>
                <span className="bg-[#f85149] text-white px-2 py-1 rounded text-xs">
                  🧠 Problem Solver
                </span>
              </div>

              {/* Description */}
              <p className="text-[#7d8590] mb-6 leading-relaxed">
                {personalInfo.bio.detailed}
              </p>

              {/* Quick Stats */}
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-6">
                <h3 className="text-[#58a6ff] font-bold mb-3">
                  ## 📊 Quick Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#238636]">250+</div>
                    <div className="text-xs text-[#7d8590]">DSA Problems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#1f6feb]">15+</div>
                    <div className="text-xs text-[#7d8590]">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#8b5cf6]">8.2</div>
                    <div className="text-xs text-[#7d8590]">CGPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#f85149]">3+</div>
                    <div className="text-xs text-[#7d8590]">Years Learning</div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h3 className="text-[#58a6ff] font-bold mb-3">
                  ## 🛠️ Tech Stack
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-[#f85149]">**Frontend:**</span>
                    <span className="text-[#7d8590]">
                      {" "}
                      React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3
                    </span>
                  </div>
                  <div>
                    <span className="text-[#f85149]">**Backend:**</span>
                    <span className="text-[#7d8590]">
                      {" "}
                      Node.js, Express.js, RESTful APIs, GraphQL
                    </span>
                  </div>
                  <div>
                    <span className="text-[#f85149]">**Languages:**</span>
                    <span className="text-[#7d8590]">
                      {" "}
                      JavaScript, TypeScript, Python, Java, C++
                    </span>
                  </div>
                  <div>
                    <span className="text-[#f85149]">**Database:**</span>
                    <span className="text-[#7d8590]">
                      {" "}
                      MongoDB, MySQL, PostgreSQL
                    </span>
                  </div>
                  <div>
                    <span className="text-[#f85149]">**DevOps:**</span>
                    <span className="text-[#7d8590]">
                      {" "}
                      Docker, AWS, Git, GitHub Actions, Vercel
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Academic Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-[#58a6ff] font-bold mb-3">
                  ## 🎓 Academic Highlights
                </h3>
                <ul className="space-y-2">
                  {academicHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#238636] mt-1">•</span>
                      <span className="text-[#7d8590]">
                        <strong>{highlight.title}:</strong> {highlight.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-6"
              >
                <h3 className="text-[#58a6ff] font-bold mb-3">
                  ## 🎯 Current Focus
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#238636]" />
                    <span className="text-[#7d8590]">
                      Mastering System Design & Scalable Architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#1f6feb]" />
                    <span className="text-[#7d8590]">
                      Building Full-Stack Applications with Modern Tech
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-[#7d8590]">
                      Solving Advanced Data Structures & Algorithms
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#f85149]" />
                    <span className="text-[#7d8590]">
                      Exploring Machine Learning & AI Applications
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mb-6"
              >
                <h3 className="text-[#58a6ff] font-bold mb-3">
                  ## 📫 Get In Touch
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>

              {/* Footer */}
              <div className="border-t border-[#30363d] pt-4 text-center">
                <p className="text-[#7d8590] text-xs">
                  ⭐ Star this repository if you find it interesting!
                  <br />
                  💡 Feel free to reach out for collaboration opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
