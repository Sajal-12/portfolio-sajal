const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Solidity", "Python"],
  },
  {
    title: "Frontend Frameworks",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", "Flask"],
  },
  {
    title: "Blockchain & Web3",
    skills: ["Solidity", "Smart Contracts", "DApps", "Web3.js", "Ethereum"],
  },
  {
    title: "Mobile Development",
    skills: ["Android", "Java", "Kotlin", "React Native"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Google Cloud", "Redis"],
  },
  {
    title: "AI & Analytics",
    skills: ["ChatGPT", "Gemini", "Prompt Engineering", "Google Analytics", "Machine Learning"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Digital Marketing", "SEO", "Performance Optimization"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold mb-4 text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
