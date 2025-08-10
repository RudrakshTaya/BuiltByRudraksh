import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// 3D Algorithm Visualizer
const AlgorithmNodes = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    algorithm: string;
    color: string;
    connections: number[];
  }>>([]);

  useEffect(() => {
    const algorithms = [
      'BFS', 'DFS', 'Dijkstra', 'A*', 'Binary Search', 'Merge Sort',
      'Quick Sort', 'Hash Map', 'Binary Tree', 'Linked List', 'Stack',
      'Queue', 'Graph', 'Heap', 'Trie', 'Dynamic Programming'
    ];

    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

    const algorithmNodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i % 5) * 25,
      y: Math.floor(i / 5) * 25,
      z: Math.random() * 200 - 100,
      algorithm: algorithms[Math.floor(Math.random() * algorithms.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
        Math.floor(Math.random() * 20)
      ).filter(conn => conn !== i),
    }));

    setNodes(algorithmNodes);
  }, []);

  return (
    <div className="absolute inset-0 opacity-60" style={{ perspective: '1500px' }}>
      {/* Algorithm Nodes */}
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
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            rotateY: { duration: 15 + node.id, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.1 },
          }}
        >
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-xs font-bold border-2 glass"
            style={{
              background: `linear-gradient(45deg, ${node.color}40, ${node.color}20)`,
              borderColor: `${node.color}60`,
              boxShadow: `0 0 20px ${node.color}40`,
              transformStyle: 'preserve-3d',
            }}
          >
            <span className="text-center leading-none">{node.algorithm}</span>
          </div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      {nodes.map((node) =>
        node.connections.map((connId, index) => {
          const connectedNode = nodes[connId];
          if (!connectedNode) return null;

          const deltaX = connectedNode.x - node.x;
          const deltaY = connectedNode.y - node.y;
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          return (
            <motion.div
              key={`conn-${node.id}-${connId}-${index}`}
              className="absolute h-px"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                background: `linear-gradient(90deg, ${node.color}60, ${connectedNode.color}60)`,
                transform: `translateZ(${(node.z + connectedNode.z) / 2}px) rotate(${angle}deg)`,
                transformOrigin: 'left center',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: (node.id + connId) * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })
      )}
    </div>
  );
};

// Floating Code Snippets
const FloatingCodeSnippets = () => {
  const [codeBlocks, setCodeBlocks] = useState<Array<{
    id: number;
    x: number;
    y: number;
    code: string;
    language: string;
    color: string;
  }>>([]);

  useEffect(() => {
    const snippets = [
      { code: 'function sort(arr) {\n  return arr.sort();\n}', language: 'JS', color: '#F7DF1E' },
      { code: 'class Node {\n  constructor(data) {\n    this.data = data;\n  }\n}', language: 'JS', color: '#61DAFB' },
      { code: 'def binary_search(arr, x):\n  left, right = 0, len(arr) - 1\n  return mid', language: 'PY', color: '#3776AB' },
      { code: 'public class Stack<T> {\n  private Node<T> top;\n  public void push(T data) {}\n}', language: 'JAVA', color: '#ED8B00' },
      { code: '#include <vector>\nstd::vector<int> v;\nv.push_back(42);', language: 'C++', color: '#00599C' },
      { code: 'SELECT * FROM users\nWHERE age > 18\nORDER BY name;', language: 'SQL', color: '#336791' },
      { code: 'const graph = new Map();\ngraph.set(node, [neighbors]);', language: 'JS', color: '#F7DF1E' },
      { code: 'import numpy as np\narr = np.array([1, 2, 3])', language: 'PY', color: '#3776AB' },
    ];

    const blocks = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      ...snippets[Math.floor(Math.random() * snippets.length)],
    }));

    setCodeBlocks(blocks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      {codeBlocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute glass rounded-lg p-3 border"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            borderColor: `${block.color}60`,
          }}
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: block.id * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: block.color }}
            />
            <span className="text-xs font-bold text-white">{block.language}</span>
          </div>
          <pre className="text-xs text-gray-300 font-mono leading-relaxed">
            {block.code}
          </pre>
        </motion.div>
      ))}
    </div>
  );
};

// Data Structure Visualization
const DataStructures3D = () => {
  const structures = [
    { name: 'Binary Tree', x: 20, y: 20, type: 'tree' },
    { name: 'Linked List', x: 80, y: 30, type: 'list' },
    { name: 'Hash Table', x: 60, y: 70, type: 'hash' },
    { name: 'Stack', x: 30, y: 80, type: 'stack' },
    { name: 'Queue', x: 70, y: 20, type: 'queue' },
    { name: 'Graph', x: 40, y: 50, type: 'graph' },
  ];

  const renderStructure = (structure: any, index: number) => {
    const motionProps = {
      className: "absolute",
      style: {
        left: `${structure.x}%`,
        top: `${structure.y}%`,
        transform: 'translateZ(0px)',
      },
      animate: {
        rotateZ: [0, 360],
        scale: [1, 1.1, 1],
      },
      transition: {
        rotateZ: { duration: 20 + index * 2, repeat: Infinity, ease: "linear" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
      },
    };

    switch (structure.type) {
      case 'tree':
        return (
          <motion.div key={structure.name} {...motionProps}>
            <div className="relative">
              {/* Tree nodes */}
              <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-3 h-3 bg-blue-400 rounded-full absolute top-6 left-2" />
              <div className="w-3 h-3 bg-blue-400 rounded-full absolute top-6 right-2" />
              <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-10 left-0" />
              <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-10 left-4" />
              {/* Tree connections */}
              <div className="absolute top-4 left-1/2 w-px h-2 bg-blue-500 transform -translate-x-1/2" />
              <div className="absolute top-4 left-1/2 w-6 h-px bg-blue-500 transform -translate-x-1/2" />
            </div>
          </motion.div>
        );
      
      case 'list':
        return (
          <motion.div key={structure.name} {...motionProps}>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3 h-3 bg-green-500 rounded border border-green-400" />
              ))}
            </div>
          </motion.div>
        );

      case 'hash':
        return (
          <motion.div key={structure.name} {...motionProps}>
            <div className="grid grid-cols-2 gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3 h-3 bg-purple-500 rounded border border-purple-400" />
              ))}
            </div>
          </motion.div>
        );
      
      case 'stack':
        return (
          <motion.div {...baseProps}>
            <div className="flex flex-col-reverse gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-2 bg-orange-500 rounded border border-orange-400" />
              ))}
            </div>
          </motion.div>
        );
      
      case 'queue':
        return (
          <motion.div {...baseProps}>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-6 bg-cyan-500 rounded border border-cyan-400" />
              ))}
            </div>
          </motion.div>
        );
      
      case 'graph':
        return (
          <motion.div {...baseProps}>
            <div className="relative w-8 h-8">
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 left-0" />
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0" />
              <div className="w-2 h-2 bg-red-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              <svg className="absolute inset-0 w-full h-full">
                <line x1="4" y1="4" x2="20" y2="4" stroke="#ef4444" strokeWidth="1" />
                <line x1="4" y1="4" x2="16" y2="24" stroke="#ef4444" strokeWidth="1" />
                <line x1="20" y1="4" x2="16" y2="24" stroke="#ef4444" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 opacity-50">
      {structures.map((structure, index) => renderStructure(structure, index))}
    </div>
  );
};

// Matrix Digital Rain
const MatrixRain = () => {
  const [streams, setStreams] = useState<Array<{
    id: number;
    x: number;
    chars: string[];
    speed: number;
  }>>([]);

  useEffect(() => {
    const characters = '01アイウエ��カキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const newStreams = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i * 3.33),
      chars: Array.from({ length: 20 }, () => 
        characters[Math.floor(Math.random() * characters.length)]
      ),
      speed: 3 + Math.random() * 2,
    }));

    setStreams(newStreams);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute font-mono text-xs"
          style={{ left: `${stream.x}%` }}
          initial={{ y: '-20vh' }}
          animate={{ y: '120vh' }}
          transition={{
            duration: 15 / stream.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {stream.chars.map((char, index) => (
            <motion.div
              key={index}
              className="text-green-400"
              style={{
                opacity: Math.max(0, 1 - index * 0.05),
                textShadow: '0 0 10px #22c55e',
              }}
              animate={{
                opacity: [1 - index * 0.05, 0.5 - index * 0.05, 1 - index * 0.05],
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

// Geometric Tech Grid
const TechGrid3D = () => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 1000], [60, 45]);
  const rotateY = useTransform(scrollY, [0, 1000], [0, 15]);

  return (
    <motion.div 
      className="absolute inset-0 opacity-30"
      style={{
        perspective: '1000px',
        rotateX,
        rotateY,
      }}
    >
      {/* Grid Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`grid-h-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${i * 5}%`,
            background: 'linear-gradient(90deg, transparent, #3B82F640, transparent)',
            transform: `translateZ(${i * 10 - 50}px)`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`grid-v-${i}`}
          className="absolute h-full w-px"
          style={{
            left: `${i * 7}%`,
            background: 'linear-gradient(0deg, transparent, #8B5CF640, transparent)',
            transform: `translateZ(${i * 8 - 40}px)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

// Main CSE 3D Background Component
export const CSE3DBackground = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for different layers
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -100]);
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -200]);
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -150]);
  const layer4Y = useTransform(scrollY, [0, 1000], [0, -75]);
  const layer5Y = useTransform(scrollY, [0, 1000], [0, -50]);
  
  // Smooth spring physics
  const smoothLayer1Y = useSpring(layer1Y, { damping: 50, stiffness: 100 });
  const smoothLayer2Y = useSpring(layer2Y, { damping: 40, stiffness: 80 });
  const smoothLayer3Y = useSpring(layer3Y, { damping: 45, stiffness: 90 });
  const smoothLayer4Y = useSpring(layer4Y, { damping: 30, stiffness: 70 });
  const smoothLayer5Y = useSpring(layer5Y, { damping: 20, stiffness: 60 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Layer 1: Matrix Rain (Deepest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer1Y, transform: 'translateZ(-400px) scale(1.5)' }}
      >
        <MatrixRain />
      </motion.div>

      {/* Layer 2: 3D Tech Grid */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer2Y, transform: 'translateZ(-300px) scale(1.3)' }}
      >
        <TechGrid3D />
      </motion.div>

      {/* Layer 3: Algorithm Nodes */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer3Y, transform: 'translateZ(-200px) scale(1.2)' }}
      >
        <AlgorithmNodes />
      </motion.div>

      {/* Layer 4: Data Structures */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer4Y, transform: 'translateZ(-100px) scale(1.1)' }}
      >
        <DataStructures3D />
      </motion.div>

      {/* Layer 5: Floating Code (Closest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: smoothLayer5Y, transform: 'translateZ(-50px)' }}
      >
        <FloatingCodeSnippets />
      </motion.div>

      {/* Base gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      
      {/* Ambient lighting effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-conic from-purple-500/3 via-blue-500/3 to-cyan-500/3" />
      </div>
    </div>
  );
};
