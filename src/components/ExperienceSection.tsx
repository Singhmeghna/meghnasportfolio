import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  tagline: string;
  highlights: { text: string; metric?: string }[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    company: "Mercor",
    role: "Quality Systems Analyst (Contract)",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    tagline: "Raising the bar on AI quality evaluation at scale",
    highlights: [
      { text: "Elevated quality score from 3.5 → 4.2 by designing constraint-driven RL Studio prompts evaluating LLM outputs against 100+ page technical manuals.", metric: "↑ 20% quality" },
      { text: "Drove a 30% increase in approval rate by producing structured answer keys and validating model alignment.", metric: "30% ↑ approvals" },
      { text: "Standardized evaluation across 50+ procedural documents by strengthening Golden Responses and enforcing rubric compliance.", metric: "50+ docs" },
    ],
    tags: ["LLM Evaluation", "RL Studio", "Quality Assurance", "Documentation Review"],
  },
  {
    company: "Lumentum",
    role: "Test Automation Engineer (Co-op)",
    period: "Sep 2024 – Apr 2025",
    location: "Ottawa, ON",
    tagline: "Automating firmware QA for photonics hardware at enterprise scale",
    highlights: [
      { text: "Reduced firmware batch update time by 48% — built a Python-based QA automation system with pytest validation, REST API testing, retry/rollback logic for 30+ devices.", metric: "48% faster" },
      { text: "Cut device setup time by 46% by automating calibration file generation in C#/Python with Protobuf and database integration.", metric: "46% faster" },
      { text: "Improved setup efficiency by 40% and eliminated manual input errors with C# desktop tools, safety checks, and read-back validation.", metric: "40% ↑ efficiency" },
      { text: "Enhanced device reliability by testing performance across 5–65°C and ±2.4V, logging drift data and collaborating with R&D.", metric: "Temp range QA" },
    ],
    tags: ["Python", "C#", "pytest", "REST API", "Protobuf", "CI/CD", "Firmware QA"],
  },
  {
    company: "Wipro Limited",
    role: "Software Developer Engineer (Testing & Integration)",
    period: "Jul 2021 – Jul 2023",
    location: "New Delhi, India",
    tagline: "Ensuring enterprise-grade reliability across SAP ecosystems",
    highlights: [
      { text: "Improved system reliability for 1,000+ users by designing and executing QA test plans for 12+ SAP and non-SAP integrations — functional, regression, and validation testing.", metric: "1000+ users" },
      { text: "Increased data accuracy across 50+ interfaces by leading manual and integration testing, performing defect triage, and resolving inconsistencies.", metric: "50+ interfaces" },
      { text: "Reduced downtime by resolving SAP PI/PO incidents via regression-tested hotfixes, root-cause analysis, and QA coordination.", metric: "↓ Downtime" },
      { text: "Expanded API coverage and improved observability by validating REST and SOAP integrations using Postman and SOAP UI.", metric: "API coverage ↑" },
      { text: "Accelerated QA onboarding by 30% by documenting workflows and architecture in Confluence and Visio.", metric: "30% faster" },
    ],
    tags: ["SAP PI/PO", "Postman", "SOAP UI", "Integration Testing", "Jira", "Agile"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-32 px-6 relative" id="experience">
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
            Proven <span className="text-gradient italic">impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Every role has been about one thing: making software you can trust.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/20" />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-3xl font-serif font-bold group-hover:text-gradient transition-all duration-300">
                        {exp.company}
                      </h3>
                      <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-foreground/80 text-sm font-medium">{exp.role}</p>
                  </div>
                  <div className="text-muted-foreground text-xs mt-3 md:mt-0 md:text-right flex flex-col gap-1.5">
                    <span className="inline-flex px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-primary/80 italic text-sm mb-6 font-serif">{exp.tagline}</p>

                {/* Highlights with metrics */}
                <div className="space-y-4 mb-6">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-4">
                      {h.metric && (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/8 text-primary text-[11px] font-semibold whitespace-nowrap mt-0.5 border border-primary/10">
                          <TrendingUp size={10} />
                          {h.metric}
                        </span>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-secondary text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
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
