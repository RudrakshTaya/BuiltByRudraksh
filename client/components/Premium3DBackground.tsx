import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Floating CS Terms Component
export const FloatingCSTerms = () => {
  const [terms, setTerms] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
    speed: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const csTerms = [
      'Algorithm', 'Data Structure', 'Binary Tree', 'Hash Table', 'Graph',
      'Machine Learning', 'Neural Network', 'API', 'Database', 'Frontend',
      'Backend', 'Full Stack', 'React', 'TypeScript', 'Node.js',
      'Recursion', 'Dynamic Programming', 'Big O', 'Optimization', 'Cache',
      'Microservices', 'Cloud Computing', 'DevOps', 'CI/CD', 'Docker',
      'Kubernetes', 'AWS', 'Git', 'Agile', 'Scrum',
      'Authentication', 'Security', 'Encryption', 'Blockchain', 'AI',
      'Deep Learning', 'TensorFlow', 'PyTorch', 'JavaScript', 'Python',
      'Java', 'C++', 'SQL', 'NoSQL', 'MongoDB',
      'Redis', 'Nginx', 'Apache', 'Linux', 'Unix'
    ];

    const floatingTerms = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      text: csTerms[Math.floor(Math.random() * csTerms.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 400 - 200,
      size: 12 + Math.random() * 8,
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 6)],
      speed: 30 + Math.random() * 40,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setTerms(floatingTerms);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40" style={{ perspective: '1800px' }}>
      {terms.map((term) => (
        <motion.div
          key={term.id}
          className="absolute font-mono font-bold pointer-events-none select-none"
          style={{
            left: `${term.x}%`,
            top: `${term.y}%`,
            transform: `translateZ(${term.z}px)`,
            fontSize: `${term.size}px`,
            color: term.color,
            opacity: term.opacity,
            textShadow: `0 0 10px ${term.color}40`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotateX: [0, 360],
            rotateY: [0, 180],
            opacity: [term.opacity, term.opacity * 1.5, term.opacity],
          }}
          transition={{
            duration: term.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        >
          {term.text}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Code Rain Effect
export const EnhancedCodeRain = () => {
  const [codeLines, setCodeLines] = useState<Array<{
    id: number;
    x: number;
    code: string;
    speed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const codeSnippets = [
      'function solve(problem) {',
      '  return innovation;',
      '}',
      'const passion = true;',
      'while(learning) {',
      '  skills++;',
      '  knowledge.expand();',
      '}',
      'class Developer {',
      '  constructor() {',
      '    this.creativity = Infinity;',
      '  }',
      '}',
      'async function buildFuture() {',
      '  await dedication();',
      '  return success;',
      '}',
      'const experience = years.map(learn);',
      'if(challenge) overcome();',
      'console.log("Hello World!");',
      'npm install excellence',
      'git commit -m "Another step forward"',
      'docker run innovation',
      'kubectl apply -f dreams.yaml',
      'SELECT * FROM opportunities;',
      'INSERT INTO future VALUES(hope);'
    ];

    const lines = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: (i * 6.67),
      code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      speed: 15 + Math.random() * 10,
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][Math.floor(Math.random() * 4)],
    }));
    setCodeLines(lines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {codeLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute font-mono text-sm whitespace-nowrap"
          style={{
            left: `${line.x}%`,
            color: line.color,
            textShadow: `0 0 5px ${line.color}60`,
          }}
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{
            duration: line.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {line.code}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Neural Network Visualization
export const NeuralNetwork3D = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    connections: number[];
    activity: number;
  }>>([]);

  useEffect(() => {
    const networkNodes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: (i % 5) * 20 + 10,
      y: Math.floor(i / 5) * 20 + 10,
      z: Math.random() * 100 - 50,
      connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
        Math.floor(Math.random() * 25)
      ).filter(conn => conn !== i),
      activity: Math.random(),
    }));
    setNodes(networkNodes);
  }, []);

  return (
    <div className="absolute inset-0 opacity-30" style={{ perspective: '1500px' }}>
      {/* Neural nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `translateZ(${node.z}px)`,
            background: `radial-gradient(circle, #06B6D4, #3B82F6)`,
            boxShadow: '0 0 15px #06B6D4',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + node.activity * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.id * 0.1,
          }}
        />
      ))}
      
      {/* Neural connections */}
      {nodes.map((node) =>
        node.connections.map((connId, connIndex) => {
          const connectedNode = nodes[connId];
          if (!connectedNode) return null;
          
          const deltaX = connectedNode.x - node.x;
          const deltaY = connectedNode.y - node.y;
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          
          return (
            <motion.div
              key={`neural-${node.id}-${connId}-${connIndex}`}
              className="absolute h-px"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                background: 'linear-gradient(90deg, #06B6D440, #3B82F660, #06B6D440)',
                transform: `translateZ(${(node.z + connectedNode.z) / 2}px) rotate(${angle}deg)`,
                transformOrigin: 'left center',
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: (node.id + connId) * 0.05,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })
      )}
    </div>
  );
};

// 3D Geometric Crystals
export const CrystalFormations = () => {
  const [crystals, setCrystals] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    type: 'diamond' | 'octahedron' | 'cube';
    color: string;
    rotation: { x: number; y: number; z: number };
  }>>([]);

  useEffect(() => {
    const formations = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      z: Math.random() * 300 - 150,
      size: 40 + Math.random() * 60,
      type: ['diamond', 'octahedron', 'cube'][Math.floor(Math.random() * 3)] as any,
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][Math.floor(Math.random() * 4)],
      rotation: {
        x: Math.random() * 360,
        y: Math.random() * 360,
        z: Math.random() * 360,
      },
    }));
    setCrystals(formations);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1500px' }}>
      {crystals.map((crystal) => (
        <motion.div
          key={crystal.id}
          className="absolute"
          style={{
            left: `${crystal.x}%`,
            top: `${crystal.y}%`,
            transform: `translateZ(${crystal.z}px)`,
          }}
          animate={{
            rotateX: [crystal.rotation.x, crystal.rotation.x + 360],
            rotateY: [crystal.rotation.y, crystal.rotation.y + 360],
            rotateZ: [crystal.rotation.z, crystal.rotation.z + 180],
            y: [0, -30, 0],
          }}
          transition={{
            rotateX: { duration: 15 + crystal.id, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 12 + crystal.id, repeat: Infinity, ease: "linear" },
            rotateZ: { duration: 8 + crystal.id, repeat: Infinity, ease: "linear" },
            y: { duration: 6 + crystal.id * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {crystal.type === 'diamond' && (
            <div 
              className="relative"
              style={{ 
                width: `${crystal.size}px`, 
                height: `${crystal.size}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${crystal.color}40, ${crystal.color}20)`,
                  clipPath: 'polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)',
                  backdropFilter: 'blur(2px)',
                  border: `1px solid ${crystal.color}60`,
                  boxShadow: `0 0 20px ${crystal.color}40`,
                }}
              />
            </div>
          )}
          
          {crystal.type === 'octahedron' && (
            <div 
              className="relative"
              style={{ 
                width: `${crystal.size}px`, 
                height: `${crystal.size}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(${angle}deg, ${crystal.color}30, transparent)`,
                    transform: `rotateY(${angle}deg) translateZ(${crystal.size/4}px)`,
                    transformOrigin: 'center',
                    border: `1px solid ${crystal.color}40`,
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>
          )}
          
          {crystal.type === 'cube' && (
            <div 
              className="relative"
              style={{ 
                width: `${crystal.size}px`, 
                height: `${crystal.size}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {[
                { transform: `translateZ(${crystal.size/2}px)`, opacity: 0.8 },
                { transform: `rotateY(90deg) translateZ(${crystal.size/2}px)`, opacity: 0.6 },
                { transform: `rotateY(180deg) translateZ(${crystal.size/2}px)`, opacity: 0.4 },
                { transform: `rotateY(-90deg) translateZ(${crystal.size/2}px)`, opacity: 0.6 },
                { transform: `rotateX(90deg) translateZ(${crystal.size/2}px)`, opacity: 0.7 },
                { transform: `rotateX(-90deg) translateZ(${crystal.size/2}px)`, opacity: 0.5 },
              ].map((face, index) => (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    transform: face.transform,
                    background: `linear-gradient(45deg, ${crystal.color}${Math.floor(face.opacity * 50).toString(16).padStart(2, '0')}, ${crystal.color}20)`,
                    border: `1px solid ${crystal.color}40`,
                    backdropFilter: 'blur(1px)',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Interactive 3D Grid
export const Dynamic3DGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden opacity-30"
      style={{
        perspective: '1200px',
        rotateX,
        rotateY,
      }}
    >
      {/* Horizontal grid planes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px"
          style={{
            top: `${i * 8.33}%`,
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}40, transparent)`,
            transform: `translateZ(${i * 20 - 100}px) rotateX(60deg)`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Vertical grid planes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px"
          style={{
            left: `${i * 8.33}%`,
            background: `linear-gradient(0deg, transparent, ${i % 2 === 0 ? '#06B6D4' : '#10B981'}40, transparent)`,
            transform: `translateZ(${i * 20 - 100}px) rotateY(30deg)`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

// Floating 3D Spheres with Trails
export const OrbitalSpheres = () => {
  const [spheres, setSpheres] = useState<Array<{
    id: number;
    radius: number;
    speed: number;
    color: string;
    trail: boolean;
  }>>([]);

  useEffect(() => {
    const orbitalSpheres = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      radius: 100 + i * 40,
      speed: 15 + i * 5,
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][i],
      trail: i % 2 === 0,
    }));
    setSpheres(orbitalSpheres);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40">
      {spheres.map((sphere) => (
        <motion.div
          key={sphere.id}
          className="absolute"
          style={{
            width: `${sphere.radius * 2}px`,
            height: `${sphere.radius * 2}px`,
          }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: sphere.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Orbital path */}
          <div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${sphere.color}20, transparent)`,
            }}
          />
          
          {/* Moving sphere */}
          <motion.div
            className="absolute w-4 h-4 rounded-full"
            style={{
              top: 0,
              left: '50%',
              marginLeft: '-8px',
              marginTop: '-8px',
              background: `radial-gradient(circle, ${sphere.color}, ${sphere.color}80)`,
              boxShadow: `0 0 20px ${sphere.color}`,
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Trail effect */}
          {sphere.trail && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 270deg, ${sphere.color}40, transparent 90deg)`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// 3D Hexagonal Network
export const HexagonalNetwork = () => {
  const [hexagons, setHexagons] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    connections: number[];
  }>>([]);

  useEffect(() => {
    const hexagonalGrid = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: (i % 5) * 20 + 10,
      y: Math.floor(i / 5) * 30 + 15,
      z: Math.random() * 200 - 100,
      size: 20 + Math.random() * 15,
      connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => 
        Math.floor(Math.random() * 15)
      ).filter(conn => conn !== i),
    }));
    setHexagons(hexagonalGrid);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-25" style={{ perspective: '1400px' }}>
      {/* Hexagon nodes */}
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            transform: `translateZ(${hex.z}px)`,
          }}
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: hex.id * 0.3 },
          }}
        >
          <div
            className="relative"
            style={{
              width: `${hex.size}px`,
              height: `${hex.size}px`,
            }}
          >
            {/* Hexagon shape */}
            <div
              className="absolute inset-0 border border-cyan-400/40"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
                backdropFilter: 'blur(2px)',
              }}
            />
            
            {/* Center dot */}
            <div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{
                background: '#06B6D4',
                boxShadow: '0 0 10px #06B6D4',
              }}
            />
          </div>
        </motion.div>
      ))}
      
      {/* Connection lines */}
      {hexagons.map((hex) =>
        hex.connections.map((connId, connIndex) => {
          const connectedHex = hexagons[connId];
          if (!connectedHex) return null;
          
          const deltaX = connectedHex.x - hex.x;
          const deltaY = connectedHex.y - hex.y;
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          
          return (
            <motion.div
              key={`hex-conn-${hex.id}-${connId}-${connIndex}`}
              className="absolute h-px"
              style={{
                left: `${hex.x}%`,
                top: `${hex.y}%`,
                width: `${distance}%`,
                background: 'linear-gradient(90deg, #06B6D440, #3B82F640, #06B6D440)',
                transform: `translateZ(${(hex.z + connectedHex.z) / 2}px) rotate(${angle}deg)`,
                transformOrigin: 'left center',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                delay: (hex.id + connId) * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })
      )}
    </div>
  );
};

// Main Premium 3D Background Component
export const Premium3DBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
      {/* Layer 1: Far background - Code Rain */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-400px) scale(1.8)' }}>
        <EnhancedCodeRain />
      </div>

      {/* Layer 2: CS Terms Floating */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-300px) scale(1.5)' }}>
        <FloatingCSTerms />
      </div>
      
      {/* Layer 3: Neural Network */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-250px) scale(1.3)' }}>
        <NeuralNetwork3D />
      </div>
      
      {/* Layer 4: Hexagonal Network */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-200px) scale(1.2)' }}>
        <HexagonalNetwork />
      </div>
      
      {/* Layer 5: Dynamic Grid */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-150px) scale(1.1)' }}>
        <Dynamic3DGrid />
      </div>
      
      {/* Layer 6: Orbital elements */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-50px)' }}>
        <OrbitalSpheres />
      </div>
      
      {/* Layer 7: Floating crystals */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(50px) scale(0.8)' }}>
        <CrystalFormations />
      </div>
      
      {/* Enhanced ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/8" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-cyan-500/12 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-conic from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      </div>
    </div>
  );
};
