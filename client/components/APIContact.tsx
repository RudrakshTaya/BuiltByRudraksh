import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Copy,
  CheckCircle,
  Mail,
  User,
  MessageSquare,
  Code2,
  Terminal,
  Server,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Play,
  FileText,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../data/portfolioData";

export const APIContact = () => {
  const [activeEndpoint, setActiveEndpoint] = useState("POST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const endpoints = [
    {
      method: "POST",
      path: "/api/contact",
      description: "Send a message to Rudraksh",
      parameters: [
        { name: "name", type: "string", required: true, description: "Your full name" },
        { name: "email", type: "string", required: true, description: "Your email address" },
        { name: "message", type: "string", required: true, description: "Your message content" },
      ],
      example: {
        curl: `curl -X POST https://rudrakshtaya.dev/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello! Let's collaborate on a project."
  }'`,
        javascript: `fetch('https://rudrakshtaya.dev/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello! Let\\'s collaborate on a project.'
  })
})
.then(response => response.json())
.then(data => console.log(data));`,
        python: `import requests

url = "https://rudrakshtaya.dev/api/contact"
data = {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello! Let's collaborate on a project."
}

response = requests.post(url, json=data)
print(response.json())`,
      },
    },
    {
      method: "GET",
      path: "/api/profile",
      description: "Get Rudraksh's public profile information",
      parameters: [],
      example: {
        curl: `curl -X GET https://rudrakshtaya.dev/api/profile`,
        javascript: `fetch('https://rudrakshtaya.dev/api/profile')
  .then(response => response.json())
  .then(data => console.log(data));`,
        python: `import requests

response = requests.get("https://rudrakshtaya.dev/api/profile")
print(response.json())`,
      },
    },
    {
      method: "GET",
      path: "/api/projects",
      description: "Retrieve list of projects",
      parameters: [
        { name: "category", type: "string", required: false, description: "Filter by project category" },
        { name: "limit", type: "number", required: false, description: "Number of projects to return" },
      ],
      example: {
        curl: `curl -X GET "https://rudrakshtaya.dev/api/projects?category=fullstack&limit=5"`,
        javascript: `fetch('https://rudrakshtaya.dev/api/projects?category=fullstack&limit=5')
  .then(response => response.json())
  .then(data => console.log(data));`,
        python: `import requests

params = {"category": "fullstack", "limit": 5}
response = requests.get("https://rudrakshtaya.dev/api/projects", params=params)
print(response.json())`,
      },
    },
  ];

  const [activeLanguage, setActiveLanguage] = useState("javascript");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (Demo mode)");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const copyCode = (code: string, codeId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(codeId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentEndpoint = endpoints.find(ep => ep.method === activeEndpoint) || endpoints[0];

  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* API Documentation Header */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#161b22] border-b border-[#30363d] px-6 py-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-8 h-8 text-[#58a6ff]" />
              <div>
                <h1 className="text-2xl font-bold text-[#e6edf3]">
                  Contact API Documentation
                </h1>
                <p className="text-[#7d8590]">
                  Connect with Rudraksh • v1.0.0 • RESTful API
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* API Documentation */}
            <div className="border-r border-[#30363d]">
              <div className="p-6">
                {/* Endpoint Tabs */}
                <div className="flex border border-[#30363d] rounded-lg overflow-hidden mb-6">
                  {endpoints.map((endpoint) => (
                    <button
                      key={endpoint.method + endpoint.path}
                      onClick={() => setActiveEndpoint(endpoint.method)}
                      className={`flex-1 px-4 py-3 text-sm font-mono transition-colors ${
                        activeEndpoint === endpoint.method
                          ? "bg-[#238636] text-white"
                          : "bg-[#21262d] text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#30363d]"
                      }`}
                    >
                      <span className={`font-bold ${
                        endpoint.method === "POST" ? "text-[#f85149]" : 
                        endpoint.method === "GET" ? "text-[#3fb950]" : "text-[#58a6ff]"
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="ml-2 text-[#e6edf3]">{endpoint.path}</span>
                    </button>
                  ))}
                </div>

                {/* Endpoint Details */}
                <motion.div
                  key={activeEndpoint}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">
                      {currentEndpoint.method} {currentEndpoint.path}
                    </h3>
                    <p className="text-[#7d8590] text-sm">
                      {currentEndpoint.description}
                    </p>
                  </div>

                  {/* Parameters */}
                  {currentEndpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[#e6edf3] font-medium mb-3">Parameters</h4>
                      <div className="space-y-3">
                        {currentEndpoint.parameters.map((param, index) => (
                          <div key={index} className="bg-[#161b22] border border-[#30363d] rounded p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[#79c0ff] font-mono">{param.name}</span>
                              <span className="text-[#f85149] text-sm">{param.type}</span>
                              {param.required && (
                                <span className="bg-[#f85149] text-white text-xs px-1 rounded">
                                  required
                                </span>
                              )}
                            </div>
                            <p className="text-[#7d8590] text-sm">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Response Example */}
                  <div className="mb-6">
                    <h4 className="text-[#e6edf3] font-medium mb-3">Response Example</h4>
                    <div className="bg-[#0d1117] border border-[#30363d] rounded overflow-hidden">
                      <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2">
                        <span className="text-[#e6edf3] text-sm font-mono">200 OK</span>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <pre className="text-[#e6edf3]">
{currentEndpoint.method === "POST" ? `{
  "success": true,
  "message": "Message sent successfully",
  "timestamp": "2024-01-15T10:30:00Z",
  "id": "msg_12345"
}` : currentEndpoint.method === "GET" && currentEndpoint.path === "/api/profile" ? `{
  "name": "Rudraksh Taya",
  "title": "Computer Science Student",
  "email": "${personalInfo.email}",
  "skills": ["React", "Node.js", "Python", "Java"],
  "experience": "3+ years",
  "available": true
}` : `{
  "projects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "category": "fullstack",
      "technologies": ["React", "Node.js", "MongoDB"]
    }
  ],
  "total": 15,
  "page": 1
}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Code Examples */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-[#e6edf3] font-medium">Code Examples</h4>
                      <div className="flex border border-[#30363d] rounded overflow-hidden">
                        {Object.keys(currentEndpoint.example).map((lang) => (
                          <button
                            key={lang}
                            onClick={() => setActiveLanguage(lang)}
                            className={`px-3 py-1 text-xs font-mono transition-colors ${
                              activeLanguage === lang
                                ? "bg-[#58a6ff] text-white"
                                : "bg-[#21262d] text-[#7d8590] hover:text-[#e6edf3]"
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#0d1117] border border-[#30363d] rounded overflow-hidden">
                      <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2 flex items-center justify-between">
                        <span className="text-[#e6edf3] text-sm font-mono">
                          {activeLanguage}.{activeLanguage === "curl" ? "sh" : activeLanguage === "javascript" ? "js" : "py"}
                        </span>
                        <button
                          onClick={() => copyCode(
                            currentEndpoint.example[activeLanguage as keyof typeof currentEndpoint.example],
                            `${activeEndpoint}-${activeLanguage}`
                          )}
                          className="flex items-center gap-1 text-[#7d8590] hover:text-[#e6edf3] text-sm"
                        >
                          {copiedCode === `${activeEndpoint}-${activeLanguage}` ? 
                            <CheckCircle className="w-4 h-4" /> : 
                            <Copy className="w-4 h-4" />
                          }
                          Copy
                        </button>
                      </div>
                      <div className="p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-[#e6edf3]">
                          {currentEndpoint.example[activeLanguage as keyof typeof currentEndpoint.example]}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="bg-[#161b22]">
              <div className="p-6">
                <h3 className="text-[#e6edf3] font-semibold text-lg mb-6 flex items-center gap-2">
                  <Play className="w-5 h-5 text-[#58a6ff]" />
                  Try it out
                </h3>

                {activeEndpoint === "POST" && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[#e6edf3] text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded text-[#e6edf3] text-sm focus:border-[#58a6ff] focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-[#e6edf3] text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded text-[#e6edf3] text-sm focus:border-[#58a6ff] focus:outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[#e6edf3] text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded text-[#e6edf3] text-sm focus:border-[#58a6ff] focus:outline-none resize-none"
                        placeholder="Let's collaborate on something amazing!"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#238636] hover:bg-[#2ea043] text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {/* Alternative Contact Methods */}
                <div className="mt-8 pt-6 border-t border-[#30363d]">
                  <h4 className="text-[#e6edf3] font-medium mb-4">Alternative Endpoints</h4>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-[#58a6ff]" />
                      <div>
                        <div className="text-[#e6edf3] text-sm font-medium">Direct Email</div>
                        <div className="text-[#7d8590] text-xs">{personalInfo.email}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#7d8590] group-hover:text-[#58a6ff] ml-auto" />
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors group"
                    >
                      <Github className="w-5 h-5 text-[#58a6ff]" />
                      <div>
                        <div className="text-[#e6edf3] text-sm font-medium">GitHub</div>
                        <div className="text-[#7d8590] text-xs">@rudrakshtaya</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#7d8590] group-hover:text-[#58a6ff] ml-auto" />
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-[#58a6ff]" />
                      <div>
                        <div className="text-[#e6edf3] text-sm font-medium">LinkedIn</div>
                        <div className="text-[#7d8590] text-xs">Connect professionally</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#7d8590] group-hover:text-[#58a6ff] ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
