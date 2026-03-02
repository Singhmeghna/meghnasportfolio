import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Briefcase, Building2, MapPin, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  tagline: string;
  current?: boolean;
  highlights: { text: string; metric?: string }[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Mercor",
    role: "Quality Systems Analyst (Contract)",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    tagline: "Raising the bar on AI quality evaluation at scale",
    current: true,
    highlights: [
      { text: "Elevated model quality score from 3.5 to 4.2 and reduced rewrites by 25% by architecting constraint-driven RL Studio prompts to evaluate LLM outputs against 100+ page enterprise technical manuals.", metric: "↑ 20% quality" },
      { text: "Drove a 30% increase in approval rates by developing structured answer keys and executing rigorous model alignment audits.", metric: "30% ↑ approvals" },
      { text: "Standardized evaluation across 50+ procedural documents by strengthening Golden Responses and enforcing rubric compliance.", metric: "50+ docs" },
    ],
    skills: ["LLM Evaluation", "Prompt Engineering", "Quality Assurance", "Rubric Design", "AI Model Validation", "RL Studio"],
  },
  {
    company: "Lumentum",
    role: "Test Automation Engineer (Co-op)",
    period: "Sep 2024 – Apr 2025",
    location: "Ottawa, ON",
    tagline: "Automating firmware QA for photonics hardware at enterprise scale",
    highlights: [
      { text: "Reduced firmware batch update time by 48% by developing a Python-based QA automation system with pytest validation, REST API testing, and traceable logging for 30+ devices.", metric: "48% faster" },
      { text: "Cut device setup time by 46% by automating calibration file generation in C#/Python with Protobuf and database integration.", metric: "46% faster" },
      { text: "Improved setup efficiency by 40% by creating C# desktop tools with safety checks, UI presets, and read-back validation.", metric: "40% ↑ efficiency" },
    ],
    skills: ["Python", "C#", "pytest", "REST API Testing", "Protobuf", "SQL", "Firmware QA", "CI/CD"],
  },
  {
    company: "Wipro Limited",
    role: "Software Developer Engineer (Testing)",
    period: "Jul 2021 – Jul 2023",
    location: "New Delhi, India",
    tagline: "Ensuring enterprise-grade reliability across SAP ecosystems",
    highlights: [
      { text: "Improved system reliability for 1,000+ users by designing QA test plans for 12+ SAP and non-SAP integrations with functional, regression, and validation testing.", metric: "1000+ users" },
      { text: "Increased data accuracy across 50+ interfaces by leading integration testing and collaborating with development to resolve inconsistencies.", metric: "50+ interfaces" },
      { text: "Accelerated QA onboarding by 30% by documenting workflows and architecture in Confluence and Visio.", metric: "30% faster" },
    ],
    skills: ["SAP PI/PO", "REST API", "Postman", "Integration Testing", "Regression Testing", "Jira", "Agile", "QA Documentation"],
  },
];

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 relative" id="experience">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase size={14} className="text-primary" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Career</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Proven <span className="text-gradient italic">impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Every role has been about one thing: making software you can trust.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isExpanded = expandedIndex === i;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[13px] md:left-[17px] top-7 w-[13px] h-[13px] rounded-full border-2 z-10 transition-colors duration-300 ${
                    exp.current
                      ? "bg-primary border-primary shadow-lg shadow-primary/30"
                      : isExpanded
                        ? "bg-primary/80 border-primary/80"
                        : "bg-card border-muted-foreground/30"
                  }`}>
                    {exp.current && (
                      <span className="absolute -inset-1 rounded-full bg-primary/20 animate-ping" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`group bg-card rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer ${
                      isExpanded
                        ? "border-primary/30 shadow-xl shadow-primary/5"
                        : "border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                    }`}
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  >
                    {/* Collapsed header — always visible */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {exp.current && (
                              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full bg-primary/15 text-primary border border-primary/20">
                                Current
                              </span>
                            )}
                            <span className="text-muted-foreground text-xs flex items-center gap-1">
                              <Calendar size={11} />
                              {exp.period}
                            </span>
                            <span className="text-muted-foreground/50 hidden sm:inline">·</span>
                            <span className="text-muted-foreground text-xs flex items-center gap-1 hidden sm:flex">
                              <MapPin size={11} />
                              {exp.location}
                            </span>
                          </div>

                          <h3 className="text-2xl font-serif font-bold group-hover:text-gradient transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-foreground/70 text-sm">{exp.role}</p>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 mt-2"
                        >
                          <ChevronDown size={20} className="text-muted-foreground" />
                        </motion.div>
                      </div>

                      <p className="text-accent/80 italic text-sm font-serif mt-2">{exp.tagline}</p>
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8">
                            <div className="h-px bg-border mb-6" />

                            {/* Highlights */}
                            <div className="space-y-3 mb-6">
                              {exp.highlights.map((h, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.08 }}
                                  className="flex items-start gap-3"
                                >
                                  <span className="flex-shrink-0 w-[100px] inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[11px] font-semibold whitespace-nowrap mt-0.5 border border-accent/20">
                                    <TrendingUp size={10} />
                                    {h.metric}
                                  </span>
                                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{h.text}</p>
                                </motion.div>
                              ))}
                            </div>

                            {/* Skills */}
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold mb-2">Skills & Tools</p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((skill) => (
                                  <span key={skill} className="px-2.5 py-1 text-[10px] rounded-full bg-secondary text-secondary-foreground font-medium">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
