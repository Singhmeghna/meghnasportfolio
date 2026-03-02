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
          className="relative bg-gradient-to-br from-[#F59E0B]/5 via-[#D97706]/5 to-transparent rounded-3xl border border-[#F59E0B]/15 overflow-hidden"
        >
          {/* Gold-amber background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F59E0B]/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D97706]/10 to-transparent rounded-tr-full pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Award icon */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg shadow-[#F59E0B]/15 border-2 border-[#F59E0B]/20">
                <img src={awardIcon} alt="Award trophy" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Award content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Recognition</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Habit Flagbearer – <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] to-[#D97706]">Building Trust Award</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Honored at <span className="text-foreground font-medium">Wipro (Jun 2022)</span> for leading three SAP PI/PO projects as Point of Contact, 
                strengthening cross-team collaboration and delivery reliability across multiple business units.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Award size={12} className="text-[#F59E0B]" />
                  Leadership Excellence
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={12} className="text-[#D97706]" />
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
