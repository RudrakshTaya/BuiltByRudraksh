import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LightweightTechBackground } from "../components/LightweightTechBackground";
import { VSCodeNavbar } from "../components/VSCodeNavbar";
import { LightweightHero } from "../components/LightweightHero";
import { LightweightTerminal } from "../components/LightweightTerminal";
import { ReadmeAbout } from "../components/ReadmeAbout";
import { OOPStrengths } from "../components/OOPStrengths";
import { GitHubProjects } from "../components/GitHubProjects";
import { ProjectExperience } from "../components/ProjectExperience";
import { DatabaseStats } from "../components/DatabaseStats";
import { APIContact } from "../components/APIContact";
import { SystemFooter } from "../components/SystemFooter";


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

      {/* VS Code Themed Navbar */}
      <VSCodeNavbar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 relative z-30"
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
