import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Lightweight grid pattern
const TechGrid = () => {
  return (
    <div className="absolute inset-0 opacity-[0.02]">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

// Minimal floating dots (much fewer than before)
const MinimalFloatingDots = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: (i % 4) * 25 + 10,
        y: Math.floor(i / 4) * 40 + 20,
        delay: i * 2,
        size: 2 + (i % 3),
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Simple code snippets (static with minimal animation)
const CodeSnippets = () => {
  const snippets = useMemo(
    () => [
      { text: "const dev = 'passionate';", x: 15, y: 25 },
      { text: "while(learning) { grow(); }", x: 70, y: 40 },
      { text: "git commit -m 'innovation'", x: 25, y: 75 },
      { text: "npm run build --success", x: 80, y: 15 },
    ],
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.08] font-mono text-xs pointer-events-none">
      {snippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
    </div>
  );
};

// Main lightweight background component
export const LightweightTechBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />

      {/* Lightweight grid */}
      <TechGrid />

      {/* Minimal floating elements */}
      <MinimalFloatingDots />

      {/* Simple code snippets */}
      <CodeSnippets />

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
    </div>
  );
};
