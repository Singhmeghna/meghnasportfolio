import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6">
            QA & Test Automation Engineer
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-6">
            Meghna
            <br />
            <span className="text-gradient">Singh</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 font-light">
            Building reliable software through automation, rigorous testing, and quality-first engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <a
            href="mailto:smeghna20@outlook.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Mail size={16} />
            smeghna20@outlook.com
          </a>
          <a
            href="https://linkedin.com/in/meghna-singh20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Singhmeghna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={16} />
            Toronto, ON
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
