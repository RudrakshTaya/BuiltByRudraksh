import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  GitBranch,
  Code2,
  Server,
  Globe,
  Lock,
  Layers
} from 'lucide-react';

// High-tech CSE domains and technologies
const techDomains = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    icon: Brain,
    color: 'neon-purple',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-400/30',
    description: 'Cutting-edge AI algorithms and neural networks',
    technologies: [
      { name: 'Neural Networks', level: 85, color: 'bg-purple-500' },
      { name: 'Deep Learning', level: 78, color: 'bg-indigo-500' },
      { name: 'Computer Vision', level: 72, color: 'bg-blue-500' },
      { name: 'NLP', level: 68, color: 'bg-cyan-500' }
    ],
    applications: [
      'Image Recognition Systems',
      'Natural Language Processing',
      'Predictive Analytics',
      'Autonomous Systems'
    ],
    futureScope: 'AGI Development, Quantum Machine Learning'
  },
  {
    id: 'quantum',
    title: 'Quantum Computing',
    icon: Zap,
    color: 'neon-cyan',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'border-cyan-400/30',
    description: 'Next-generation quantum algorithms and systems',
    technologies: [
      { name: 'Quantum Algorithms', level: 65, color: 'bg-cyan-500' },
      { name: 'Qubits & Gates', level: 58, color: 'bg-teal-500' },
      { name: 'Quantum Error Correction', level: 52, color: 'bg-blue-500' },
      { name: 'Quantum Cryptography', level: 48, color: 'bg-indigo-500' }
    ],
    applications: [
      'Cryptographic Security',
      'Optimization Problems',
      'Drug Discovery',
      'Financial Modeling'
    ],
    futureScope: 'Quantum Internet, Fault-Tolerant Computing'
  },
  {
    id: 'cybersecurity',
    title: 'Advanced Cybersecurity',
    icon: Shield,
    color: 'neon-green',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-400/30',
    description: 'Modern security protocols and threat detection',
    technologies: [
      { name: 'Ethical Hacking', level: 82, color: 'bg-green-500' },
      { name: 'Cryptography', level: 78, color: 'bg-emerald-500' },
      { name: 'Blockchain Security', level: 72, color: 'bg-teal-500' },
      { name: 'Zero Trust Architecture', level: 68, color: 'bg-cyan-500' }
    ],
    applications: [
      'Penetration Testing',
      'Incident Response',
      'Secure Code Review',
      'Threat Intelligence'
    ],
    futureScope: 'AI-Powered Security, Quantum-Safe Cryptography'
  },
  {
    id: 'distributed',
    title: 'Distributed Systems & Cloud',
    icon: Network,
    color: 'neon-blue',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-400/30',
    description: 'Scalable distributed architectures and cloud computing',
    technologies: [
      { name: 'Microservices', level: 85, color: 'bg-blue-500' },
      { name: 'Container Orchestration', level: 78, color: 'bg-indigo-500' },
      { name: 'Service Mesh', level: 72, color: 'bg-purple-500' },
      { name: 'Serverless Computing', level: 75, color: 'bg-cyan-500' }
    ],
    applications: [
      'Cloud-Native Applications',
      'Edge Computing',
      'Real-time Analytics',
      'Global Content Delivery'
    ],
    futureScope: 'Edge AI, Quantum-Cloud Hybrid Systems'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: GitBranch,
    color: 'neon-orange',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-400/30',
    description: 'Decentralized applications and smart contracts',
    technologies: [
      { name: 'Smart Contracts', level: 75, color: 'bg-orange-500' },
      { name: 'DeFi Protocols', level: 68, color: 'bg-yellow-500' },
      { name: 'NFT Development', level: 72, color: 'bg-red-500' },
      { name: 'Consensus Algorithms', level: 65, color: 'bg-pink-500' }
    ],
    applications: [
      'Decentralized Finance',
      'Supply Chain Tracking',
      'Digital Identity',
      'Governance Systems'
    ],
    futureScope: 'Central Bank Digital Currencies, Interoperability'
  },
  {
    id: 'hpc',
    title: 'High-Performance Computing',
    icon: Cpu,
    color: 'neon-pink',
    bgColor: 'bg-pink-500/20',
    borderColor: 'border-pink-400/30',
    description: 'Parallel processing and supercomputing solutions',
    technologies: [
      { name: 'Parallel Algorithms', level: 78, color: 'bg-pink-500' },
      { name: 'GPU Computing', level: 72, color: 'bg-rose-500' },
      { name: 'Cluster Computing', level: 68, color: 'bg-red-500' },
      { name: 'Memory Optimization', level: 75, color: 'bg-orange-500' }
    ],
    applications: [
      'Scientific Simulations',
      'Weather Modeling',
      'Protein Folding',
      'Financial Risk Analysis'
    ],
    futureScope: 'Exascale Computing, Neuromorphic Processors'
  }
];

// Floating tech particles
const TechParticle = ({ tech, index }: { tech: string; index: number }) => (
  <motion.div
    className="absolute text-xs font-mono text-white/30 pointer-events-none"
    initial={{ 
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: 0 
    }}
    animate={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: [0, 0.6, 0],
    }}
    transition={{
      duration: 15 + Math.random() * 10,
      repeat: Infinity,
      delay: index * 2,
      ease: "linear"
    }}
  >
    {tech}
  </motion.div>
);

const DomainCard = ({ domain, index, isActive, onClick }: {
  domain: typeof techDomains[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const IconComponent = domain.icon;

  return (
    <motion.div
      className={`relative cursor-pointer p-4 sm:p-6 rounded-2xl border transition-all duration-500 ${
        isActive 
          ? `${domain.borderColor} ${domain.bgColor} shadow-2xl shadow-${domain.color}/20` 
          : 'border-white/10 bg-black/20 hover:border-white/20'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Glow effect */}
      {isActive && (
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${domain.color}/20 via-transparent to-${domain.color}/20 blur-xl`} />
      )}

      <div className="relative z-10">
        {/* Icon and title */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-${domain.color}/20 flex items-center justify-center border border-${domain.color}/30`}>
            <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 text-${domain.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-white mb-1 line-clamp-2">
              {domain.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {domain.description}
            </p>
          </div>
        </div>

        {/* Technologies preview */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
          {domain.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
            >
              {tech.name}
            </span>
          ))}
          {domain.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
              +{domain.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Future scope */}
        <div className="text-xs text-muted-foreground">
          <span className="text-white/60">Future: </span>
          {domain.futureScope}
        </div>
      </div>
    </motion.div>
  );
};

const TechDetailPanel = ({ domain }: { domain: typeof techDomains[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Technologies with progress */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Code2 className="w-5 h-5" />
          Technologies & Skills
        </h4>
        <div className="space-y-3">
          {domain.technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">{tech.name}</span>
                <span className="text-xs text-muted-foreground">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${tech.color} relative overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5" />
          Real-World Applications
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {domain.applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white"
            >
              {app}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const HighTechCSE = () => {
  const [activeDomain, setActiveDomain] = useState<string>(techDomains[0].id);
  const [showParticles, setShowParticles] = useState(true);

  const techKeywords = [
    'AI', 'ML', 'Quantum', 'Blockchain', 'Cloud', 'Edge', 'IoT', '5G', 'AR/VR',
    'Cybersecurity', 'DevOps', 'Kubernetes', 'GraphQL', 'WebAssembly', 'Rust',
    'TensorFlow', 'PyTorch', 'Docker', 'Microservices', 'Serverless'
  ];

  const activeDomainData = techDomains.find(d => d.id === activeDomain) || techDomains[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDomain(prev => {
        const currentIndex = techDomains.findIndex(d => d.id === prev);
        const nextIndex = (currentIndex + 1) % techDomains.length;
        return techDomains[nextIndex].id;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>

      {/* Floating tech particles */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {techKeywords.map((tech, index) => (
            <TechParticle key={index} tech={tech} index={index} />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-mono text-neon-cyan">HIGH-TECH CSE DOMAINS</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Next-Generation Computing
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring cutting-edge computer science domains that are shaping the future of technology
          </p>
        </motion.div>

        {/* Domain cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {techDomains.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              index={index}
              isActive={activeDomain === domain.id}
              onClick={() => setActiveDomain(domain.id)}
            />
          ))}
        </div>

        {/* Active domain detail panel */}
        <motion.div
          className="glass p-6 sm:p-8 rounded-2xl"
          layout
        >
          <AnimatePresence mode="wait">
            <TechDetailPanel key={activeDomain} domain={activeDomainData} />
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowParticles(!showParticles)}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors"
          >
            {showParticles ? 'Hide' : 'Show'} Tech Particles
          </button>
        </div>
      </div>
    </section>
  );
};
