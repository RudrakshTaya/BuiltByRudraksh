import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SmoothParallaxBackground } from "../components/SmoothParallaxBackground";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { CSStrengths } from "../components/CSStrengths";
import { Projects } from "../components/Projects";
import { ProjectExperience } from "../components/ProjectExperience";
import { GitHubStats } from "../components/GitHubStats";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-16"
      >
        {/* Hero Section */}
        <section id="home" className="relative">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <About />
        </section>

        {/* Computer Science Strengths */}
        <section id="cs-strengths" className="relative">
          <CSStrengths />
        </section>

        {/* Project-Based Learning Experience */}
        <section id="experience" className="relative">
          <ProjectExperience />
        </section>

        {/* Projects Section - Core Focus */}
        <section id="projects" className="relative">
          <Projects />
        </section>

        {/* GitHub Stats, LeetCode & Blogs */}
        <section id="github-stats" className="relative">
          <GitHubStats />
        </section>

        {/* Certifications & Achievements */}
        <section id="certifications" className="relative">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <Contact />
        </section>
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button - Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-glow-lg transition-all duration-300 z-40 group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </motion.svg>
      </motion.button>

      {/* Global Smooth Parallax Background */}
      <SmoothParallaxBackground />
    </div>
  );
}
