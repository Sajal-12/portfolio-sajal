import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Play, TrendingUp, Flame } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Import project screenshots
import paperTradingImg from "@/assets/project-paper-trading.jpg";
import smartjobberImg from "@/assets/project-smartjobber.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";
import pathfinderImg from "@/assets/project-pathfinder.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "Paper Trading Platform",
    description:
      "Enterprise-grade paper trading backend with real-time market data, portfolio analytics, automated trade execution, WebSocket notifications, and Redis caching.",
    technologies: ["Python", "Flask", "MongoDB", "Redis", "WebSocket", "JWT"],
    featured: true,
    trending: true,
    image: paperTradingImg,
    liveLink: null,
    codeLink: "https://github.com/Sajal-12/PAPER_TRADING",
    color: "from-orange-500 to-red-500",
    category: "Backend",
  },
  {
    title: "SmartJobber – Job Tracker",
    description:
      "Comprehensive job tracking SaaS with real-time application tracking, status management, analytics dashboard, and intelligent insights.",
    technologies: ["React.js", "Supabase", "Tailwind CSS", "JavaScript"],
    featured: true,
    trending: false,
    image: smartjobberImg,
    liveLink: "https://lucent-kitten-5ba2da.netlify.app/",
    codeLink: "https://github.com/Sajal-12/smartjobber",
    color: "from-blue-500 to-cyan-500",
    category: "Full Stack",
  },
  {
    title: "JKS Restaurant – Blockchain",
    description:
      "Next-gen restaurant management with blockchain payments, smart contracts for transactions, inventory tracking, and modern ordering system.",
    technologies: ["MERN Stack", "Blockchain", "Smart Contracts", "MongoDB"],
    featured: true,
    trending: true,
    image: restaurantImg,
    liveLink: "https://lucent-kitten-5ba2da.netlify.app/",
    codeLink: "https://github.com/Sajal-12/JKS---Restaurant",
    color: "from-purple-500 to-pink-500",
    category: "Web3",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive algorithm visualization tool featuring Dijkstra, A*, BFS with beautiful animations and educational insights.",
    technologies: ["React.js", "Tailwind CSS", "Algorithms", "Data Structures"],
    featured: false,
    trending: false,
    image: pathfinderImg,
    liveLink: "https://pathfinding-visualizer-ss.netlify.app/",
    codeLink: "https://github.com/Sajal-12/PathfindingVisualizer",
    color: "from-green-500 to-teal-500",
    category: "Algorithms",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive developer portfolio with smooth animations, dark/light mode, and Netflix-inspired design.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    featured: false,
    trending: false,
    image: portfolioImg,
    liveLink: "https://v0-portfolio-f7zt6e.vercel.app/",
    codeLink: "https://github.com/Sajal-12",
    color: "from-indigo-500 to-purple-500",
    category: "Frontend",
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Flame size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production-ready applications built with modern technologies
          </p>
        </motion.div>

        {/* Featured Projects - Netflix Hero Style */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-primary" size={24} />
            <h3 className="text-2xl font-bold">Featured Projects</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card"
                >
                  {/* Project Screenshot */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`bg-gradient-to-r ${project.color} text-white border-none shadow-lg`}>
                        {project.category}
                      </Badge>
                      {project.trending && (
                        <Badge className="bg-black/50 backdrop-blur text-white border-none">
                          <Flame size={12} className="mr-1 text-orange-400" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500/90 text-black border-none font-bold">
                          <Star size={12} className="mr-1 fill-current" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:shadow-glow transition-shadow"
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
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Github size={24} className="text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.liveLink && (
                        <Button variant="outline" size="sm" asChild className="flex-1 btn-outline-glow rounded-xl">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild className={`${project.liveLink ? 'flex-1' : 'w-full'} btn-outline-glow rounded-xl`}>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects - Smaller Cards */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Star className="text-accent" size={20} />
            <h3 className="text-xl font-bold text-muted-foreground">More Projects</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                {/* Thumbnail */}
                <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </h4>
                    <Badge variant="outline" className="text-[10px] flex-shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-xs line-clamp-2 mb-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                         className="text-xs text-primary hover:underline flex items-center gap-1">
                        <ExternalLink size={10} /> Demo
                      </a>
                    )}
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                       className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                      <Github size={10} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
