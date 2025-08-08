import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, Star, Medal, Target } from "lucide-react";
import { certifications, achievements } from '../data/portfolioData';

// Icon mapping for achievements
const iconMap: Record<string, React.ComponentType<any>> = {
  Trophy,
  Star,
  CheckCircle,
  Medal,
  Target,
  Award
};

const CertificationCard = ({ cert, index }: { cert: (typeof certifications)[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional": return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      case "Associate": return "bg-gradient-to-r from-purple-500 to-purple-600 text-white";
      case "Fundamentals": return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      default: return "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative w-full h-80"
      style={{ perspective: "1000px" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 glass rounded-3xl overflow-hidden border border-white/20 shadow-premium"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <Award className="w-16 h-16 text-blue-400" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute top-4 right-4">
              <span className={`${getLevelColor(cert.level)} px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm`}>
                {cert.level}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-bold text-lg mb-1">{cert.issuer}</div>
              <div className="text-blue-300 text-sm">{cert.type} Certification</div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
            <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
              <Calendar className="h-4 w-4" />
              {cert.date}
            </div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm">
              <Award className="h-4 w-4" />
              <span>Hover to view details</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 glass rounded-3xl p-6 border border-white/20 shadow-premium flex flex-col justify-between bg-gradient-to-br from-gray-900/95 to-gray-800/95"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{cert.title}</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">Skills Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-xs font-medium border border-blue-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <span className="font-semibold text-white">Credential ID:</span> {cert.credentialId}
              </div>
              <div>
                <span className="font-semibold text-white">Category:</span> {cert.type}
              </div>
              <div>
                <span className="font-semibold text-white">Level:</span> {cert.level}
              </div>
            </div>
          </div>
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-glow-lg hover:scale-105"
          >
            <ExternalLink className="h-5 w-5" />
            Verify Credential
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: (typeof achievements)[0]; index: number }) => {
  const Icon = iconMap[achievement.icon as string] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="flex items-start gap-4 glass p-6 rounded-xl hover:border-neon-blue/50 transition-all duration-300 group"
    >
      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-6 w-6 text-black" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors">
            {achievement.title}
          </h3>
          <span className="text-xs text-muted-foreground bg-gray-800/50 px-2 py-1 rounded">
            {achievement.category}
          </span>
        </div>
        <p className="text-muted-foreground mb-2">{achievement.description}</p>
        <div className="flex items-center gap-2 text-sm text-neon-cyan">
          <Calendar className="h-4 w-4" />
          {achievement.date}
        </div>
      </div>
    </motion.div>
  );
};

export const Certifications = () => {
  const [filter, setFilter] = useState<string>("All");
  const types = ["All", "Cloud", "Development", "Database", "Programming"];

  const filteredCertifications = filter === "All" 
    ? certifications 
    : certifications.filter(cert => cert.type === filter);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-transparent to-purple-500/5 rounded-full blur-3xl animate-tilt" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and notable achievements that validate my technical expertise and commitment to continuous learning.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Certifications Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === type
                    ? "bg-blue-600/80 text-white border-blue-500/60 shadow-lg"
                    : "glass text-gray-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10"
                }`}
              >
                {type}
              </button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Notable Achievements</h3>
          <div className="space-y-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto border border-neon-blue/30">
            <Award className="h-12 w-12 text-neon-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Committed to Excellence</h3>
            <p className="text-muted-foreground mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my dedication to professional growth and technical excellence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
            >
              Let's Discuss Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
