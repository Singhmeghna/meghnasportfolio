import { motion } from "framer-motion";
import awardIcon from "@/assets/award-icon.jpg";
import { Award, Star } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="py-20 px-6" id="awards">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-3xl border border-primary/15 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg shadow-primary/10 border-2 border-primary/20">
                <img src={awardIcon} alt="Award trophy" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F5C518] fill-[#F5C518]" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Recognition</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Habit Flagbearer – <span className="text-gradient">Building Trust Award</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Honored at <span className="text-foreground font-medium">Wipro (Jun 2022)</span> for leading three SAP PI/PO projects as Point of Contact, 
                strengthening cross-team collaboration and delivery reliability across multiple business units.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Award size={12} className="text-primary" />
                  Leadership Excellence
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={12} className="text-accent" />
                  Cross-Team Collaboration
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardSection;
