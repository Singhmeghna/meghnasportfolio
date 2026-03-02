import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Mercor",
    role: "Quality Systems Analyst",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    highlights: [
      "Elevated quality score from 3.5 to 4.2 and reduced rewrites by 25% via constraint-driven RL Studio prompts.",
      "Drove a 30% increase in approval rate through structured answer keys and model alignment validation.",
      "Standardized evaluation across 50+ procedural documents by enforcing rubric compliance.",
    ],
  },
  {
    company: "Lumentum",
    role: "Test Automation Engineer",
    period: "Sep 2024 – Apr 2025",
    location: "Ottawa, ON",
    highlights: [
      "Reduced firmware batch update time by 48% with a Python-based QA automation system.",
      "Cut device setup time by 46% by automating calibration file generation in C#/Python.",
      "Improved setup efficiency by 40% with C# desktop tools integrated into production workflows.",
    ],
  },
  {
    company: "Wipro Limited",
    role: "Software Developer Engineer (Testing)",
    period: "Jul 2021 – Jul 2023",
    location: "New Delhi, India",
    highlights: [
      "Improved system reliability for 1,000+ users across 12+ SAP integrations.",
      "Increased data accuracy across 50+ interfaces through manual and integration testing.",
      "Accelerated QA onboarding by 30% via comprehensive documentation in Confluence.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-32 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Experience</h2>
          <div className="section-divider mb-16" />
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-semibold group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-secondary-foreground text-sm mt-1">{exp.role}</p>
                </div>
                <div className="text-muted-foreground text-sm mt-2 md:mt-0 md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3 border-l border-border pl-5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed relative before:absolute before:-left-[21px] before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40">
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
