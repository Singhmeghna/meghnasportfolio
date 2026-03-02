import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowDown, Download, Sparkles, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-background to-accent/[0.06]" />
      <motion.div
        className="absolute top-0 right-0 w-[70%] h-[70%] rounded-bl-[60%]"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, hsl(221 83% 53% / 0.08), transparent 60%)' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-tr-[60%]"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, hsl(173 58% 39% / 0.06), transparent 60%)' }}
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating geometric decorations */}
      <motion.div
        className="absolute top-24 right-[18%] w-64 h-64 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-28 left-[8%] w-40 h-40 rounded-full border border-accent/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-[35%] right-[10%] w-3 h-3 rounded-full bg-primary/40 glow-dot animate-float" />
      <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-accent/50 glow-dot animate-float-reverse" />
      <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-primary/30 animate-float" />

      {/* Faded monogram */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22rem] md:text-[30rem] font-serif font-bold text-primary/[0.03] select-none pointer-events-none leading-none">
        M
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Profile photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background overflow-hidden shadow-2xl shadow-primary/20 animate-pulse-glow">
              <img src="/meghna-photo.jpeg" alt="Meghna Singh" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-10 shadow-lg shadow-primary/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-foreground/80 font-sans text-xs tracking-wider uppercase font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tight mb-2 leading-[0.9]">
            Meghna
          </h1>
          <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tight mb-8 leading-[0.9]">
            <span className="text-gradient">Singh</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-12 font-light"
          >
            QA & Test Automation Engineer who turns{" "}
            <span className="text-foreground font-medium">chaos into confidence</span> —
            shipping reliable, battle-tested software at scale.
          </motion.p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-8"
        >
          <a
            href="/Meghna_Singh_Resume.pdf"
            download
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            href="mailto:smeghna20@outlook.com"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full glass-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-sm font-medium hover:-translate-y-0.5"
          >
            <Mail size={15} className="text-primary" />
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/meghna-singh20" },
            { icon: Github, label: "GitHub", href: "https://github.com/Singhmeghna" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 text-sm"
            >
              <Icon size={15} />
              <span>{label}</span>
            </a>
          ))}
          <span className="flex items-center gap-2 text-muted-foreground/60 text-sm">
            <MapPin size={13} />
            Toronto, ON
          </span>
        </motion.div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[
            { value: "3+", label: "Years Experience", icon: Zap },
            { value: "48%", label: "Efficiency Gains", icon: Sparkles },
            { value: "1000+", label: "Users Impacted", icon: Shield },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-2xl py-5 px-3 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <stat.icon size={16} className="text-primary mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-serif font-bold text-gradient">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
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
