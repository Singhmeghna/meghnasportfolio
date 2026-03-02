import { motion } from "framer-motion";
import { Quote, Linkedin, Star, Sparkles } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";

interface Recommendation {
  name: string;
  title: string;
  relationship: string;
  date: string;
  text: string;
  initials: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Selina Patra",
    title: "Project Manager @ Wipro Limited",
    relationship: "Senior colleague",
    date: "August 2023",
    text: "Meghna is a technically very strong IT professional with a great attitude towards the team and work. Her commitment and diligence makes her an individual asset to any team. She takes enormous pride in her work and takes accountability for delivering quality products. My best wishes for grant success.",
    initials: "SP",
  },
  {
    name: "Kiran Vaddina",
    title: "SAP Delivery Manager",
    relationship: "Senior colleague",
    date: "August 2023",
    text: "Meghna is a quick learner and has a positive attitude. She is dedicated and very much inclined towards her work. She will be a good asset to the project.",
    initials: "KV",
  },
];

const RecommendationsSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="recommendations">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={testimonialBg} alt="" className="w-full h-full object-cover opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating LinkedIn-blue orbs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#0077B5]/[0.06] blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0077B5]/[0.04] blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077B5]/10 border border-[#0077B5]/20 mb-6">
            <Linkedin size={14} className="text-[#0077B5]" />
            <span className="text-[#0077B5] text-xs tracking-[0.2em] uppercase font-semibold">
              LinkedIn Recommendations
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            What <span className="italic" style={{ color: '#0077B5' }}>leaders</span> say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trusted by senior professionals who've witnessed the impact firsthand.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-[#0077B5]/40 to-transparent w-32 mt-6 mx-auto" />
        </motion.div>

        {/* Recommendation Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-card rounded-3xl border border-border overflow-hidden hover:border-[#0077B5]/30 hover:shadow-2xl hover:shadow-[#0077B5]/10 transition-all duration-500">
                {/* Top LinkedIn-blue gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#0077B5] via-[#00A0DC] to-[#0077B5]/30" />

                <div className="p-8 md:p-10">
                  {/* LinkedIn icon + quote */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <Quote size={44} className="text-[#0077B5]/15" fill="currentColor" />
                      <Quote size={44} className="text-[#0077B5]/10 absolute top-1 left-1" fill="currentColor" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#0077B5]/10 flex items-center justify-center group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                      <Linkedin size={18} className="text-[#0077B5] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground/80 text-base leading-[1.8] mb-8 relative z-10 font-light italic pl-4 border-l-2 border-[#0077B5]/25">
                    "{rec.text}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-[#F5C518] fill-[#F5C518]" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                    {/* Avatar with LinkedIn-blue gradient */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0077B5] to-[#00A0DC] flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg shadow-[#0077B5]/25 ring-2 ring-[#0077B5]/20 ring-offset-2 ring-offset-card">
                      {rec.initials}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">{rec.name}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{rec.title}</p>
                      <span className="text-[10px] text-[#0077B5]/60 uppercase tracking-wider font-medium mt-1 inline-block">
                        {rec.relationship} · {rec.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-[#0077B5]/[0.04] to-transparent pointer-events-none rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://linkedin.com/in/meghna-singh20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0077B5] text-white text-sm font-semibold hover:bg-[#005f8d] hover:shadow-xl hover:shadow-[#0077B5]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            View all on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
