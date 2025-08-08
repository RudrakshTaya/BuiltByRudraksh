import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// 3D Floating Geometric Shapes
export const FloatingGeometry = () => {
  const [shapes, setShapes] = useState<Array<{
    id: number;
    type: 'cube' | 'sphere' | 'pyramid' | 'torus';
    x: number;
    y: number;
    z: number;
    size: number;
    rotationSpeed: number;
    floatSpeed: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const geometryShapes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      type: ['cube', 'sphere', 'pyramid', 'torus'][Math.floor(Math.random() * 4)] as any,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 200 - 100,
      size: 20 + Math.random() * 40,
      rotationSpeed: 0.5 + Math.random() * 2,
      floatSpeed: 2 + Math.random() * 4,
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 6)]
    }));
    setShapes(geometryShapes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            transform: `translateZ(${shape.z}px)`,
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -50, 0],
            z: [shape.z, shape.z + 50, shape.z],
          }}
          transition={{
            rotateX: { duration: shape.rotationSpeed * 4, repeat: Infinity, ease: "linear" },
            rotateY: { duration: shape.rotationSpeed * 6, repeat: Infinity, ease: "linear" },
            y: { duration: shape.floatSpeed, repeat: Infinity, ease: "easeInOut" },
            z: { duration: shape.floatSpeed * 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {shape.type === 'cube' && (
            <div 
              className="relative preserve-3d"
              style={{ 
                width: `${shape.size}px`, 
                height: `${shape.size}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Cube faces */}
              {[
                { transform: `translateZ(${shape.size/2}px)`, bg: `${shape.color}40` },
                { transform: `rotateY(90deg) translateZ(${shape.size/2}px)`, bg: `${shape.color}30` },
                { transform: `rotateY(180deg) translateZ(${shape.size/2}px)`, bg: `${shape.color}20` },
                { transform: `rotateY(-90deg) translateZ(${shape.size/2}px)`, bg: `${shape.color}30` },
                { transform: `rotateX(90deg) translateZ(${shape.size/2}px)`, bg: `${shape.color}35` },
                { transform: `rotateX(-90deg) translateZ(${shape.size/2}px)`, bg: `${shape.color}25` },
              ].map((face, index) => (
                <div
                  key={index}
                  className="absolute inset-0 border border-white/10"
                  style={{
                    transform: face.transform,
                    backgroundColor: face.bg,
                    backdropFilter: 'blur(1px)',
                  }}
                />
              ))}
            </div>
          )}
          
          {shape.type === 'sphere' && (
            <div
              className="rounded-full border border-white/20"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                background: `radial-gradient(circle at 30% 30%, ${shape.color}60, ${shape.color}20)`,
                backdropFilter: 'blur(1px)',
                boxShadow: `0 0 ${shape.size/2}px ${shape.color}40`,
              }}
            />
          )}
          
          {shape.type === 'pyramid' && (
            <div 
              className="relative preserve-3d"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Pyramid faces */}
              {[0, 1, 2, 3].map((face) => (
                <div
                  key={face}
                  className="absolute border border-white/10"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: `${shape.size/2}px solid transparent`,
                    borderRight: `${shape.size/2}px solid transparent`,
                    borderBottom: `${shape.size}px solid ${shape.color}40`,
                    transform: `rotateY(${face * 90}deg) translateZ(${shape.size/4}px)`,
                    transformOrigin: 'center bottom',
                  }}
                />
              ))}
            </div>
          )}
          
          {shape.type === 'torus' && (
            <div
              className="rounded-full border-4 border-white/20"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                background: `conic-gradient(${shape.color}60, transparent, ${shape.color}40)`,
                backdropFilter: 'blur(1px)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// 3D Grid Network
export const Grid3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30" style={{ perspective: '1000px' }}>
      {/* Horizontal grid lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            top: `${i * 5}%`,
            transform: `rotateX(60deg) translateZ(${i * 10}px)`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 4,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Vertical grid lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
          style={{
            left: `${i * 5}%`,
            transform: `rotateY(30deg) translateZ(${i * 10}px)`,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: 4,
            delay: i * 0.1 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// 3D Neural Network Connections
export const NeuralNetwork3D = () => {
  const [nodes, setNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    connections: number[];
  }>>([]);

  useEffect(() => {
    const networkNodes = Array.from({ length: 25 }, (_, i) => {
      // Generate unique connections for each node
      const possibleConnections = Array.from({ length: 25 }, (_, idx) => idx).filter(idx => idx !== i);
      const numConnections = Math.floor(Math.random() * 3) + 1; // 1-3 connections
      const connections: number[] = [];

      for (let j = 0; j < numConnections && possibleConnections.length > 0; j++) {
        const randomIndex = Math.floor(Math.random() * possibleConnections.length);
        const selectedConnection = possibleConnections.splice(randomIndex, 1)[0];
        connections.push(selectedConnection);
      }

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 300 - 150,
        connections,
      };
    });
    setNodes(networkNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20" style={{ perspective: '1200px' }}>
      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `translateZ(${node.z}px)`,
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            delay: node.id * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Connections */}
      {nodes.map((node, nodeIndex) =>
        node.connections.map((connId, connIndex) => {
          const connectedNode = nodes[connId];
          if (!connectedNode) return null;

          // Create unique key to prevent duplicates
          const uniqueKey = `conn-${node.id}-${connId}-${nodeIndex}-${connIndex}`;

          const deltaX = connectedNode.x - node.x;
          const deltaY = connectedNode.y - node.y;
          const deltaZ = connectedNode.z - node.z;
          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          return (
            <motion.div
              key={uniqueKey}
              className="absolute h-px bg-gradient-to-r from-purple-400/40 via-cyan-400/60 to-purple-400/40"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance * 0.8}%`,
                transform: `translateZ(${(node.z + connectedNode.z) / 2}px) rotate(${angle}deg)`,
                transformOrigin: 'left center',
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                delay: (node.id + connId + connIndex) * 0.1,
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

// 3D Floating Data Cubes
export const DataCubes3D = () => {
  const [cubes, setCubes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    data: string;
    color: string;
  }>>([]);

  useEffect(() => {
    const dataCubes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      z: Math.random() * 400 - 200,
      size: 30 + Math.random() * 20,
      data: ['AI', 'ML', 'API', 'DB', 'UI', 'UX', 'JS', 'TS', 'CSS', 'HTML'][Math.floor(Math.random() * 10)],
      color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
    }));
    setCubes(dataCubes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-60" style={{ perspective: '1500px' }}>
      {cubes.map((cube) => (
        <motion.div
          key={cube.id}
          className="absolute preserve-3d"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            transform: `translateZ(${cube.z}px)`,
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -30, 0],
            z: [cube.z, cube.z + 100, cube.z],
          }}
          transition={{
            rotateX: { duration: 8, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            z: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Cube wireframe */}
          <div
            className="relative border border-white/30"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              background: `linear-gradient(45deg, ${cube.color}20, ${cube.color}10)`,
              backdropFilter: 'blur(2px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Cube faces with data labels */}
            {[
              { transform: `translateZ(${cube.size/2}px)`, opacity: 0.8 },
              { transform: `rotateY(90deg) translateZ(${cube.size/2}px)`, opacity: 0.6 },
              { transform: `rotateY(180deg) translateZ(${cube.size/2}px)`, opacity: 0.4 },
              { transform: `rotateY(-90deg) translateZ(${cube.size/2}px)`, opacity: 0.6 },
              { transform: `rotateX(90deg) translateZ(${cube.size/2}px)`, opacity: 0.7 },
              { transform: `rotateX(-90deg) translateZ(${cube.size/2}px)`, opacity: 0.5 },
            ].map((face, index) => (
              <div
                key={index}
                className="absolute inset-0 border border-white/20 flex items-center justify-center text-white font-bold text-xs"
                style={{
                  transform: face.transform,
                  backgroundColor: `${cube.color}${Math.floor(face.opacity * 100).toString(16).padStart(2, '0')}`,
                  backdropFilter: 'blur(1px)',
                }}
              >
                {index === 0 && cube.data}
              </div>
            ))}
          </div>
          
          {/* Glowing core */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              transform: `translate(-50%, -50%) translateZ(${cube.size/2}px)`,
              backgroundColor: cube.color,
              boxShadow: `0 0 20px ${cube.color}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// 3D Holographic Rings
export const HolographicRings = () => {
  const rings = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    radius: 50 + i * 30,
    delay: i * 0.5,
    speed: 2 + i * 0.3,
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40" style={{ perspective: '1000px' }}>
      {rings.map((ring) => (
        <motion.div
          key={ring.id}
          className="absolute rounded-full border-2 border-cyan-400/30"
          style={{
            width: `${ring.radius * 2}px`,
            height: `${ring.radius * 2}px`,
            borderImage: 'linear-gradient(45deg, #06B6D4, #3B82F6, #8B5CF6, #06B6D4) 1',
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotateX: { duration: ring.speed * 4, repeat: Infinity, ease: "linear" },
            rotateY: { duration: ring.speed * 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: ring.speed * 2, repeat: Infinity, ease: "easeInOut" },
            delay: ring.delay,
          }}
        >
          {/* Ring particles */}
          {Array.from({ length: 12 }).map((_, particleIndex) => {
            const angle = (particleIndex / 12) * 360;
            return (
              <motion.div
                key={particleIndex}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${ring.radius}px)`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: particleIndex * 0.1 + ring.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

// 3D Code Stream
export const CodeStream3D = () => {
  const [streams, setStreams] = useState<Array<{
    id: number;
    x: number;
    characters: string[];
    speed: number;
    depth: number;
  }>>([]);

  useEffect(() => {
    const codeChars = ['0', '1', 'function', 'const', 'let', 'var', 'class', 'async', 'await', 'return', 'if', 'else', 'for', 'while', '{', '}', '(', ')', ';', '=', '+', '-', '*', '/', '<', '>'];
    const codeStreams = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      characters: Array.from({ length: 20 }, () => codeChars[Math.floor(Math.random() * codeChars.length)]),
      speed: 0.5 + Math.random() * 1.5,
      depth: Math.random() * 300 - 150,
    }));
    setStreams(codeStreams);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-25" style={{ perspective: '1200px' }}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute font-mono text-green-400/60"
          style={{
            left: `${stream.x}%`,
            transform: `translateZ(${stream.depth}px)`,
            fontSize: `${0.5 + Math.abs(stream.depth) / 400}rem`,
          }}
          animate={{
            y: ['-20vh', '120vh'],
          }}
          transition={{
            duration: 15 / stream.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          {stream.characters.map((char, index) => (
            <motion.div
              key={index}
              className="block leading-tight"
              animate={{
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 8,
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Main 3D Background Component
export const Background3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Farthest back */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-200px)' }}>
        <Grid3D />
      </div>
      
      {/* Layer 2: Middle distance */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-100px)' }}>
        <NeuralNetwork3D />
        <CodeStream3D />
      </div>
      
      {/* Layer 3: Middle */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0px)' }}>
        <HolographicRings />
      </div>
      
      {/* Layer 4: Closer */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(50px)' }}>
        <DataCubes3D />
      </div>
      
      {/* Layer 5: Closest */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(100px)' }}>
        <FloatingGeometry />
      </div>
    </div>
  );
};
