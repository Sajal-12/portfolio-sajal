import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const experiences = [
  {
    title: "Technical Team Lead",
    company: "HackOverflow Society",
    period: "Current",
    description:
      "Leading technical initiatives and mentoring junior developers. Organizing hackathons and coding workshops for the developer community.",
    highlights: [
      "Contributed to 70+ GitHub repositories",
      "Active in open source community",
      "Technical content writer on Medium",
    ],
    skills: [],
    certificateLink: null,
  },
  {
    title: "Blockchain Developer Intern",
    company: "Simplilearn",
    period: "Mar 2022 – Aug 2022",
    description:
      "Built a blockchain-based hospital management system with tokenized medical records. Developed and deployed smart contracts using Solidity on Ethereum. Integrated a decentralized frontend using React.js and Web3.js.",
    highlights: [],
    skills: ["Solidity", "Ethereum", "React.js", "Web3.js", "Smart Contracts"],
    certificateLink: "https://simpli-web.app.link/e/VNwTa5PAXUb",
  },
  {
    title: "Java Project Intern",
    company: "Learnmall",
    period: "Jan 2021 – Mar 2021",
    description:
      "Built a console-based Java application using File Handling, Exception Handling, and OOPs Concepts. Gained hands-on experience with JDBC, modularization, and debugging.",
    highlights: [],
    skills: ["Java", "JDBC", "OOPs", "File Handling", "Exception Handling"],
    certificateLink: "https://learnmall.in/cert/FHH963903",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Experience & Leadership</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover bg-gradient-card">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {exp.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {exp.certificateLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
