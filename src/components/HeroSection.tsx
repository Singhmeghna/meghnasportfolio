import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 bg-gradient-hero">
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full border border-primary/10 animate-float" />
      <div className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full border border-accent/10 animate-float-reverse" />
      <div className="absolute top-[40%] right-[8%] w-3 h-3 rounded-full bg-primary/30 glow-dot animate-float" />
      <div className="absolute top-[25%] left-[12%] w-2 h-2 rounded-full bg-accent/30 glow-dot animate-float-reverse" />
      <div className="absolute bottom-[30%] right-[20%] w-2 h-2 rounded-full bg-primary/20 glow-dot animate-float" />

      {/* Large faded initial behind name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[28rem] font-serif font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
        M
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-sans text-xs tracking-wider uppercase font-medium">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tight mb-2 leading-[0.9]">
            Meghna
          </h1>
          <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tight mb-8 leading-[0.9]">
            <span className="text-gradient">Singh</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-12 font-light"
          >
            QA & Test Automation Engineer crafting{" "}
            <span className="text-foreground font-medium">reliable</span>,{" "}
            <span className="text-foreground font-medium">scalable</span> software
            through quality-first engineering.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {[
            { icon: Mail, label: "Email", href: "mailto:smeghna20@outlook.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/meghna-singh20" },
            { icon: Github, label: "GitHub", href: "https://github.com/Singhmeghna" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-sm"
            >
              <Icon size={15} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex items-center justify-center gap-2 text-muted-foreground/60 text-sm"
        >
          <MapPin size={13} />
          Toronto, ON
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#experience"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-primary transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
