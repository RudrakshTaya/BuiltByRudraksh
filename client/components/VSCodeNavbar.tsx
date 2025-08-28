import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Download,
  Mail,
  Folder,
  FileText,
  Terminal,
  Code2,
  User,
  Briefcase,
  MessageSquare,
  Settings,
  ChevronRight,
  Circle,
  Minus,
  Square,
} from "lucide-react";
import { Button } from "./ui/button";
import { downloadResume } from "../utils/downloadResume";

export const VSCodeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "home",
      name: "portfolio.tsx",
      icon: FileText,
      href: "#home",
      modified: false,
    },
    {
      id: "about",
      name: "README.md",
      icon: FileText,
      href: "#about",
      modified: false,
    },
    {
      id: "projects",
      name: "projects/",
      icon: Folder,
      href: "#projects",
      modified: true,
    },
    {
      id: "contact",
      name: "api.ts",
      icon: Code2,
      href: "#contact",
      modified: false,
    },
  ];

  const sidebarItems = [
    { id: "home", name: "Home", icon: FileText, href: "#home" },
    { id: "about", name: "About", icon: User, href: "#about" },
    { id: "projects", name: "Projects", icon: Briefcase, href: "#projects" },
    { id: "contact", name: "Contact", icon: MessageSquare, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active tab based on scroll position
      const sections = tabs.map((tab) => tab.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, tabId: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tabId);
    setIsSidebarOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* VS Code Window Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e] border-b border-[#2d2d2d]">
        {/* Title Bar */}
        <div className="flex items-center justify-between h-8 bg-[#2d2d2d] px-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#28ca42]/80 cursor-pointer"></div>
            </div>
          </div>
          <div className="text-[#cccccc] text-sm font-medium hidden md:block">
            Portfolio - Visual Studio Code
          </div>
          <div className="text-[#cccccc] text-xs font-medium md:hidden">
            Portfolio
          </div>
          <div className="flex items-center gap-1">
            {/* <button className="w-6 h-6 md:w-8 hover:bg-[#3c3c3c] flex items-center justify-center text-[#cccccc]">
              <Minus className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="w-6 h-6 md:w-8 hover:bg-[#3c3c3c] flex items-center justify-center text-[#cccccc]">
              <Square className="w-2 h-2 md:w-3 md:h-3" />
            </button>
            <button className="w-6 h-6 md:w-8 hover:bg-[#e81123] hover:text-white flex items-center justify-center text-[#cccccc]">
              <X className="w-3 h-3 md:w-4 md:h-4" />
            </button> */}
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex items-center h-8 bg-[#2d2d2d] px-2 text-sm text-[#cccccc]">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs mr-2 md:mr-4 flex items-center gap-1"
          >
            <Menu className="w-3 h-3 md:hidden" />
            <span>File</span>
          </button>
          <div className="hidden md:flex items-center gap-0">
            <button className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs">
              Edit
            </button>
            <button className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs">
              View
            </button>
            <button className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs">
              Go
            </button>
            <button className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs">
              Run
            </button>
            <button className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs">
              Terminal
            </button>
            <button className="px-2 py-1 hover:bg-[#3c3c3c] rounded text-xs">
              Help
            </button>
          </div>

          {/* Actions on the right */}
          <div className="ml-auto flex items-center gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToContact}
              className="text-[#cccccc] hover:bg-[#3c3c3c] hover:text-white text-xs h-6 px-1 md:px-2"
            >
              <Mail className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Contact</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={downloadResume}
              className="text-[#cccccc] hover:bg-[#3c3c3c] hover:text-white text-xs h-6 px-1 md:px-2"
            >
              <Download className="w-3 h-3 md:mr-1" />
              <span className="hidden md:inline">Resume</span>
            </Button>
          </div>
        </div>

        {/* Tab Bar - Desktop Only */}
        <div className="hidden md:flex bg-[#1e1e1e] border-b border-[#2d2d2d] overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.href, tab.id)}
                className={`flex items-center gap-2 px-3 lg:px-4 py-2 text-sm border-r border-[#2d2d2d] transition-colors min-w-[120px] lg:min-w-[150px] relative group ${
                  isActive
                    ? "bg-[#1e1e1e] text-[#ffffff] border-t-2 border-t-[#007acc]"
                    : "bg-[#2d2d2d] text-[#cccccc] hover:bg-[#1e1e1e]"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate text-xs lg:text-sm">{tab.name}</span>
                {tab.modified && (
                  <div className="w-2 h-2 bg-[#cccccc] rounded-full flex-shrink-0" />
                )}
                <div
                  className="ml-auto opacity-0 group-hover:opacity-100 hover:bg-[#3c3c3c] p-1 rounded cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <X className="w-3 h-3" />
                </div>
              </button>
            );
          })}
          <div className="flex-1 bg-[#2d2d2d]"></div>
        </div>
      </div>

      {/* Mobile Tab Bar (below main navbar) */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-[#1e1e1e] border-b border-[#2d2d2d] md:hidden">
        <div className="flex overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.href, tab.id)}
                className={`flex items-center gap-1.5 px-2.5 py-2 text-xs whitespace-nowrap transition-colors min-w-[80px] flex-shrink-0 ${
                  isActive
                    ? "bg-[#1e1e1e] text-[#ffffff] border-b-2 border-b-[#007acc]"
                    : "bg-[#2d2d2d] text-[#cccccc]"
                }`}
              >
                <Icon className="w-3 h-3 flex-shrink-0" />
                <span className="truncate text-[10px]">{tab.name}</span>
                {tab.modified && (
                  <div className="w-1.5 h-1.5 bg-[#cccccc] rounded-full flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sidebar (File Explorer) */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: isSidebarOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-16 md:top-16 left-0 w-64 md:w-70 h-[calc(100vh-4rem)] md:h-full bg-[#252526] border-r border-[#2d2d2d] z-40 overflow-y-auto"
      >
        <div className="p-3">
          <div className="flex items-center gap-2 mb-4 text-[#cccccc] text-sm font-medium">
            <Folder className="w-4 h-4" />
            <span>PORTFOLIO</span>
          </div>

          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded transition-colors ${
                    isActive
                      ? "bg-[#37373d] text-[#ffffff]"
                      : "text-[#cccccc] hover:bg-[#2a2d2e]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#2d2d2d]">
            <div className="text-[#cccccc] text-xs font-medium mb-2">
              QUICK ACTIONS
            </div>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToContact}
                className="w-full justify-start text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white text-xs h-7"
              >
                <Mail className="mr-2 h-3 w-3" />
                Send Message
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={downloadResume}
                className="w-full justify-start text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white text-xs h-7"
              >
                <Download className="mr-2 h-3 w-3" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-35 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};
