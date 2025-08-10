import React from "react";
import { motion } from "framer-motion";

export const BackgroundDemo = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
            Smooth & Elegant
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Experience the new smooth parallax background with subtle animations 
            and perfect performance across all sections.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Smooth Parallax",
                description: "Multiple layers move at different speeds creating depth",
                icon: "🌊",
              },
              {
                title: "Optimized Performance", 
                description: "Hardware-accelerated animations with spring physics",
                icon: "⚡",
              },
              {
                title: "Elegant Design",
                description: "Clean, minimal effects that enhance without distraction",
                icon: "✨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-2xl hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
