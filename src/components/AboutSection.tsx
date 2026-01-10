import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Users, Code2, Zap } from "lucide-react";

const stats = [
  { icon: Code2, value: "70+", label: "GitHub Repos" },
  { icon: Zap, value: "3+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Projects Built" },
];

const roles = [
  "Backend Engineer",
  "Blockchain Developer",
  "Cloud Architect",
  "Open Source Contributor",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building the future of web with scalable backend systems and blockchain technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-semibold">Backend & Blockchain Engineer</span> with 
                a B.E. in Computer Science from Chandigarh University. I specialize in building 
                robust, scalable systems using <span className="text-primary font-semibold">Go, Java, Python</span>, 
                and cloud technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across <span className="text-primary font-semibold">AWS, Google Cloud</span>, 
                and blockchain development with <span className="text-primary font-semibold">Solidity & Web3</span>. 
                I'm passionate about decentralized systems, microservices architecture, and 
                building applications that can handle millions of users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles on Medium, or exploring the latest in cloud-native technologies.
              </p>
            </div>

            {/* Roles */}
            <div className="flex flex-wrap gap-3 mt-8">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="skill-badge-highlight"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-netflix p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-netflix p-5"
              >
                <GraduationCap className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-semibold">B.E. Computer Science</p>
                <p className="text-sm text-muted-foreground">Chandigarh University</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-netflix p-5"
              >
                <Briefcase className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-semibold">Technical Team Lead</p>
                <p className="text-sm text-muted-foreground">HackOverflow Society</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-netflix p-5"
              >
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Bihar, India</p>
                <p className="text-sm text-muted-foreground">Open to Remote</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-netflix p-5"
              >
                <Users className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm text-muted-foreground">Collaboration</p>
                <p className="font-semibold">Open Source</p>
                <p className="text-sm text-muted-foreground">70+ Contributions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
