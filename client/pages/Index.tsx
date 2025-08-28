import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LightweightTechBackground } from "../components/LightweightTechBackground";
import { LightweightNavbar } from "../components/LightweightNavbar";
import { LightweightHero } from "../components/LightweightHero";
import { LightweightTerminal } from "../components/LightweightTerminal";
import { About } from "../components/About";
import { CSStrengths } from "../components/CSStrengths";
import { HighTechCSE } from "../components/HighTechCSE";
import { Projects } from "../components/Projects";
import { ProjectExperience } from "../components/ProjectExperience";
import { GitHubStats } from "../components/GitHubStats";
//import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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
    <div className="min-h-screen bg-background relative">
      {/* Lightweight Tech Background */}
      <div className="fixed inset-0 z-0">
        <LightweightTechBackground />
      </div>

      {/* Lightweight Navbar */}
      <LightweightNavbar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-16 relative z-30"
      >
        {/* Hero Section */}
        <section id="home" className="relative z-40">
          <LightweightHero />
        </section>

        {/* Tech Terminal Section */}
        <section id="tech-demo" className="relative z-30">
          <LightweightTerminal />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <About />
        </section>

        {/* Computer Science Strengths */}
        <section
          id="cs-strengths"
          className="relative z-20 bg-background/5 backdrop-blur-sm"
        >
          <CSStrengths />
        </section>

        {/* High-Tech CSE Domains */}
        {/* <section
          id="high-tech-cse"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <HighTechCSE />
        </section> */}

        {/* Project-Based Learning Experience */}
        <section
          id="experience"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <ProjectExperience />
        </section>

        {/* Projects Section - Core Focus */}
        <section
          id="projects"
          className="relative z-20 bg-background/5 backdrop-blur-sm"
        >
          <Projects />
        </section>

        {/* GitHub Stats, LeetCode & Blogs */}
        <section
          id="github-stats"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <GitHubStats />
        </section>

        {/* Certifications & Achievements */}
        {/* <section
          id="certifications"
          className="relative z-20 bg-background/5 backdrop-blur-sm"
        >
          <Certifications />
        </section> */}

        {/* Contact Section */}
        <section
          id="contact"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <Contact />
        </section>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
