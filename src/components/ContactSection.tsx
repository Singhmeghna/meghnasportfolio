import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background pointer-events-none" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Get in Touch</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Let's build
            <br />
            <span className="text-gradient italic">something great</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-md mx-auto leading-relaxed">
            Open to opportunities in QA Engineering, Test Automation, and Software Quality.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="mailto:smeghna20@outlook.com"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Send Email
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://linkedin.com/in/meghna-singh20"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border bg-card text-foreground text-sm font-medium hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="/Meghna_Singh_Resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border bg-card text-foreground text-sm font-medium hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
          <a href="https://github.com/Singhmeghna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Github size={14} />
            GitHub
          </a>
          <span className="flex items-center gap-1.5">
            <Phone size={13} />
            226–961–2734
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
