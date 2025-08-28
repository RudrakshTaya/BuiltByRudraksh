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

        {/* About Section - README.md Theme */}
        <section
          id="about"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <ReadmeAbout />
        </section>

        {/* Computer Science Strengths - OOP Theme */}
        <section
          id="cs-strengths"
          className="relative z-20 bg-background/5 backdrop-blur-sm"
        >
          <OOPStrengths />
        </section>

        {/* Projects Section - GitHub Theme */}
        <section
          id="projects"
          className="relative z-20 bg-background/5 backdrop-blur-sm"
        >
          <GitHubProjects />
        </section>

        {/* Database Stats & Analytics */}
        <section
          id="stats"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <DatabaseStats />
        </section>

        {/* Contact Section - API Documentation Theme */}
        <section
          id="contact"
          className="relative z-20 bg-background/10 backdrop-blur-sm"
        >
          <APIContact />
        </section>
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
