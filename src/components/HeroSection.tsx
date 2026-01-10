import { motion } from "framer-motion";
import { FileText, Github, Linkedin, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import sajalImage from "@/assets/sajal-profile.jpg";

const highlights = [
  { text: "AWS", color: "from-orange-500 to-yellow-500" },
  { text: "Blockchain", color: "from-purple-500 to-pink-500" },
  { text: "Java", color: "from-red-500 to-orange-500" },
  { text: "Go", color: "from-cyan-500 to-blue-500" },
  { text: "Cloud", color: "from-blue-500 to-indigo-500" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Sajal Swapnil</span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Backend & Blockchain Engineer
            </motion.p>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Crafting scalable backend systems and decentralized solutions. Passionate about 
              building high-performance applications with cutting-edge technologies.
            </motion.p>

            {/* Highlighted Skills */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((skill, index) => (
                <motion.span
                  key={skill.text}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {skill.text}
                </motion.span>
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
                <Button asChild className="btn-primary h-12 px-8 text-base rounded-full">
                  <a
                    href="https://v0-resume-in-aarush-style.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText size={18} className="mr-2" />
                    View Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="btn-outline-glow h-12 px-8 text-base rounded-full">
                  <a
                    href="https://github.com/Sajal-12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" className="btn-outline-glow h-12 px-8 text-base rounded-full">
                  <a
                    href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110 animate-pulse" />
              
              {/* Image Container */}
              <motion.div 
                className="relative profile-ring rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-secondary">
                  <img
                    src={sajalImage}
                    alt="Sajal Swapnil"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                AWS
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Blockchain
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 -right-8 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Go
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/4 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                Java
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
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
