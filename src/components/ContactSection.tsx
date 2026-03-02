import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 bg-card" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Open to opportunities in QA Engineering, Test Automation, and Software Quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:smeghna20@outlook.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/meghna-singh20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm hover:border-primary/40 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Singhmeghna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm hover:border-primary/40 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm"
        >
          <Phone size={14} />
          226–961–2734
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
