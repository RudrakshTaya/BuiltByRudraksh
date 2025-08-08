import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo, socialLinks, navigation, techStack } from '../data/portfolioData';

const quickLinks = [...navigation.core, ...navigation.more];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900/50 border-t border-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {personalInfo.bio.short}
            </p>
            
            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-3">Built with:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const iconMap: { [key: string]: any } = {
                  'Github': Github,
                  'Linkedin': Linkedin,
                  'Code2': Mail, // LeetCode, using Mail as fallback
                  'Trophy': Twitter // HackerRank, using Twitter as fallback
                };
                const Icon = iconMap[link.icon] || Mail;

                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue/20 hover:border-neon-blue/50 border border-gray-700 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@developer.com"
                className="block text-muted-foreground hover:text-neon-blue transition-colors duration-300"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-muted-foreground hover:text-neon-blue transition-colors duration-300"
              >
                {personalInfo.phone}
              </a>
              <p className="text-muted-foreground">
                {personalInfo.location}
              </p>
            </div>

            {/* Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              className="mt-6 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white rounded-lg px-4 py-2 text-sm"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© 2025 Full Stack Developer. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            All rights reserved.
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-neon-purple/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>
    </footer>
  );
};
