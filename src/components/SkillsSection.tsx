import { motion } from "framer-motion";
import { Zap, Cloud, Link2, Database, Code, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Languages",
    icon: Code,
    highlight: true,
    color: "from-orange-500 to-red-500",
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
    icon: Cloud,
    highlight: true,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "AWS", featured: true },
      { name: "Google Cloud", featured: true },
      { name: "Docker", featured: false },
      { name: "Kubernetes", featured: false },
      { name: "CI/CD", featured: false },
      { name: "Terraform", featured: false },
    ],
  },
  {
    title: "Blockchain & Web3",
    icon: Link2,
    highlight: true,
    color: "from-purple-500 to-pink-500",
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
    icon: Database,
    highlight: false,
    color: "from-green-500 to-emerald-500",
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
    icon: Zap,
    highlight: false,
    color: "from-yellow-500 to-orange-500",
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
    icon: Wrench,
    highlight: false,
    color: "from-gray-500 to-slate-500",
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
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Tech Arsenal</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Specialized in backend engineering, cloud architecture, and blockchain development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-2xl p-6 bg-card border transition-all duration-300 ${
                  category.highlight 
                    ? 'border-primary/30 hover:border-primary/50 hover:shadow-hover' 
                    : 'border-border/50 hover:border-border'
                }`}
              >
                {/* Gradient Accent */}
                {category.highlight && (
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity blur-xl`} />
                )}

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <h3 className={`font-bold text-lg ${category.highlight ? 'text-gradient' : ''}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className={`relative overflow-hidden ${
                          skill.featured 
                            ? `px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${category.color} text-white shadow-lg cursor-pointer`
                            : 'px-3 py-1.5 rounded-full text-sm bg-secondary/80 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 cursor-default transition-all'
                        }`}
                      >
                        <span className="relative z-10">{skill.name}</span>
                        {skill.featured && (
                          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        )}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Languages", value: "6+" },
            { label: "Cloud Platforms", value: "3+" },
            { label: "Frameworks", value: "10+" },
            { label: "Tools", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-card border border-border/50"
            >
              <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
