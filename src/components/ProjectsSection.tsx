import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Paper Trading Platform",
    description:
      "A comprehensive backend system for paper trading with real-time market data, portfolio management, automated trade execution, WebSocket notifications, JWT auth, and Redis caching.",
    technologies: ["Python", "Flask", "MongoDB", "Redis", "WebSocket", "JWT"],
    featured: true,
    liveLink: null,
    codeLink: "https://github.com/Sajal-12/PAPER_TRADING",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "SmartJobber – Job Tracker",
    description:
      "A comprehensive job tracking application with real-time application tracking, status updates, and analytics dashboard for job seekers.",
    technologies: ["React.js", "Supabase", "Tailwind CSS", "JavaScript"],
    featured: true,
    liveLink: "https://lucent-kitten-5ba2da.netlify.app/",
    codeLink: "https://github.com/Sajal-12/smartjobber",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JKS Restaurant – Full Stack",
    description:
      "Modern restaurant management system with blockchain integration for payments, online ordering, inventory management, and reviews.",
    technologies: ["MERN Stack", "Blockchain", "Smart Contracts", "MongoDB"],
    featured: true,
    liveLink: "https://lucent-kitten-5ba2da.netlify.app/",
    codeLink: "https://github.com/Sajal-12/JKS---Restaurant",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive visualization tool for pathfinding algorithms including Dijkstra, A*, and BFS with beautiful animations.",
    technologies: ["React.js", "Tailwind CSS", "Algorithms", "Data Structures"],
    featured: false,
    liveLink: "https://pathfinding-visualizer-ss.netlify.app/",
    codeLink: "https://github.com/Sajal-12/PathfindingVisualizer",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio showcasing projects and skills with smooth animations and dark/light mode.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    featured: false,
    liveLink: "https://v0-portfolio-f7zt6e.vercel.app/",
    codeLink: "https://github.com/Sajal-12",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Building scalable applications with modern technologies
          </p>
        </motion.div>

        {/* Netflix-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative card-netflix overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 backdrop-blur text-white border-none">
                      <Star size={12} className="mr-1 fill-yellow-400 text-yellow-400" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Play size={24} className="text-white ml-1" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Github size={24} className="text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-badge text-xs py-1 px-2">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="skill-badge text-xs py-1 px-2">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.liveLink && (
                    <Button variant="outline" size="sm" asChild className="flex-1 btn-outline-glow text-xs">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild className="flex-1 btn-outline-glow text-xs">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
