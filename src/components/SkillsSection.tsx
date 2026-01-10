import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & Languages",
    highlight: true,
    skills: [
      { name: "Go (Golang)", featured: true },
      { name: "Java", featured: true },
      { name: "Python", featured: true },
      { name: "TypeScript", featured: false },
      { name: "SQL", featured: false },
      { name: "Solidity", featured: true },
    ],
  },
  {
    title: "Cloud & DevOps",
    highlight: true,
    skills: [
      { name: "AWS", featured: true },
      { name: "Google Cloud", featured: true },
      { name: "Docker", featured: false },
      { name: "Kubernetes", featured: false },
      { name: "CI/CD", featured: false },
      { name: "Redis", featured: false },
    ],
  },
  {
    title: "Blockchain & Web3",
    highlight: true,
    skills: [
      { name: "Blockchain", featured: true },
      { name: "Smart Contracts", featured: true },
      { name: "Ethereum", featured: true },
      { name: "Web3.js", featured: false },
      { name: "DApps", featured: false },
      { name: "NFTs", featured: false },
    ],
  },
  {
    title: "Databases",
    highlight: false,
    skills: [
      { name: "MongoDB", featured: false },
      { name: "PostgreSQL", featured: false },
      { name: "MySQL", featured: false },
      { name: "Redis", featured: false },
      { name: "Supabase", featured: false },
    ],
  },
  {
    title: "Frontend",
    highlight: false,
    skills: [
      { name: "React.js", featured: false },
      { name: "Next.js", featured: false },
      { name: "Tailwind CSS", featured: false },
      { name: "TypeScript", featured: false },
      { name: "HTML/CSS", featured: false },
    ],
  },
  {
    title: "Tools & Platforms",
    highlight: false,
    skills: [
      { name: "Git", featured: false },
      { name: "GitHub", featured: false },
      { name: "Postman", featured: false },
      { name: "VS Code", featured: false },
      { name: "Linux", featured: false },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative overflow-hidden">
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
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Specialized in backend engineering, cloud architecture, and blockchain development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`card-netflix p-6 ${category.highlight ? 'border-primary/30' : ''}`}
            >
              <h3 className={`font-bold text-lg mb-5 ${category.highlight ? 'text-gradient' : ''}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={skill.featured ? "skill-badge-highlight" : "skill-badge"}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
