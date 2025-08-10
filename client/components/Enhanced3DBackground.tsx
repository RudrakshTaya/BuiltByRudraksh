import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Enhanced Floating Orbs with stronger glow
const EnhancedFloatingOrbs = () => {
  const [orbs, setOrbs] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const colors = [
      '#3B82F6',  // blue
      '#8B5CF6',  // purple
      '#06B6D4',  // cyan
      '#10B981',  // green
      '#F59E0B',  // yellow
      '#EF4444',  // red
    ];

    const newOrbs = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 150 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));

    setOrbs(newOrbs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color}40 0%, ${orb.color}20 50%, transparent 70%)`,
            boxShadow: `0 0 ${orb.size}px ${orb.color}30`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Geometric Patterns
const GeometricPatterns = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden opacity-60"
      style={{ y }}
    >
      {/* Rotating hexagons */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute"
          style={{
            left: `${(i % 5) * 25}%`,
            top: `${Math.floor(i / 5) * 30}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15 + i, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
          }}
        >
          <div
            className="w-12 h-12 border-2 border-cyan-400/40"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
            }}
          />
        </motion.div>
      ))}

      {/* Rotating lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          style={{
            top: `${i * 12.5}%`,
            width: '100%',
            transformOrigin: 'center',
          }}
          animate={{
            rotate: [0, 360],
            scaleX: [0.5, 1.5, 0.5],
          }}
          transition={{
            rotate: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" },
            scaleX: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
          }}
        />
      ))}
    </motion.div>
  );
};

// Enhanced Code Rain
const EnhancedCodeRain = () => {
  const [streams, setStreams] = useState<Array<{
    id: number;
    x: number;
    chars: string[];
    speed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const codeChars = [
      'class', 'function', 'const', 'let', 'var', 'if', 'else', 'for', 'while',
      'return', 'import', 'export', 'async', 'await', 'try', 'catch',
      '{', '}', '(', ')', '[', ']', '=>', '===', '!==', '&&', '||',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
    ];
    
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'];
    
    const newStreams = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: (i * 4),
      chars: Array.from({ length: 15 }, () => 
        codeChars[Math.floor(Math.random() * codeChars.length)]
      ),
      speed: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setStreams(newStreams);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-35">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute font-mono text-sm font-bold"
          style={{ 
            left: `${stream.x}%`,
            color: stream.color,
            textShadow: `0 0 10px ${stream.color}`,
          }}
          initial={{ y: '-20vh' }}
          animate={{ y: '120vh' }}
          transition={{
            duration: 20 / stream.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          {stream.chars.map((char, index) => (
            <motion.div
              key={index}
              style={{
                opacity: Math.max(0.2, 1 - index * 0.06),
              }}
              animate={{
                opacity: [1 - index * 0.06, 0.3 - index * 0.06, 1 - index * 0.06],
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Algorithm Visualizer
const EnhancedAlgorithmNodes = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    algorithm: string;
    color: string;
  }>>([]);

  useEffect(() => {
    const algorithms = [
      'BFS', 'DFS', 'A*', 'Sort', 'Hash', 'Tree', 'Graph', 'Stack',
      'Queue', 'Heap', 'DP', 'ML', 'AI', 'API', 'DB', 'React'
    ];

    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

    const algorithmNodes = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: (i % 4) * 30 + 10,
      y: Math.floor(i / 4) * 25 + 10,
      z: Math.random() * 100 - 50,
      algorithm: algorithms[i % algorithms.length],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setNodes(algorithmNodes);
  }, []);

  return (
    <div className="absolute inset-0 opacity-50" style={{ perspective: '1500px' }}>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `translateZ(${node.z}px)`,
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 180, 0],
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
          }}
          transition={{
            rotateY: { duration: 12 + node.id, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 8 + node.id * 0.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.1 },
          }}
          whileHover={{ scale: 1.5, z: 100 }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-xs font-bold border-2 glass backdrop-blur-sm"
            style={{
              background: `linear-gradient(45deg, ${node.color}60, ${node.color}30)`,
              borderColor: `${node.color}80`,
              boxShadow: `0 0 30px ${node.color}50, inset 0 0 20px ${node.color}20`,
              transformStyle: 'preserve-3d',
            }}
          >
            <span className="text-center leading-none font-bold">{node.algorithm}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Main Enhanced 3D Background Component
export const Enhanced3DBackground = () => {
  const { scrollY } = useScroll();
  
  // Enhanced parallax transforms with more dramatic movement
  const layer1Y = useTransform(scrollY, [0, 2000], [0, -400]);
  const layer2Y = useTransform(scrollY, [0, 2000], [0, -600]);
  const layer3Y = useTransform(scrollY, [0, 2000], [0, -300]);
  const layer4Y = useTransform(scrollY, [0, 2000], [0, -150]);
  
  // Smooth spring physics
  const smoothLayer1Y = useSpring(layer1Y, { damping: 50, stiffness: 100 });
  const smoothLayer2Y = useSpring(layer2Y, { damping: 40, stiffness: 80 });
  const smoothLayer3Y = useSpring(layer3Y, { damping: 45, stiffness: 90 });
  const smoothLayer4Y = useSpring(layer4Y, { damping: 30, stiffness: 70 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1: Floating Orbs (Deepest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer1Y }}
      >
        <EnhancedFloatingOrbs />
      </motion.div>

      {/* Layer 2: Code Rain */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer2Y }}
      >
        <EnhancedCodeRain />
      </motion.div>

      {/* Layer 3: Geometric Patterns */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer3Y }}
      >
        <GeometricPatterns />
      </motion.div>

      {/* Layer 4: Algorithm Nodes (Closest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer4Y }}
      >
        <EnhancedAlgorithmNodes />
      </motion.div>

      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/40" />
      
      {/* Ambient lighting effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/15 via-transparent to-transparent" />
      </div>
    </div>
  );
};
