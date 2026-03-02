import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Get in Touch</p>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Let's build
            <br />
            <span className="text-gradient italic">something great</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-14 max-w-md mx-auto leading-relaxed">
            Open to opportunities in QA Engineering, Test Automation, and Software Quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
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
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border text-foreground text-sm font-medium hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Singhmeghna"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border text-foreground text-sm font-medium hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm"
        >
          <Phone size={13} />
          226–961–2734
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
