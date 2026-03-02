import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full border border-primary/10 animate-float" />
      <div className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full border border-accent/10 animate-float-reverse" />
      <div className="absolute top-[40%] right-[8%] w-3 h-3 rounded-full bg-primary/30 glow-dot animate-float" />
      <div className="absolute top-[25%] left-[12%] w-2 h-2 rounded-full bg-accent/30 glow-dot animate-float-reverse" />

      {/* Large faded initial */}
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
            className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-10 font-light"
          >
            QA & Test Automation Engineer who turns{" "}
            <span className="text-foreground font-medium">chaos into confidence</span> —
            shipping reliable, battle-tested software at scale.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3 flex-wrap mb-6"
        >
          <a
            href="/Meghna_Singh_Resume.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            href="mailto:smeghna20@outlook.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-sm font-medium"
          >
            <Mail size={15} className="text-primary" />
            Get in Touch
          </a>
        </motion.div>

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
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
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
          className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "48%", label: "Efficiency Gains" },
            { value: "1000+", label: "Users Impacted" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
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
