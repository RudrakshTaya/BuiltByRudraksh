import React, { useState, useEffect } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";

export const LightweightNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToContact}
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button
              size="sm"
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button
                onClick={downloadResume}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
