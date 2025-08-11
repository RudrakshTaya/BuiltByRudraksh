import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Terminal,
  Code2,
  User,
  MessageSquare
} from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../data/portfolioData';

// Contact terminal component
const ContactTerminal = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([
    '~/contact $ whoami',
    'rudraksh-taya',
    '~/contact $ pwd',
    '/home/rudraksh/portfolio/contact',
    '~/contact $ ls -la',
    'total 3',
    'drwxr-xr-x email.txt',
    'drwxr-xr-x phone.txt', 
    'drwxr-xr-x location.txt',
    '~/contact $ echo "Ready to connect!"',
    'Ready to connect!',
    '~/contact $ _'
  ]);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm font-mono ml-1 sm:ml-2">Terminal</span>
        </div>
        <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>

      {/* Terminal content */}
      <div className="flex-1 p-2 sm:p-4 font-mono text-xs sm:text-sm overflow-auto">
        <div className="space-y-1">
          {history.map((line, index) => (
            <div key={index} className={
              line.startsWith('~/contact $') ? 'text-green-400' :
              line.includes('rudraksh') || line.includes('Ready') ? 'text-cyan-400' :
              'text-gray-300'
            }>
              {line}
            </div>
          ))}
          <motion.span
            className="text-cyan-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </div>
      </div>
    </div>
  );
};

// Contact form component styled like VS Code
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-full flex flex-col shadow-xl">
      {/* VS Code header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm font-mono ml-1 sm:ml-2">contact.form</span>
        </div>
        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
      </div>

      {/* Form content */}
      <div className="flex-1 p-3 sm:p-6 overflow-auto">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <label className="text-cyan-400 text-sm font-mono flex items-center gap-2">
              <User className="w-4 h-4" />
              const name =
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
              placeholder='"Your Name"'
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-cyan-400 text-sm font-mono flex items-center gap-2">
              <Mail className="w-4 h-4" />
              const email =
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
              placeholder='"your.email@domain.com"'
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-cyan-400 text-sm font-mono flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              const message =
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none resize-none"
              placeholder='"Your message here..."'
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:opacity-90 font-mono"
          >
            <Send className="mr-2 h-4 w-4" />
            submit()
          </Button>
        </form>

        {/* Contact info display */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="text-gray-400 text-xs font-mono mb-3">// Contact Information</div>
          <div className="space-y-2 font-mono text-xs sm:text-sm">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon === 'Mail' ? Mail : 
                                 info.icon === 'Phone' ? Phone : MapPin;
              return (
                <div key={index} className="flex items-center gap-2 text-gray-300">
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
  );
};

export const ContactMacBook = () => {
  return (
    <div className="relative py-8 sm:py-12">
      {/* MacBook Frame */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto px-4"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* MacBook Screen */}
        <div className="relative bg-black rounded-2xl sm:rounded-3xl border-3 sm:border-6 border-gray-800 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-xl sm:rounded-2xl border border-gray-700"></div>
          
          {/* Screen content */}
          <div className="relative z-10 p-2 sm:p-4 min-h-[300px] sm:min-h-[500px]">
            {/* macOS Menu Bar */}
            <div className="flex items-center justify-between mb-2 sm:mb-4 px-2 py-1 bg-gray-800/60 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-white text-xs sm:text-sm font-medium">
                  Contact Interface
                </div>
              </div>
              <div className="text-gray-400 text-xs">
                Ready to connect
              </div>
            </div>

            {/* Split screen layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 h-[250px] sm:h-[450px]">
              {/* Terminal Side */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <ContactTerminal />
              </motion.div>
              
              {/* Contact Form Side */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>

        {/* MacBook Base - Smaller for this section */}
        <div className="relative">
          <div className="h-2 sm:h-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-b-[1.5rem] sm:rounded-b-[2rem] mx-4 sm:mx-8 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
          <div className="h-1 sm:h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-xl mx-8 sm:mx-16 shadow-lg opacity-60"></div>
        </div>
      </motion.div>
    </div>
  );
};
