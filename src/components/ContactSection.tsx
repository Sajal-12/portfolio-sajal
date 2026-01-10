import { Github, Linkedin, Mail, MapPin, PenLine } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sajalvictorious83@gmail.com",
    href: "mailto:sajalvictorious83@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Sajal-12",
    href: "https://github.com/Sajal-12",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sajal Swapnil",
    href: "https://www.linkedin.com/in/sajal-swapnil-a93a741ba",
  },
  {
    icon: PenLine,
    label: "Medium",
    value: "Technical Blog",
    href: "https://medium.com/@sajalvictorious83",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hajipur, Bihar, India",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Get In Touch</h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
          <p className="text-muted-foreground">
            I'm always interested in new opportunities, exciting projects, and
            collaborations. Whether you have a question about blockchain
            development, want to discuss a project, or just want to connect, feel
            free to reach out!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
            <Card key={link.label} className="card-hover bg-gradient-card">
              <CardContent className="p-6">
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                      <link.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                      <link.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
