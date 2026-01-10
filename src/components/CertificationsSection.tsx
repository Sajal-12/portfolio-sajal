import { motion } from "framer-motion";
import { Award, ExternalLink, Cloud, Brain, Glasses } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const certifications = [
  {
    year: "2024",
    type: "Coursera",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    icon: Cloud,
    description:
      "Comprehensive cloud computing fundamentals covering AWS core services, security, architecture, and pricing.",
    skills: ["AWS", "EC2", "S3", "IAM", "Cloud Architecture"],
    link: "https://www.coursera.org/account-profile",
    color: "from-orange-500 to-yellow-500",
  },
  {
    year: "2024",
    type: "Coursera",
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    icon: Brain,
    description:
      "In-depth ML course covering supervised/unsupervised learning, neural networks, and best practices.",
    skills: ["Machine Learning", "Python", "Neural Networks", "Data Science"],
    link: "https://www.coursera.org/account-profile",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    type: "Coursera",
    title: "Introduction to the Metaverse",
    issuer: "Meta",
    icon: Glasses,
    description:
      "Exploration of metaverse technologies, VR, AR, and the future of immersive digital experiences.",
    skills: ["Metaverse", "VR", "AR", "XR Technologies"],
    link: "https://www.coursera.org/account-profile",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    type: "Program",
    title: "Google Cloud Facilitator Program",
    issuer: "Google Cloud",
    icon: Cloud,
    description:
      "Comprehensive cloud computing training covering GCP services, architecture, and best practices.",
    skills: ["Google Cloud", "Cloud Architecture", "DevOps"],
    link: null,
    color: "from-green-500 to-teal-500",
  },
  {
    year: "2022",
    type: "Internship",
    title: "Blockchain Developer Intern",
    issuer: "Simplilearn",
    icon: Award,
    description:
      "Blockchain development certification covering smart contracts, DApps, and Ethereum ecosystem.",
    skills: ["Blockchain", "Solidity", "Ethereum", "Web3.js"],
    link: "https://simpli-web.app.link/e/VNwTa5PAXUb",
    color: "from-red-500 to-orange-500",
  },
  {
    year: "2021",
    type: "Internship",
    title: "Java Developer Intern",
    issuer: "Learnmall",
    icon: Award,
    description:
      "Java development focusing on core concepts, OOPs principles, and practical application development.",
    skills: ["Java", "OOPs", "JDBC", "File Handling"],
    link: "https://learnmall.in/cert/FHH963903",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
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
            Certifications & <span className="text-gradient">Programs</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning in cloud, AI, and blockchain technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-netflix p-6 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow`}>
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                    <Badge variant="secondary" className="text-xs">{cert.type}</Badge>
                  </div>
                  <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.slice(0, 4).map((skill) => (
                  <span key={skill} className="skill-badge text-xs py-1 px-2">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Link */}
              {cert.link && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" size="sm" asChild className="w-full btn-outline-glow">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
