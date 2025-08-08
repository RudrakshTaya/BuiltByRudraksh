import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play, Filter, Star, GitFork, Eye, ChevronLeft, ChevronRight, X, Maximize2, Code2, Database, Globe, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { projects } from '../data/portfolioData';


const categories = ["All", "Full Stack", "Backend", "Java/C++", "Python/CLI"];
const types = ["All", "Major", "Minor"];
const complexities = ["All", "High", "Medium", "Low"];

const ImageCarousel = ({ images, projectTitle }: { images: string[]; projectTitle: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative overflow-hidden group/carousel">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </>
        )}

        {/* Always Visible Preview Button */}
        <motion.button
          onClick={openModal}
          className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-neon transition-all hover:scale-110"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          title="View Image Gallery"
        >
          <Maximize2 className="h-5 w-5" />
        </motion.button>

        {/* Always Visible Image Count */}
        {/* {images.length > 1 && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-black/80 to-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium border border-white/20">
            📸 {currentIndex + 1}/{images.length}
          </div>
        )} */}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Enhanced Bottom Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-center border border-white/20">
                <div className="text-sm font-semibold">{projectTitle}</div>
                <div className="text-xs text-gray-300 mt-1">
                  📸 Image {currentIndex + 1} of {images.length}
                </div>
              </div>

              {/* Navigation Hint */}
              {images.length > 1 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm text-center border border-white/20 opacity-0 animate-pulse">
                    ← → Use arrow keys or click arrows to navigate
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Full Stack": return Globe;
    case "Backend": return Database;
    case "Java/C++": return Code2;
    case "Python/CLI": return Terminal;
    default: return Code2;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Full Stack": return "text-neon-blue border-neon-blue bg-neon-blue/10";
    case "Backend": return "text-neon-green border-neon-green bg-neon-green/10";
    case "Java/C++": return "text-neon-purple border-neon-purple bg-neon-purple/10";
    case "Python/CLI": return "text-neon-cyan border-neon-cyan bg-neon-cyan/10";
    default: return "text-neon-blue border-neon-blue bg-neon-blue/10";
  }
};

const ProjectDetailModal = ({ project, isOpen, onClose }: {
  project: typeof projects[0];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const CategoryIcon = getCategoryIcon(project.category);
  const categoryColors = getCategoryColor(project.category);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl w-[90vw] max-w-7xl h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-10 p-10">
            {/* Left Column - Images and Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover"
                />

                {/* Image Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>

              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-neon-blue'
                          : 'border-transparent hover:border-white/30'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="w-full h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Actions */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white border-0"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.category === "Python/CLI" ? "View on PyPI" : "Live Demo"}
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  asChild
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="space-y-6">
              {/* Project Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${categoryColors}`}>
                    <CategoryIcon className="h-4 w-4" />
                    {project.category}
                  </div>
                  <div className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </div>
                  {project.featured && (
                    <div className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-white mb-3">{project.title}</h1>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">{project.stats.stars}</span>
                  </div>
                  <div className="text-xs text-gray-400">Stars</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GitFork className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold">{project.stats.forks}</span>
                  </div>
                  <div className="text-xs text-gray-400">Forks</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-semibold">{project.stats.views}</span>
                  </div>
                  <div className="text-xs text-gray-400">Views</div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                {/* Programming Languages */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-neon-cyan/10 text-neon-cyan px-3 py-1 rounded-lg border border-neon-cyan/20 font-mono"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800/70 text-gray-300 px-3 py-1 rounded-lg hover:bg-neon-blue/20 hover:text-neon-blue transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="text-white font-medium">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Complexity</div>
                    <div className={`font-medium ${
                      project.complexity === "High" ? "text-red-400" :
                      project.complexity === "Medium" ? "text-yellow-400" :
                      "text-green-400"
                    }`}>
                      {project.complexity}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const CategoryIcon = getCategoryIcon(project.category);
  const categoryColors = getCategoryColor(project.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative hover-lift"
      style={{ perspective: "1000px" }}
    >
      <div className={`glass rounded-3xl overflow-hidden border transition-all duration-500 card-hover group-hover:shadow-premium ${
        project.featured
          ? 'border-neon-blue/50 hover:border-neon-blue bg-gradient-to-br from-neon-blue/8 via-neon-purple/4 to-transparent hover:shadow-glow-lg'
          : 'border-white/15 hover:border-white/30 hover:shadow-glass'
      }`}>
        {/* Project Image Carousel */}
        <div className="relative">
          <ImageCarousel images={project.images} projectTitle={project.title} />
          
          {/* Preview Overlay */}
         

          {/* Enhanced Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors}`}>
                <CategoryIcon className="h-3 w-3" />
                {project.category}
              </div>
              {/* <div className="bg-gray-900/80 text-gray-300 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-gray-600/50">
                {project.type}
              </div> */}
              {/* Preview Available Badge */}
              {/* {project.images.length > 1 && (
                <div className="bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-neon-cyan/30">
                  🖼️ {project.images.length} Images
                </div>
              )} */}
            </div>
            <div className="flex flex-col gap-2 items-end">
              {/* {project.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold"
                >
                  ⭐ Featured
                </motion.div>
              )} */}
              {/* Preview Available Indicator */}
              {/* <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-purple px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-neon-purple/30"
              >
                👁️ Preview Available
              </motion.div> */}
            </div>
          </div>

          {/* Project Stats */}
          <div className="absolute bottom-4 left-4 flex gap-2 text-white text-xs">
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-1 backdrop-blur-sm border border-white/10"
            >
              <Star className="h-3 w-3 text-yellow-400" />
              {project.stats.stars}
            </motion.div> */}
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-1 backdrop-blur-sm border border-white/10"
            >
              <GitFork className="h-3 w-3 text-blue-400" />
              {project.stats.forks}
            </motion.div> */}
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 bg-black/60 rounded-full px-2 py-1 backdrop-blur-sm border border-white/10"
            >
              <Eye className="h-3 w-3 text-green-400" />
              {project.stats.views}
            </motion.div> */}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors flex-1">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 ml-4">
              <span className={`text-xs px-2 py-1 rounded-full border ${
                project.complexity === "High" ? "text-red-400 border-red-400/30 bg-red-400/10" :
                project.complexity === "Medium" ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/10" :
                "text-green-400 border-green-400/30 bg-green-400/10"
              }`}>
                {project.complexity}
              </span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Programming Languages */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-neon-cyan mb-2">Languages:</h4>
            <div className="flex flex-wrap gap-1">
              {project.languages.map((lang) => (
                <span 
                  key={lang}
                  className="bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded text-xs border border-neon-cyan/20 font-mono"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-white mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {project.highlights.slice(0, 2).map((highlight) => (
                <motion.span
                  key={highlight}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 text-gray-300 px-2 py-1 rounded text-xs border border-white/10 hover:border-white/20 transition-all"
                >
                  {highlight}
                </motion.span>
              ))}
              {project.highlights.length > 2 && (
                <span className="bg-gray-800/50 text-gray-400 px-2 py-1 rounded text-xs">
                  +{project.highlights.length - 2} more
                </span>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/70 text-gray-300 px-2 py-1 rounded text-xs hover:bg-neon-blue/20 hover:text-neon-blue transition-all cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Project Info */}
          <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
            <span>Duration: {project.duration}</span>
            <span>Complexity: {project.complexity}</span>
          </div>

          {/* Preview Actions */}
          <div className="space-y-3">
            {/* Primary Preview Actions */}
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setShowDetailModal(true)}
                className="flex-1 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-cyan text-white border-0 font-medium"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Details & Gallery
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  // Find the image carousel and trigger its modal
                  const img = document.querySelector(`[alt*="${project.title}"]`) as HTMLElement;
                  if (img) {
                    const maximizeBtn = img.parentElement?.querySelector('[title="View Image Gallery"]') as HTMLElement;
                    maximizeBtn?.click();
                  }
                }}
                className="bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-cyan text-white border-0"
                title="Quick Image Preview"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Secondary Actions */}
            <div className="flex gap-2">
              {project.liveUrl ? (
                <Button
                  size="sm"
                  asChild
                  className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white border-0"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {project.category === "Python/CLI" ? "PyPI" : "Live Demo"}
                  </a>
                </Button>
              ) : (
                <Button
                  size="sm"
                  disabled
                  className="flex-1 bg-gray-700 text-gray-400 border-0 cursor-not-allowed"
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Console App
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={project}
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
      />
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedComplexity, setSelectedComplexity] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const typeMatch = selectedType === "All" || project.type === selectedType;
    const complexityMatch = selectedComplexity === "All" || project.complexity === selectedComplexity;
    return categoryMatch && typeMatch && complexityMatch;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-neon-green/15 to-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-neon-pink/15 to-neon-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-neon-blue/5 via-transparent to-neon-purple/5 rounded-full blur-3xl animate-tilt" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold gradient-text mb-6">Project Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            A comprehensive showcase spanning <span className="text-neon-blue font-semibold">full-stack web applications</span>, 
            <span className="text-neon-purple font-semibold"> backend systems</span>, 
            <span className="text-neon-green font-semibold"> Java/C++ projects</span>, and 
            <span className="text-neon-cyan font-semibold"> Python CLI tools</span>. 
            Each project demonstrates different aspects of software engineering and computer science fundamentals.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="lg:hidden border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters & Categories
            </Button>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-white mb-2 lg:mb-0 lg:mr-2 flex items-center">
                    Category:
                  </span>
                  {categories.map((category) => {
                    const Icon = getCategoryIcon(category);
                    return (
                      <Button
                        key={category}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`transition-all duration-300 flex items-center gap-2 ${
                          selectedCategory === category
                            ? "bg-blue-600/80 text-white border-blue-500/60 shadow-lg"
                            : "glass text-gray-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-500/10"
                        }`}
                      >
                        <Icon className="h-3 w-3" />
                        {category}
                      </Button>
                    );
                  })}
                </div>

                {/* Type Filter */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-white mb-2 lg:mb-0 lg:mr-2 flex items-center">
                    Type:
                  </span>
                  {types.map((type) => (
                    <Button
                      key={type}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className={`transition-all duration-300 ${
                        selectedType === type
                          ? "bg-purple-600/80 text-white border-purple-500/60 shadow-lg"
                          : "glass text-gray-300 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10"
                      }`}
                    >
                      {type}
                    </Button>
                  ))}
                </div>

                {/* Complexity Filter */}
                {/* <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-white mb-2 lg:mb-0 lg:mr-2 flex items-center">
                    Level:
                  </span>
                  {complexities.map((complexity) => (
                    <Button
                      key={complexity}
                      size="sm"
                      onClick={() => setSelectedComplexity(complexity)}
                      className={`transition-all duration-300 ${
                        selectedComplexity === complexity
                          ? "bg-cyan-600/80 text-white border-cyan-500/60 shadow-lg"
                          : "glass text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10"
                      }`}
                    >
                      {complexity}
                    </Button>
                  ))}
                </div> */}
              </div>
            </div>

            <div className="text-muted-foreground text-sm bg-gray-800/50 px-4 py-2 rounded-lg border border-white/10">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            >
              ⭐ Featured Projects
              <span className="text-sm bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full border border-neon-blue/30">
                Best Work
              </span>
            </motion.h3>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <AnimatePresence mode="wait">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              More Projects
            </motion.h3>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="glass p-8 rounded-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to see more projects.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedType("All");
                  setSelectedComplexity("All");
                }}
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white"
              >
                Reset Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto border border-neon-blue/30">
            <h3 className="text-2xl font-bold text-white mb-4">Full-Stack + CS Fundamentals = Complete Engineer</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              These projects showcase my ability to work across the entire technology stack while applying 
              strong computer science principles. From algorithms and data structures to scalable web applications, 
              I bring both theoretical knowledge and practical implementation skills to every challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('cs-strengths')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
              >
                Explore CS Skills
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://github.com/rudraksh', '_blank')}
                className="glass border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Github className="h-4 w-4 mr-2 inline" />
                View All on GitHub
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
