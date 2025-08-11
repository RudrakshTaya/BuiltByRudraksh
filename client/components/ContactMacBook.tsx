import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Terminal,
  Code2,
  User,
  MessageSquare,
  Copy,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { contactInfo } from "../data/portfolioData";

// Mobile Contact Card Design
const MobileContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Contact Info Cards */}
      <motion.div
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-4 border border-gray-700 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-400" />
          Contact Information
        </h3>

        <div className="space-y-3">
          {contactInfo.map((info, index) => {
            const IconComponent =
              info.icon === "Mail"
                ? Mail
                : info.icon === "Phone"
                  ? Phone
                  : MapPin;
            const colors = {
              Mail: "text-blue-400 bg-blue-600/20 border-blue-500/30",
              Phone: "text-green-400 bg-green-600/20 border-green-500/30",
              MapPin: "text-purple-400 bg-purple-600/20 border-purple-500/30",
            };
            const colorClass =
              colors[info.icon as keyof typeof colors] || colors.Mail;

            return (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <div className={`p-2 rounded-lg border ${colorClass}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-400 text-xs">{info.label}</div>
                  <div className="text-white text-sm font-medium truncate">
                    {info.value}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(info.value, info.icon)}
                  className="p-2 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  {copiedField === info.icon ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-4 border border-gray-700 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-green-400" />
          Send Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:border-blue-400 focus:outline-none transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:border-blue-400 focus:outline-none transition-colors"
              placeholder="your.email@domain.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:border-blue-400 focus:outline-none resize-none transition-colors"
              placeholder="Your message here..."
              required
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setFormData({ name: "", email: "", message: "" })}
              className="border-gray-600 text-gray-400 hover:bg-gray-800"
            >
              Clear
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Button
          onClick={() => {
            const email = contactInfo.find(
              (info) => info.icon === "Mail",
            )?.value;
            if (email) window.open(`mailto:${email}`, "_blank");
          }}
          variant="outline"
          className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
        >
          <Mail className="mr-2 h-4 w-4" />
          Email Me
        </Button>
        <Button
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          variant="outline"
          className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Portfolio
        </Button>
      </motion.div>
    </div>
  );
};

// Desktop MacBook Design - Simplified
const DesktopContactMacBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* MacBook Screen */}
      <div className="relative bg-gray-800 rounded-2xl border-3 border-gray-700 shadow-2xl overflow-hidden">
        {/* Camera */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse"></div>

        {/* Screen content */}
        <div className="relative z-10 p-4">
          {/* Menu Bar */}
          <div className="flex items-center justify-between mb-3 px-3 py-2 bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/50">
            <div className="flex items-center gap-2">
              <div className="text-white text-sm font-medium">
                Contact Interface
              </div>
            </div>
            <div className="text-gray-400 text-xs">Ready to connect</div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-4 h-[350px]">
            {/* Terminal */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono">
                    Terminal
                  </span>
                </div>
                <Terminal className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex-1 p-3 font-mono text-xs">
                <div className="text-gray-400 mb-2">~/contact</div>
                <div className="space-y-1">
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">whoami</span>
                  </div>
                  <div className="text-cyan-400 pl-2">rudraksh-taya</div>
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">pwd</span>
                  </div>
                  <div className="text-gray-300 pl-2">
                    /home/rudraksh/portfolio/contact
                  </div>
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">ls -la</span>
                  </div>
                  <div className="text-gray-300 pl-2">drwxr-xr-x email.txt</div>
                  <div className="text-gray-300 pl-2">drwxr-xr-x phone.txt</div>
                  <div className="text-gray-300 pl-2">
                    drwxr-xr-x location.txt
                  </div>
                  <div>
                    <span className="text-green-400">$ </span>
                    <span className="text-white">echo "Ready to connect!"</span>
                  </div>
                  <div className="text-cyan-400 pl-2">Ready to connect!</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono">
                    contact.form
                  </span>
                </div>
                <MessageSquare className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex-1 p-3 overflow-auto">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-cyan-400 text-xs font-mono flex items-center gap-1 mb-1">
                      <User className="w-3 h-3" />
                      const name =
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      placeholder='"Your Name"'
                      required
                    />
                  </div>
                  <div>
                    <label className="text-cyan-400 text-xs font-mono flex items-center gap-1 mb-1">
                      <Mail className="w-3 h-3" />
                      const email =
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none"
                      placeholder='"your.email@domain.com"'
                      required
                    />
                  </div>
                  <div>
                    <label className="text-cyan-400 text-xs font-mono flex items-center gap-1 mb-1">
                      <MessageSquare className="w-3 h-3" />
                      const message =
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white font-mono text-xs focus:border-cyan-400 focus:outline-none resize-none"
                      placeholder='"Your message here..."'
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:opacity-90 font-mono text-xs h-7"
                    >
                      <Send className="mr-1 h-3 w-3" />
                      submit()
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setFormData({ name: "", email: "", message: "" })
                      }
                      className="border-gray-600 text-gray-400 hover:bg-gray-800 font-mono text-xs h-7"
                    >
                      clear()
                    </Button>
                  </div>
                </form>

                {/* Contact info display */}
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <div className="text-gray-400 text-xs font-mono mb-2">
                    // Contact Information
                  </div>
                  <div className="space-y-1 font-mono text-xs">
                    {contactInfo.map((info, index) => {
                      const IconComponent =
                        info.icon === "Mail"
                          ? Mail
                          : info.icon === "Phone"
                            ? Phone
                            : MapPin;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <IconComponent className="w-3 h-3 text-cyan-400" />
                          <span className="text-cyan-400">{info.label}:</span>
                          <span>"{info.value}"</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Base */}
      <div className="relative h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl mx-4 shadow-xl flex items-center justify-center">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>

        {/* Contact Action Keys */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const email = contactInfo.find(
                (info) => info.icon === "Mail",
              )?.value;
              if (email) navigator.clipboard.writeText(email);
            }}
            className="w-6 h-6 bg-gradient-to-b from-blue-200 to-blue-300 rounded border border-blue-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Mail className="w-3 h-3 text-blue-700" />
          </button>
          <button
            onClick={() => {
              const phone = contactInfo.find(
                (info) => info.icon === "Phone",
              )?.value;
              if (phone) navigator.clipboard.writeText(phone);
            }}
            className="w-6 h-6 bg-gradient-to-b from-green-200 to-green-300 rounded border border-green-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Phone className="w-3 h-3 text-green-700" />
          </button>
          <button
            onClick={() => {
              const location = contactInfo.find(
                (info) => info.icon === "MapPin",
              )?.value;
              if (location)
                window.open(
                  `https://maps.google.com/?q=${encodeURIComponent(location)}`,
                  "_blank",
                );
            }}
            className="w-6 h-6 bg-gradient-to-b from-purple-200 to-purple-300 rounded border border-purple-400/30 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
          >
            <MapPin className="w-3 h-3 text-purple-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ContactMacBook = () => {
  return (
    <div className="relative py-8 sm:py-12">
      {/* Mobile View - Clean Cards */}
      <div className="block lg:hidden px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's connect and build something amazing together
          </p>
        </motion.div>
        <MobileContactCard />
      </div>

      {/* Desktop View - MacBook Design */}
      <div className="hidden lg:block px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Contact Interface
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional contact interface in a developer workspace
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <DesktopContactMacBook />
        </motion.div>
      </div>
    </div>
  );
};
