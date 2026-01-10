import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const certifications = [
  {
    year: "2024",
    type: "Coursera Course",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Comprehensive cloud computing fundamentals covering AWS core services, security, architecture, pricing, and support.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "Cloud Architecture"],
    link: "https://www.coursera.org/account-profile",
  },
  {
    year: "2024",
    type: "Coursera Course",
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    description:
      "In-depth machine learning course covering supervised learning, unsupervised learning, neural networks, and best practices for ML projects.",
    skills: ["Machine Learning", "Python", "Neural Networks", "Supervised Learning", "Data Science"],
    link: "https://www.coursera.org/account-profile",
  },
  {
    year: "2024",
    type: "Coursera Course",
    title: "Introduction to the Metaverse",
    issuer: "Meta",
    description:
      "Exploration of metaverse technologies, virtual reality, augmented reality, and the future of immersive digital experiences.",
    skills: ["Metaverse", "VR", "AR", "XR Technologies", "Digital Experiences"],
    link: "https://www.coursera.org/account-profile",
  },
  {
    year: "2022",
    type: "Program",
    title: "Google Cloud Facilitator Program",
    issuer: "Google Cloud",
    description:
      "Completed comprehensive cloud computing training program covering Google Cloud Platform services, architecture, and best practices.",
    skills: ["Google Cloud Platform", "Cloud Architecture", "DevOps", "Cloud Security"],
    link: null,
  },
  {
    year: "2022",
    type: "Internship Certificate",
    title: "Blockchain Developer Intern",
    issuer: "Simplilearn",
    description:
      "Comprehensive blockchain development certification covering smart contracts, DApps, and Ethereum ecosystem development.",
    skills: ["Blockchain", "Solidity", "Smart Contracts", "Ethereum", "Web3.js"],
    link: "https://simpli-web.app.link/e/VNwTa5PAXUb",
  },
  {
    year: "2021",
    type: "Internship Certificate",
    title: "Java Developer Intern",
    issuer: "Learnmall",
    description:
      "Java development internship focusing on core Java concepts, OOPs principles, and practical application development.",
    skills: ["Java", "OOPs", "JDBC", "Exception Handling", "File Handling"],
    link: "https://learnmall.in/cert/FHH963903",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">Certifications & Programs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover bg-gradient-card flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{cert.year}</Badge>
                  <Badge variant="secondary" className="text-xs">
                    {cert.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {cert.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 4).map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="skill-badge text-xs">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>

                {cert.link && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href={cert.link}
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
