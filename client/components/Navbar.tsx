import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  ChevronDown,
  MoreHorizontal,
  Trophy,
} from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";
import { navigation, socialLinks } from "../data/portfolioData";

// All nav items for mobile menu
const allNavItems = [...navigation.core, ...navigation.more];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = allNavItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMoreDropdownOpen &&
        !(event.target as Element).closest(".relative")
      ) {
        setIsMoreDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMoreDropdownOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/10 backdrop-blur-xl"
            : "bg-gradient-to-b from-background/20 via-background/10 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-white font-bold text-base">Rudraksh</h1>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Core Navigation Items */}
              {navigation.core.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-blue-600/80 text-white border border-blue-500/60 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </motion.button>
              ))}

              {/* More Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    navigation.more.some(
                      (item) => activeSection === item.href.replace("#", ""),
                    ) || isMoreDropdownOpen
                      ? "bg-purple-600/80 text-white border border-purple-500/60 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <MoreHorizontal className="h-4 w-4" />
                  More
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${isMoreDropdownOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isMoreDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-52 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 py-3 z-50 shadow-2xl"
                      onMouseLeave={() => setIsMoreDropdownOpen(false)}
                    >
                      {navigation.more.map((item, index) => (
                        <motion.button
                          key={item.name}
                          onClick={() => {
                            scrollToSection(item.href);
                            setIsMoreDropdownOpen(false);
                          }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-all duration-300 ${
                            activeSection === item.href.replace("#", "")
                              ? "bg-blue-600/80 text-white shadow-lg"
                              : "text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-md"
                          }`}
                        >
                          <span className="text-base">{item.icon}</span>
                          {item.name}
                        </motion.button>
                      ))}

                      {/* Divider */}
                      <div className="h-px bg-white/20 mx-4 my-3" />

                      {/* Social Links */}
                      <div className="px-4 py-2">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          Connect
                        </p>
                        <div className="flex gap-2">
                          {socialLinks.map((link, index) => {
                            const iconMap: { [key: string]: any } = {
                              Github: Github,
                              Linkedin: Linkedin,
                              Code2: Code2,
                              Trophy: Trophy,
                            };
                            const Icon = iconMap[link.icon] || Mail;

                            return (
                              <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-8 h-8 bg-gray-700/60 hover:bg-blue-600/80 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                                title={link.name}
                              >
                                <Icon className="h-4 w-4" />
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center">
              <Button
                size="sm"
                onClick={downloadResume}
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white transition-all duration-300 btn-shine text-xs px-3 py-2"
              >
                <Download className="h-3 w-3 mr-1" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 right-0 z-40 lg:hidden bg-gray-900/95 border-b border-white/20 backdrop-blur-xl shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              {/* Navigation Links */}
              <div className="space-y-2 mb-6">
                {allNavItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-blue-600/80 text-white border border-blue-500/60 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                {socialLinks.map((link, index) => {
                  const iconMap: { [key: string]: any } = {
                    Github: Github,
                    Linkedin: Linkedin,
                    Code2: Code2,
                    Trophy: Trophy,
                  };
                  const Icon = iconMap[link.icon] || Mail;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-700/60 hover:bg-blue-600/80 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <Button
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white transition-all duration-300 btn-shine px-8"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
