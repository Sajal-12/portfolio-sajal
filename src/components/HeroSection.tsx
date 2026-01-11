import { motion } from "framer-motion";
import { FileText, Github, Linkedin, ChevronDown, Sparkles, Zap, Award } from "lucide-react";
import { Button } from "./ui/button";
import sajalImage from "@/assets/sajal-profile.jpg";

const highlights = [
  { text: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
  { text: "Blockchain", icon: "⛓️", color: "from-purple-500 to-pink-500" },
  { text: "Java", icon: "☕", color: "from-red-500 to-orange-500" },
  { text: "Go", icon: "🚀", color: "from-cyan-500 to-blue-500" },
  { text: "Cloud", icon: "🌐", color: "from-blue-500 to-indigo-500" },
];

const stats = [
  { value: "3+", label: "Years Exp" },
  { value: "15+", label: "Projects" },
  { value: "5+", label: "Certifications" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Sparkles size={16} className="text-primary" />
                <div className="absolute inset-0 animate-ping">
                  <Sparkles size={16} className="text-primary/50" />
                </div>
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Top 1% Backend Engineer • Open to Work
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-foreground">SAJAL</span>
              <span className="block text-gradient mt-2">SWAPNIL</span>
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-xl sm:text-2xl font-medium text-muted-foreground tracking-wide">
                Backend & Blockchain Architect
              </span>
              <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </motion.div>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Architecting <span className="text-primary font-semibold">scalable distributed systems</span> and{" "}
              <span className="text-accent font-semibold">decentralized applications</span> that power the next generation 
              of enterprise solutions. Specialized in high-performance backend engineering.
            </motion.p>

            {/* Elite Skills Tags */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((skill, index) => (
                <motion.div
                  key={skill.text}
                  className={`group relative px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${skill.color} text-white shadow-lg cursor-pointer overflow-hidden`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{skill.icon}</span>
                    {skill.text}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-black text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="btn-primary h-14 px-8 text-base rounded-xl gap-2">
                  <a href="https://v0-resume-in-aarush-style.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FileText size={18} />
                    View Resume
                    <Zap size={16} className="ml-1" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="btn-outline-glow h-14 px-8 text-base rounded-xl">
                  <a href="https://github.com/Sajal-12" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="btn-outline-glow h-14 px-8 text-base rounded-xl">
                  <a href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Premium Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Multiple Glow Layers */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-40" />
              
              {/* Rotating Ring */}
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image Container */}
              <motion.div 
                className="relative rounded-full p-1.5 bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-secondary ring-4 ring-background">
                  <img
                    src={sajalImage}
                    alt="Sajal Swapnil"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Floating Tech Badges - Premium Style */}
              <motion.div
                className="absolute -top-6 -right-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl text-white font-bold text-sm shadow-xl flex items-center gap-2"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award size={14} />
                AWS Certified
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-8 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold text-sm shadow-xl"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ⛓️ Web3 Dev
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 -right-10 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold text-sm shadow-xl"
                animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                🚀 Go Expert
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/4 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white font-bold text-sm shadow-xl"
                animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                ☕ Java Pro
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current p-1">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
