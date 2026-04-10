import { motion } from "framer-motion";
import { FileText, Github, Linkedin, ChevronDown, Sparkles, Zap, Award, ArrowRight } from "lucide-react";
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.08),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Minimal floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-foreground">Sajal</span>
              <span className="block text-gradient mt-1">Swapnil</span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Backend & Blockchain Architect
            </motion.p>

            <motion.p 
              className="text-base text-muted-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Engineering <span className="text-primary font-medium">scalable distributed systems</span> and{" "}
              <span className="text-accent font-medium">decentralized applications</span> that power next-gen enterprise solutions.
            </motion.p>

            {/* Skills Tags */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((skill, index) => (
                <motion.div
                  key={skill.text}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r ${skill.color} text-white shadow-lg cursor-default overflow-hidden`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-xs">{skill.icon}</span>
                    {skill.text}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8 mb-8 pb-8 border-b border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button asChild className="btn-primary h-12 px-6 text-sm rounded-lg gap-2 group">
                <a href="https://v0-resume-in-aarush-style.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FileText size={16} />
                  View Resume
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-outline-glow h-12 px-6 text-sm rounded-lg">
                <a href="https://github.com/Sajal-12" target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-1.5" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-outline-glow h-12 px-6 text-sm rounded-lg">
                <a href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} className="mr-1.5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Ambient glow behind image */}
              <div className="absolute -inset-12 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />
              
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
              </motion.div>

              {/* Image Container */}
              <motion.div 
                className="relative rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-secondary ring-4 ring-background">
                  <img
                    src={sajalImage}
                    alt="Sajal Swapnil — Backend & Blockchain Engineer"
                    className="w-full h-full object-cover object-[center_15%] scale-125"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-3 -right-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white font-bold text-xs shadow-lg flex items-center gap-1.5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award size={12} />
                AWS Certified
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-6 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-bold text-xs shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ⛓️ Web3 Dev
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 -right-8 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-bold text-xs shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                🚀 Go Expert
              </motion.div>
              <motion.div
                className="absolute -bottom-2 left-1/4 px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white font-bold text-xs shadow-lg"
                animate={{ y: [0, 5, 0] }}
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
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
