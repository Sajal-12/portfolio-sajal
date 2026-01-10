import { FileText, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center py-20">
        {/* Avatar */}
        <div className="avatar-ring w-28 h-28 mx-auto mb-8 rounded-full">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
            <span className="text-3xl font-bold text-gradient">SS</span>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Sajal Swapnil
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
          Blockchain & Full‑Stack Developer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-4">
          B.E. (Computer Science) | Passionate about Web3, Java, React, and
          building intuitive UI experiences.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin size={16} className="text-destructive" />
          <span>Hajipur, Bihar, India</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="bg-gradient-primary hover:opacity-90 shadow-soft">
            <a
              href="https://v0-resume-in-aarush-style.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} className="mr-2" />
              Resume
            </a>
          </Button>
          <Button variant="outline" asChild className="shadow-card">
            <a
              href="https://github.com/Sajal-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild className="shadow-card">
            <a
              href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
