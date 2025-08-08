import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Frontend Developer Intern",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "Jun 2024 - Present",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components. Improved page load times by 40% through code optimization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Git"],
    achievements: [
      "Reduced page load time by 40%",
      "Built 15+ reusable components",
      "Mentored 2 junior developers"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    period: "2021 - 2025",
    description: "Focused on Software Engineering and Data Structures. Relevant coursework includes Algorithms, Web Development, Database Systems, and Computer Networks.",
    tech: ["Java", "Python", "C++", "SQL"],
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List (3 semesters)",
      "CS Club President"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "Jan 2024 - May 2024",
    description: "Built end-to-end web applications using MERN stack. Implemented RESTful APIs and integrated third-party services. Worked in an agile environment with weekly sprints.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    achievements: [
      "Delivered 3 major features",
      "Increased user engagement by 25%",
      "Zero critical bugs in production"
    ]
  },
  {
    id: 4,
    type: "education",
    title: "Google Developer Certification",
    company: "Google",
    location: "Online",
    period: "Dec 2023",
    description: "Completed comprehensive certification in modern web development practices, covering Progressive Web Apps, performance optimization, and accessibility.",
    tech: ["PWA", "Service Workers", "Web APIs", "Performance"],
    achievements: [
      "Score: 95%",
      "Top 10% of cohort",
      "Completed in 2 months"
    ]
  }
];

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const isWork = experience.type === "work";
  const Icon = isWork ? Briefcase : GraduationCap;
  const iconColor = isWork ? "bg-neon-blue" : "bg-neon-purple";
  const borderColor = isWork ? "border-neon-blue" : "border-neon-purple";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className={`glass p-6 rounded-2xl border ${borderColor}/30 hover:border-${isWork ? 'neon-blue' : 'neon-purple'}/50 transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
              <div className="flex items-center gap-2 text-neon-blue font-medium mb-2">
                <span>{experience.company}</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + i * 0.05, duration: 0.2 }}
                className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Icon */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.3, type: "spring" }}
          className={`w-16 h-16 ${iconColor} rounded-full flex items-center justify-center z-10 relative`}
        >
          <Icon className="h-8 w-8 text-black" />
        </motion.div>
        
        {/* Connecting Line */}
        {index < experiences.length - 1 && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-gray-600 to-transparent" />
        )}
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through education and professional experience, building skills and creating impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-16">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto border border-neon-blue/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for the Next Challenge</h3>
            <p className="text-muted-foreground mb-6">
              I'm actively seeking internship and full-time opportunities where I can contribute 
              to innovative projects and continue growing as a developer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
            >
              View My Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
