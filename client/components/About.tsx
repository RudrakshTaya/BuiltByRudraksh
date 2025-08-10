import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Target, TrendingUp, GraduationCap, BookOpen, Award, Brain, Database, Cpu } from "lucide-react";
import { personalInfo, skills, stats, academicHighlights } from '../data/portfolioData';


const SkillBar = ({ skill, index, delay = 0 }: { skill: typeof skills.programming[0]; index: number; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay + index * 0.1, duration: 0.5 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${skill.color} rounded-full flex-shrink-0`} />
          <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
          <span className="text-xs text-muted-foreground bg-gray-800/50 px-2 py-1 rounded hidden md:inline">
            {skill.category}
          </span>
        </div>
        <span className="text-muted-foreground text-sm font-mono self-start md:self-auto">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-2.5 mb-3">
        <motion.div
          className={`h-2.5 rounded-full ${skill.color} relative overflow-hidden`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: delay + index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ stat, index }: { stat: typeof stats.about[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass p-6 rounded-2xl text-center group hover:border-white/20 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 ${stat.bgColor}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
      
      <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
      </div>
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-white mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.5, type: "spring" }}
      >
        {stat.value}
      </motion.h3>
      <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
    </motion.div>
  );
};

const AcademicCard = ({ highlight, index }: { highlight: typeof academicHighlights[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`glass p-6 rounded-xl border transition-all duration-300 ${highlight.color} hover:border-opacity-50`}
    >
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="text-2xl md:text-3xl self-center md:self-start">{highlight.icon}</div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-base md:text-lg font-bold text-white mb-2">{highlight.title}</h4>
          <p className="text-muted-foreground text-xs md:text-sm mb-3 leading-relaxed">{highlight.detail}</p>
          <div className="flex flex-wrap gap-2">
            {highlight.technologies.map((tech) => (
              <span 
                key={tech}
                className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const About = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-20 right-20 w-48 h-48 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-4 md:p-8 rounded-2xl mb-12 md:mb-16 max-w-5xl mx-auto border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan rounded-xl flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <Brain className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                <span>{personalInfo.title} & CS Student</span>
                <span className="text-xs md:text-sm bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full border border-neon-blue/30 self-center md:self-auto">
                  {personalInfo.university.name}
                </span>
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4">
                {personalInfo.bio.short}
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio.detailed}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.about.map((stat, index) => {
            const iconMap: { [key: string]: any } = {
              'Code2': Code2,
              'Zap': Zap,
              'Target': Target,
              'GraduationCap': GraduationCap
            };
            const IconComponent = iconMap[stat.icon];
            const statWithIcon = { ...stat, icon: IconComponent };
            return (
              <StatCard key={stat.label} stat={statWithIcon} index={index} />
            );
          })}
        </div>

        {/* Skills Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-4 md:p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-5 w-5 md:h-6 md:w-6 text-neon-purple" />
              <h3 className="text-lg md:text-xl font-bold text-white">Programming Languages</h3>
            </div>
            {skills.programming.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} delay={0.2} />
            ))}
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-4 md:p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-5 w-5 md:h-6 md:w-6 text-neon-blue" />
              <h3 className="text-lg md:text-xl font-bold text-white">Web Technologies</h3>
            </div>
            {skills.webTech.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} delay={0.4} />
            ))}
          </motion.div>

          {/* CS Fundamentals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-4 md:p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-5 w-5 md:h-6 md:w-6 text-neon-cyan" />
              <h3 className="text-lg md:text-xl font-bold text-white">CS Fundamentals</h3>
            </div>
            {skills.csFundamentals.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} delay={0.6} />
            ))}
          </motion.div>
        </div>

        {/* Academic Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <Award className="h-6 w-6 md:h-8 md:w-8 text-neon-green" />
            <span>Academic Strengths & CS Knowledge</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicHighlights.map((highlight, index) => (
              <AcademicCard key={highlight.title} highlight={highlight} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass p-4 md:p-8 rounded-2xl border border-neon-blue/30 hover:border-neon-blue/50 transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-4">
              <Cpu className="h-6 w-6 md:h-8 md:w-8 text-neon-blue" />
              <h3 className="text-lg md:text-2xl font-bold text-white text-center">Ready for Software Engineering Challenges</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm md:text-lg">
              With strong foundations in computer science theory and hands-on experience in full-stack development,
              I'm prepared to tackle complex software engineering problems. From optimizing algorithms to building
              scalable web applications, I bring both academic rigor and practical skills to every project.
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('cs-strengths')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 mr-4"
            >
              Explore CS Skills
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
