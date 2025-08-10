import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxTest = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Test Circle 1 - Faster parallax */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-500/20 rounded-full"
        style={{
          top: "20%",
          left: "10%",
          y: y1,
        }}
      />

      {/* Test Circle 2 - Slower parallax */}
      <motion.div
        className="absolute w-24 h-24 bg-purple-500/20 rounded-full"
        style={{
          top: "60%",
          right: "10%",
          y: y2,
        }}
      />

      {/* Static reference */}
      <div className="absolute w-16 h-16 bg-green-500/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};
