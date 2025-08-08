import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Minimal Floating Orbs
export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          top: '20%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
          top: '60%',
          right: '15%',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
          top: '10%',
          right: '20%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Simple Geometric Shapes
export const GeometricElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Subtle geometric lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
        animate={{
          opacity: [0.1, 0.4, 0.1],
          scaleX: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Floating squares */}
      <motion.div
        className="absolute w-4 h-4 border border-cyan-400/40"
        style={{ top: '30%', left: '20%' }}
        animate={{
          rotate: [0, 45, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-6 h-6 border border-blue-400/40"
        style={{ top: '70%', right: '25%' }}
        animate={{
          rotate: [45, 0, 45],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};

// Subtle Code Rain
export const CodeRain = () => {
  const [codeLines, setCodeLines] = useState<Array<{ id: number; x: number; text: string; delay: number }>>([]);

  useEffect(() => {
    const codes = [
      'const',
      'function',
      'async',
      'return',
      '=>',
      '{}',
      '()',
      'if',
      'else',
    ];
    
    const lines = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      text: codes[Math.floor(Math.random() * codes.length)],
      delay: Math.random() * 10,
    }));
    
    setCodeLines(lines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute font-mono text-xs text-cyan-400"
          style={{ left: `${line.x}%` }}
          animate={{
            y: ['-10vh', '110vh'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 20,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {line.text}
        </motion.div>
      ))}
    </div>
  );
};

// Clean Grid Pattern
export const GridPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

// Main Clean Background Component
export const CleanBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GridPattern />
      <FloatingOrbs />
      <GeometricElements />
      <CodeRain />
    </div>
  );
};
