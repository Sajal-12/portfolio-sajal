import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Paper Trading Platform",
    description:
      "A comprehensive backend system for paper trading with real-time market data, portfolio management, automated trade execution, and WebSocket notifications. Features JWT auth, Redis caching, and multi-channel alerts.",
    technologies: ["React", "Python", "Flask", "MongoDB", "Redis", "WebSocket"],
    featured: true,
    liveLink: null,
    codeLink: "https://github.com/Sajal-12/PAPER_TRADING",
  },
  {
    title: "SmartJobber – Job Tracker Web App",
    description:
      "A comprehensive job tracking application built with React.js and Supabase. Features real-time job application tracking, status updates, and analytics dashboard for job seekers.",
    technologies: ["React.js", "Supabase", "Tailwind CSS", "JavaScript"],
    featured: true,
    liveLink: "https://lucent-kitten-5ba2da.netlify.app/",
    codeLink: "https://github.com/Sajal-12/smartjobber",
  },
  {
    title: "JKS Restaurant – Full Stack Web App",
    description:
      "Modern restaurant management system with blockchain integration. Features online ordering, payment processing, inventory management, and customer reviews system.",
    technologies: ["MERN Stack", "Blockchain", "Smart Contracts", "MongoDB"],
    featured: true,
    liveLink: "https://lucent-kitten-5ba2da.netlify.app/",
    codeLink: "https://github.com/Sajal-12/JKS---Restaurant",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive visualization tool for pathfinding algorithms including Dijkstra, A*, and BFS. Built with React.js and implements various data structures and algorithms.",
    technologies: ["React.js", "Tailwind CSS", "Data Structures", "Algorithms"],
    featured: false,
    liveLink: "https://pathfinding-visualizer-ss.netlify.app/",
    codeLink: "https://github.com/Sajal-12/PathfindingVisualizer",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website showcasing projects and skills. Built with React and Tailwind CSS, featuring dark/light mode and smooth animations.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    featured: false,
    liveLink: "https://v0-portfolio-f7zt6e.vercel.app/",
    codeLink: "https://github.com/Sajal-12",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-gradient-card flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground shrink-0">
                      <Star size={12} className="mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="skill-badge text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.liveLink && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
