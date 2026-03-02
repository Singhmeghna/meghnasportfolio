import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  metric: string;
  metricLabel: string;
}

const experiences: Experience[] = [
  {
    company: "Mercor",
    role: "Quality Systems Analyst",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    metric: "25%",
    metricLabel: "fewer rewrites",
    highlights: [
      "Elevated quality score from 3.5 to 4.2 via constraint-driven RL Studio prompts.",
      "Drove 30% increase in approval rate through structured answer keys.",
      "Standardized evaluation across 50+ procedural documents.",
    ],
  },
  {
    company: "Lumentum",
    role: "Test Automation Engineer",
    period: "Sep 2024 – Apr 2025",
    location: "Ottawa, ON",
    metric: "48%",
    metricLabel: "faster updates",
    highlights: [
      "Reduced firmware batch update time by 48% with Python-based QA automation.",
      "Cut device setup time by 46% automating calibration in C#/Python.",
      "Improved efficiency by 40% with C# desktop tools in production.",
    ],
  },
  {
    company: "Wipro Limited",
    role: "Software Developer Engineer (Testing)",
    period: "Jul 2021 – Jul 2023",
    location: "New Delhi, India",
    metric: "1000+",
    metricLabel: "users served",
    highlights: [
      "Improved system reliability across 12+ SAP integrations.",
      "Increased data accuracy across 50+ interfaces.",
      "Accelerated QA onboarding by 30% via Confluence documentation.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-32 px-6 relative" id="experience">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Career</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Where I've <span className="text-gradient italic">worked</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Metric highlight */}
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 flex flex-col items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-gradient">{exp.metric}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{exp.metricLabel}</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold group-hover:text-gradient transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{exp.role}</p>
                    </div>
                    <div className="text-muted-foreground text-xs mt-2 md:mt-0 md:text-right flex flex-col gap-1">
                      <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
