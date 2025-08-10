import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Floating Orbs Component
const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const colors = [
      "rgba(59, 130, 246, 0.15)", // blue
      "rgba(139, 92, 246, 0.15)", // purple
      "rgba(6, 182, 212, 0.15)", // cyan
      "rgba(16, 185, 129, 0.12)", // green
      "rgba(245, 158, 11, 0.12)", // yellow
    ];

    const newOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 200 + Math.random() * 300,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }));

    setOrbs(newOrbs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.8, 1],
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

// Subtle Geometric Grid
const GeometricGrid = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [0.3, 0.1]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${i * 5}%`,
            background:
              "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertical lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px"
          style={{
            left: `${i * 7}%`,
            background:
              "linear-gradient(0deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

// Flowing Particles
const FlowingParticles = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      size: number;
      speed: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const colors = ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"];

    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 2 + Math.random() * 4,
      speed: 20 + Math.random() * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

// Gradient Waves
const GradientWaves = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave 1 */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <motion.div
          className="absolute top-0 left-0 w-[120%] h-[120%] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 30% -20%, rgba(59, 130, 246, 0.2), transparent)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Wave 2 */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <motion.div
          className="absolute bottom-0 right-0 w-[120%] h-[120%] opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 70% 120%, rgba(139, 92, 246, 0.2), transparent)",
          }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Wave 3 */}
      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(6, 182, 212, 0.25), transparent)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

// Main Smooth Parallax Background Component
export const SmoothParallaxBackground = () => {
  const { scrollY } = useScroll();

  // Different scroll speeds for parallax layers
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
  const midgroundY = useTransform(scrollY, [0, 1000], [0, -75]);
  const foregroundY = useTransform(scrollY, [0, 1000], [0, -25]);

  // Smooth spring physics
  const smoothBackgroundY = useSpring(backgroundY, {
    damping: 50,
    stiffness: 100,
  });
  const smoothMidgroundY = useSpring(midgroundY, {
    damping: 30,
    stiffness: 80,
  });
  const smoothForegroundY = useSpring(foregroundY, {
    damping: 20,
    stiffness: 60,
  });

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Layer - Slowest */}
      <motion.div className="absolute inset-0" style={{ y: smoothBackgroundY }}>
        <GradientWaves />
      </motion.div>

      {/* Midground Layer - Medium Speed */}
      <motion.div className="absolute inset-0" style={{ y: smoothMidgroundY }}>
        <FloatingOrbs />
      </motion.div>

      {/* Grid Layer */}
      <motion.div className="absolute inset-0">
        <GeometricGrid />
      </motion.div>

      {/* Foreground Layer - Fastest */}
      <motion.div className="absolute inset-0" style={{ y: smoothForegroundY }}>
        <FlowingParticles />
      </motion.div>

      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Subtle ambient lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/3 via-transparent to-purple-500/3" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />
      </div>
    </div>
  );
};
