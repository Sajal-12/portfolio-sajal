import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, PenLine, Send } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sajalvictorious83@gmail.com",
    href: "mailto:sajalvictorious83@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Sajal-12",
    href: "https://github.com/Sajal-12",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sajal Swapnil",
    href: "https://www.linkedin.com/in/sajal-swapnil-a93a741ba",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: PenLine,
    label: "Medium",
    value: "Technical Blog",
    href: "https://medium.com/@sajalvictorious83",
    color: "from-green-500 to-teal-500",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open for exciting opportunities, collaborations, and discussions about 
            backend systems, blockchain, or cloud architecture
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-netflix p-6 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                <p className="font-semibold group-hover:text-primary transition-colors truncate">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-netflix p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-xl font-semibold">Hajipur, Bihar, India</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Open to remote opportunities worldwide and relocation for the right role
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="btn-primary h-12 px-8 rounded-full">
                <a href="mailto:sajalvictorious83@gmail.com">
                  <Send size={18} className="mr-2" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
