import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Battery,
  Clock,
  Server,
  Globe,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Zap,
  Shield,
  Database,
  Cloud,
  Monitor,
} from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolioData";

export const SystemFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStats, setSystemStats] = useState({
    uptime: "127 days, 14:32:05",
    cpu: Math.floor(Math.random() * 30) + 10,
    memory: Math.floor(Math.random() * 40) + 30,
    disk: 67,
    network: Math.floor(Math.random() * 20) + 80,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());

      // Simulate system stats updates
      setSystemStats((prev) => ({
        ...prev,
        cpu: Math.floor(Math.random() * 30) + 10,
        memory: Math.floor(Math.random() * 40) + 30,
        network: Math.floor(Math.random() * 20) + 80,
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (value: number, type: string) => {
    if (type === "network") {
      return value > 90
        ? "text-green-400"
        : value > 70
          ? "text-yellow-400"
          : "text-red-400";
    }
    return value < 50
      ? "text-green-400"
      : value < 80
        ? "text-yellow-400"
        : "text-red-400";
  };

  const services = [
    { name: "Portfolio API", status: "online", uptime: "99.9%", icon: Server },
    { name: "Database", status: "online", uptime: "99.8%", icon: Database },
    { name: "CDN", status: "online", uptime: "100%", icon: Cloud },
    { name: "Analytics", status: "online", uptime: "99.7%", icon: Activity },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "MongoDB",
    "AWS",
    "Docker",
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] relative overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
            </div>
            <span className="text-[#e6edf3] text-sm font-mono">
              portfolio@rudraksh:~$
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#7d8590]">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="font-mono">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4 text-green-400" />
              <span>System Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* System Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-5 h-5 text-[#58a6ff]" />
            <span className="text-[#e6edf3] font-semibold">System Monitor</span>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-[#7d8590] text-sm">
                All systems operational
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* CPU Usage */}
            <div className="flex items-center gap-3">
              <Cpu
                className={`w-5 h-5 ${getStatusColor(systemStats.cpu, "cpu")}`}
              />
              <div>
                <div className="text-[#e6edf3] text-sm font-medium">CPU</div>
                <div className="text-[#7d8590] text-xs">{systemStats.cpu}%</div>
              </div>
            </div>

            {/* Memory Usage */}
            <div className="flex items-center gap-3">
              <HardDrive
                className={`w-5 h-5 ${getStatusColor(systemStats.memory, "memory")}`}
              />
              <div>
                <div className="text-[#e6edf3] text-sm font-medium">Memory</div>
                <div className="text-[#7d8590] text-xs">
                  {systemStats.memory}%
                </div>
              </div>
            </div>

            {/* Disk Usage */}
            <div className="flex items-center gap-3">
              <Database
                className={`w-5 h-5 ${getStatusColor(systemStats.disk, "disk")}`}
              />
              <div>
                <div className="text-[#e6edf3] text-sm font-medium">Disk</div>
                <div className="text-[#7d8590] text-xs">
                  {systemStats.disk}%
                </div>
              </div>
            </div>

            {/* Network */}
            <div className="flex items-center gap-3">
              <Wifi
                className={`w-5 h-5 ${getStatusColor(systemStats.network, "network")}`}
              />
              <div>
                <div className="text-[#e6edf3] text-sm font-medium">
                  Network
                </div>
                <div className="text-[#7d8590] text-xs">
                  {systemStats.network}%
                </div>
              </div>
            </div>
          </div>

          {/* System Uptime */}
          <div className="mt-4 pt-4 border-t border-[#30363d] flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-[#e6edf3]">Uptime:</span>
              <span className="text-[#7d8590] font-mono">
                {systemStats.uptime}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#7d8590]">
              <span>Load avg: 0.12, 0.18, 0.15</span>
              <span>Processes: 342</span>
              <span>Users: 1</span>
            </div>
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#161b22] border border-[#30363d] rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[#58a6ff]" />
                  <span className="text-[#e6edf3] text-sm font-medium">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-xs">
                      {service.status}
                    </span>
                  </div>
                  <span className="text-[#7d8590] text-xs">
                    {service.uptime}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#e6edf3] font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#58a6ff]" />$ whoami
            </h3>
            <div className="space-y-2 text-sm">
              <div className="text-[#7d8590]">
                <span className="text-[#e6edf3]">Name:</span>{" "}
                {personalInfo.name}
              </div>
              <div className="text-[#7d8590]">
                <span className="text-[#e6edf3]">Role:</span>{" "}
                {personalInfo.title}
              </div>
              <div className="text-[#7d8590]">
                <span className="text-[#e6edf3]">Location:</span>{" "}
                {personalInfo.location}
              </div>
              <div className="text-[#7d8590]">
                <span className="text-[#e6edf3]">Status:</span> Available for
                opportunities
              </div>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-[#e6edf3] font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#58a6ff]" />$ ls -la
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-[#7d8590] hover:text-[#58a6ff] text-sm transition-colors font-mono"
                >
                  ./{link.name.toLowerCase()}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-[#e6edf3] font-semibold mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#58a6ff]" />$ tech --list
            </h3>
            <div className="flex flex-wrap gap-1">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#21262d] border border-[#30363d] text-[#e6edf3] text-xs px-2 py-1 rounded font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-[#e6edf3] font-semibold mb-4 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-[#58a6ff]" />$ connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const iconMap = {
                  Github: Github,
                  Linkedin: Linkedin,
                  Mail: Mail,
                  Code2: Code2,
                };
                const Icon =
                  iconMap[link.icon as keyof typeof iconMap] || Code2;

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff] text-sm transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Terminal Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 mb-8"
        >
          <div className="font-mono text-sm space-y-1">
            <div className="text-[#7d8590]"># System Information</div>
            <div className="text-[#e6edf3]">portfolio@rudraksh:~$ uname -a</div>
            <div className="text-[#7d8590]">
              Portfolio 5.4.0-portfolio #1 SMP Web Fri Jan 15 10:30:00 UTC 2024
              x86_64 GNU/Career
            </div>
            <div className="text-[#e6edf3] mt-2">
              portfolio@rudraksh:~$ echo "Ready for new opportunities!"
            </div>
            <div className="text-[#7d8590]">Ready for new opportunities!</div>
            <div className="text-[#e6edf3]">portfolio@rudraksh:~$ █</div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[#30363d] text-sm text-[#7d8590]"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>© 2024 {personalInfo.name}</span>
            <span>•</span>
            <span>Built with ❤️ and ☕</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version 2.0.1</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Battery className="w-3 h-3 text-green-400" />
              <span>100% Motivated</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>
    </footer>
  );
};
