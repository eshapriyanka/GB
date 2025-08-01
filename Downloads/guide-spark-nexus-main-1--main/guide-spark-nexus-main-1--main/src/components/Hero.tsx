import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 pt-20 sm:pt-24 md:pt-20 w-full overflow-x-hidden">
      {/* Moon-like glowing oval at the bottom center */}
      <motion.div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 z-0"
        initial={{
          scale: 1,
          opacity: 0.7,
          filter: 'blur(32px)'
        }}
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.7, 0.95, 0.7],
          filter: [
            'blur(32px)',
            'blur(40px)',
            'blur(32px)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        style={{
          width: '90vw',
          height: '38vw',
          minWidth: 500,
          minHeight: 320,
          maxWidth: 1200,
          maxHeight: 600,
          background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,255,255,0.18) 0%, rgba(168,85,247,0.22) 40%, rgba(139,92,246,0.13) 70%, rgba(17,24,39,0.01) 100%)',
          boxShadow: '0 0 120px 60px rgba(168,85,247,0.18), 0 0 240px 120px rgba(139,92,246,0.10)',
          borderRadius: '50% / 38%',
          opacity: 0.85,
        }}
        aria-hidden="true"
      />
      {/* Animated stars/dust particles for depth */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(22)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 70 + 10}%`,
              left: `${Math.random() * 90}%`,
              opacity: Math.random() * 0.5 + 0.3,
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>
      <motion.div
        className="w-full max-w-6xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <AnimatedHeading
            text="Guide Bazaar"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 md:mb-4 text-white font-medium px-3 sm:px-4">
            Your Smart Student Companion{' '}
            <motion.span
              className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl filter drop-shadow-lg"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              ✈️
            </motion.span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 text-white/70 leading-relaxed px-3 sm:px-4">
            Explore finance, join events, network with startups, and grow your future in one unified platform.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center mb-8 sm:mb-12 md:mb-16 px-3 sm:px-4 w-full max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <Link to="/marketplace" className="w-full sm:w-auto flex justify-center">
            <div className="relative inline-block">
              <button
                className="relative px-10 py-4 text-lg md:text-xl font-bold text-white rounded-full min-w-[180px] shadow-lg border-4 border-transparent overflow-hidden group bg-black"
                style={{
                  borderRadius: '9999px',
                  borderStyle: 'solid',
                  borderWidth: '0px',
                  background: '#000',
                  transition: 'background 0.3s, color 0.3s',
                  zIndex: 1
                }}
              >
                <span className="relative z-10 flex items-center">
                  Explore Now
                  <ArrowRight className="ml-2 h-5 w-5 inline align-middle" />
                </span>
              </button>
              {/* Animated white light border exactly at the button edge, perfectly matching the button's oval shape */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }} viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="border-gradient-anim" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fff">
                      <animate attributeName="offset" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="0.2" stopColor="#fff" stopOpacity="0.7">
                      <animate attributeName="offset" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="0.5" stopColor="#fff" stopOpacity="0.2">
                      <animate attributeName="offset" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect x="3" y="3" width="394" height="94" rx="47" ry="47" fill="none" stroke="url(#border-gradient-anim)" strokeWidth="6" />
              </svg>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-3 sm:px-4 w-full"
          variants={itemVariants}
        >
          {[
            { icon: TrendingUp, title: "Finance Tools", desc: "Smart financial planning and investment tracking" },
            { icon: Users, title: "Events & Networking", desc: "Connect with peers and industry professionals" },
            { icon: Users, title: "Startup Ecosystem", desc: "Discover opportunities and build your career" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-brand-purple/50 transition-all duration-300 group w-full"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-purple mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:text-brand-pink transition-colors" />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
