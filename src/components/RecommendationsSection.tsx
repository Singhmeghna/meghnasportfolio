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
        <img
          src={testimonialBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">
              LinkedIn Recommendations
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            What <span className="text-gradient italic">leaders</span> say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trusted by senior professionals who've witnessed the impact firsthand.
          </p>
          <div className="section-divider mt-6 mx-auto" />
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
              {/* Card */}
              <div className="relative bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary/30" />

                <div className="p-8 md:p-10">
                  {/* Large quote icon */}
                  <div className="mb-6 relative">
                    <Quote
                      size={48}
                      className="text-primary/15 absolute -top-2 -left-1"
                      fill="currentColor"
                    />
                    <Quote
                      size={48}
                      className="text-primary/10 absolute -top-1 left-1"
                      fill="currentColor"
                    />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground/80 text-base leading-relaxed mb-8 relative z-10 font-light italic pl-2 border-l-2 border-primary/20">
                    "{rec.text}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="text-primary fill-primary"
                      />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-serif font-bold text-lg shadow-lg shadow-primary/20">
                      {rec.initials}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        {rec.name}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {rec.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wider">
                          {rec.relationship} · {rec.date}
                        </span>
                      </div>
                    </div>

                    {/* LinkedIn badge */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0077B5]/10 flex items-center justify-center group-hover:bg-[#0077B5]/20 transition-colors">
                      <Linkedin size={16} className="text-[#0077B5]" />
                    </div>
                  </div>
                </div>

                {/* Subtle corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/[0.04] to-transparent pointer-events-none rounded-tl-full" />
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
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/meghna-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <Linkedin size={16} />
            View all recommendations on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
