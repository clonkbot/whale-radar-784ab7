import { motion } from 'framer-motion';

export default function RadarBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep ocean gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1525] to-[#0a1628]" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radar center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,213,0.08) 0%, rgba(0,255,213,0.02) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Concentric radar circles */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10"
          style={{
            width: `${i * 200}px`,
            height: `${i * 200}px`,
          }}
        />
      ))}

      {/* Radar sweep */}
      <motion.div
        className="absolute top-1/2 left-1/2 origin-bottom-left"
        style={{
          width: '500px',
          height: '2px',
          background: 'linear-gradient(90deg, rgba(0,255,213,0.6) 0%, rgba(0,255,213,0) 100%)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Radar sweep glow trail */}
      <motion.div
        className="absolute top-1/2 left-1/2 origin-bottom-left"
        style={{
          width: '400px',
          height: '100px',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,255,213,0.05) 30deg, transparent 60deg)',
          transformOrigin: '0 50%',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles / whale pings */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00ffd5 1px, transparent 1px),
            linear-gradient(to bottom, #00ffd5 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-cyan-500/20 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 border-r-2 border-t-2 border-cyan-500/20 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-16 h-16 md:w-24 md:h-24 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-cyan-500/20 rounded-br-lg" />

      {/* Scan lines effect */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,213,0.5) 2px, rgba(0,255,213,0.5) 4px)',
        }}
      />
    </div>
  );
}
