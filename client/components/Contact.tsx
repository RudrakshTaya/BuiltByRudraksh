import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { contactInfo } from "@/data/portfolioData";
import { ContactMacBook } from "./ContactMacBook";
export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
    }
  };

  

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          <motion.p
            className="text-sm text-neon-cyan/80 max-w-xl mx-auto italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            "Every great project starts with a conversation. Let's make yours extraordinary."
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
        </motion.div>

        {/* MacBook-style Contact Interface */}
        <ContactMacBook />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and exciting projects.
                Whether you're a company looking to hire or have a project in mind,
                I'd love to hear from you.
              </p>
              <div className="border-l-4 border-neon-purple/30 pl-4 mb-6">
                <p className="text-white/90 italic text-sm leading-relaxed">
                  "I believe in the power of collaboration and innovation. Together, we can turn challenges into opportunities and ideas into impactful solutions."
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue">
                  Open to Opportunities
                </span>
                <span className="px-3 py-1 text-xs bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green">
                  Collaborative Mindset
                </span>
                <span className="px-3 py-1 text-xs bg-neon-purple/10 border border-neon-purple/30 rounded-full text-neon-purple">
                  Innovation Focused
                </span>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const iconMap: { [key: string]: any } = {
                  'Mail': Mail,
                  'Phone': Phone,
                  'MapPin': MapPin
                };
                const IconComponent = iconMap[info.icon] || Mail;

                return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 glass p-6 rounded-xl hover:border-neon-blue/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              );
              })}
            </div>

            {/* Animated Background Pattern */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="tech-grid w-full h-32 opacity-20 rounded-xl" />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </motion.div>
                ) : isSubmitted ? (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>

            {/* Success Animation */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
