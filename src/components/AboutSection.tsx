import { Briefcase, GraduationCap, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const roles = [
  "Blockchain Developer",
  "Full-Stack Developer",
  "Open Source Contributor",
  "Technical Writer",
];

const infoCards = [
  { icon: GraduationCap, label: "Education", value: "B.E. Computer Science" },
  { icon: Briefcase, label: "University", value: "Chandigarh University" },
  { icon: Users, label: "Year", value: "2020–2024" },
  { icon: MapPin, label: "Location", value: "Bihar, India" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>

        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a passionate Blockchain and Full-Stack Developer with a B.E. in
            Computer Science from Chandigarh University (2020–2024). I specialize
            in Web3 technologies, React development, and creating innovative
            solutions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Currently focused on blockchain development, smart contracts, and
            building decentralized applications. I'm also active in the
            open-source community with contributions to 70+ GitHub repositories.
          </p>
        </div>

        {/* Roles */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role) => (
            <span key={role} className="skill-badge bg-gradient-primary text-primary-foreground">
              {role}
            </span>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map((item) => (
            <Card key={item.label} className="card-hover bg-gradient-card">
              <CardContent className="p-6 text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
