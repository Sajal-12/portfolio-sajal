import { motion } from "framer-motion";
import { ExternalLink, Calendar, Building2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const experiences = [
  {
    title: "Technical Team Lead",
    company: "HackOverflow Society",
    period: "Current",
    isCurrent: true,
    description:
      "Leading technical initiatives and mentoring developers. Organizing hackathons and coding workshops. Building scalable backend systems and guiding architecture decisions.",
    highlights: [
      "Contributed to 70+ GitHub repositories",
      "Technical content writer on Medium",
      "Mentored 20+ junior developers",
    ],
    skills: ["Leadership", "System Design", "Go", "Cloud Architecture"],
    certificateLink: null,
  },
  {
    title: "Blockchain Developer Intern",
    company: "Simplilearn",
    period: "Mar 2022 – Aug 2022",
    isCurrent: false,
    description:
      "Built a blockchain-based hospital management system with tokenized medical records. Developed smart contracts using Solidity and integrated decentralized frontend with React.js and Web3.js.",
    highlights: [],
    skills: ["Solidity", "Ethereum", "React.js", "Web3.js", "Smart Contracts"],
    certificateLink: "https://simpli-web.app.link/e/VNwTa5PAXUb",
  },
  {
    title: "Java Project Intern",
    company: "Learnmall",
    period: "Jan 2021 – Mar 2021",
    isCurrent: false,
    description:
      "Built console-based Java applications using File Handling, Exception Handling, and OOPs Concepts. Gained hands-on experience with JDBC, modularization, and debugging.",
    highlights: [],
    skills: ["Java", "JDBC", "OOPs", "File Handling"],
    certificateLink: "https://learnmall.in/cert/FHH963903",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <p className="section-subtitle">
            Building and leading teams to create impactful technology solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="card-netflix p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      {exp.isCurrent && (
                        <Badge className="bg-gradient-primary text-primary-foreground animate-pulse">
                          Current
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <Building2 size={16} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {exp.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="skill-badge text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {exp.certificateLink && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild className="btn-outline-glow">
                          <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-2" />
                            View Certificate
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
