import { motion } from "framer-motion";
import { TrendingUp, Briefcase, MapPin, Calendar, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  company: string;
  role: string;
  period: string;
  location: string;
  tagline?: string;
  current?: boolean;
  gpa?: string;
  highlights?: { text: string; metric?: string }[];
  skills?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    company: "Mercor",
    role: "Quality Systems Analyst (Documentation & Procedures) (Contract)",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    tagline: "Raising the bar on AI quality evaluation at scale",
    current: true,
    highlights: [
      { text: "Architected RL Studio prompts that lifted model quality scores from 3.5 → 4.2 and cut rewrites by 25%.", metric: "↑ 20% quality" },
      { text: "Developed structured answer keys and alignment audits, driving a 30% jump in approval rates.", metric: "30% ↑ approvals" },
      { text: "Standardized evaluation across 50+ procedural documents with enforced rubric compliance.", metric: "50+ docs" },
    ],
    skills: ["LLM Evaluation", "Prompt Engineering", "Quality Assurance", "Requirements Analysis", "Rubric Design", "Documentation Governance", "Test Case Design", "AI Model Validation", "RL Studio"],
  },
  {
    type: "work",
    company: "Lumentum",
    role: "Test Automation Engineer (Co-op)",
    period: "Sep 2024 – Apr 2025",
    location: "Ottawa, ON",
    tagline: "Automating firmware QA for photonics hardware at enterprise scale",
    highlights: [
      { text: "Built a Python automation system that cut firmware batch updates by 48% across 30+ devices.", metric: "48% faster" },
      { text: "Automated test data processing and calibration in C#/Python, reducing device setup time by 46%.", metric: "46% faster" },
      { text: "Created C# desktop tools with safety checks and UI presets, boosting setup efficiency by 40%.", metric: "40% ↑ efficiency" },
      { text: "Validated device performance across 5–65°C and ±2.4V, collaborating with R&D on accuracy.", metric: "Temp range QA" },
      { text: "Ran stability testing across 5–50°C to catch early risks and ensure long-term reliability.", metric: "Safety validation" },
    ],
    skills: ["Python", "C#", "pytest", "REST API Testing", "Telnet/FTP", "Logging", "Protobuf", "SQL", "Firmware QA", "Production Testing", "Manual Testing", "Test Planning", "Automation Framework Integration (C#)", "CI/CD", "Jira", "Confluence"],
  },
  {
    type: "education",
    company: "University of Windsor",
    role: "Master of Applied Computing",
    period: "Sep 2023 – Apr 2025",
    location: "Windsor, ON",
    gpa: "85%",
  },
  {
    type: "work",
    company: "Wipro Limited",
    role: "Software Developer Engineer (Testing & Integration)",
    period: "Jul 2021 – Jul 2023",
    location: "New Delhi, India",
    tagline: "Ensuring enterprise-grade reliability across SAP ecosystems",
    highlights: [
      { text: "Designed QA test plans for 12+ SAP integrations, ensuring defect-free releases for 1,000+ users.", metric: "1000+ users" },
      { text: "Led integration testing across 50+ interfaces, triaging defects and resolving data inconsistencies.", metric: "50+ interfaces" },
      { text: "Resolved SAP PI/PO incidents with regression-tested hotfixes and root-cause analysis.", metric: "↓ Downtime" },
      { text: "Validated REST and SOAP APIs with Postman and configured automated monitoring.", metric: "API coverage ↑" },
      { text: "Documented QA workflows in Confluence and Visio, speeding up onboarding by 30%.", metric: "30% faster" },
    ],
    skills: ["SAP PI/PO", "REST API", "SOAP UI", "Postman", "Integration Testing", "Regression Testing", "Manual Testing", "Performance Testing", "Test Planning", "Defect Triage", "Root Cause Analysis", "Jira", "Confluence", "Visio", "Agile", "QA Documentation"],
  },
  {
    type: "education",
    company: "SRM Institute of Science & Technology",
    role: "B.Tech in Computer Science",
    period: "Jun 2017 – Jun 2021",
    location: "Chennai, India",
    gpa: "84%",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6 relative" id="experience">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase size={14} className="text-primary" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Career</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
            Proven <span className="text-gradient italic">impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Every role has been about one thing: making software you can trust.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item) => {
              const isEducation = item.type === "education";

              return (
                <div key={item.company} className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className={`absolute left-[13px] md:left-[17px] top-7 w-[13px] h-[13px] rounded-full border-2 z-10 transition-colors duration-300 ${
                    item.current
                      ? "bg-primary border-primary shadow-lg shadow-primary/30"
                      : isEducation
                        ? "bg-accent/80 border-accent/80"
                        : "bg-primary/60 border-primary/60"
                  }`}>
                    {item.current && (
                      <span className="absolute -inset-1 rounded-full bg-primary/20 animate-ping" />
                    )}
                  </div>

                  {isEducation ? (
                    <div className="group bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full bg-accent/15 text-accent border border-accent/20 flex items-center gap-1">
                              <GraduationCap size={10} />
                              Education
                            </span>
                            <span className="text-muted-foreground text-xs flex items-center gap-1">
                              <Calendar size={11} />
                              {item.period}
                            </span>
                            <span className="text-muted-foreground/50 hidden sm:inline">·</span>
                            <span className="text-muted-foreground text-xs items-center gap-1 hidden sm:flex">
                              <MapPin size={11} />
                              {item.location}
                            </span>
                          </div>
                          <h3 className="text-2xl font-serif font-bold group-hover:text-gradient transition-colors">
                            {item.company}
                          </h3>
                          <p className="text-foreground/70 text-sm">{item.role}</p>
                        </div>
                        {item.gpa && (
                          <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                            <Award size={12} className="text-accent" />
                            <span className="text-xs font-semibold text-accent">GPA: {item.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                      <div className="p-6 md:p-8 pb-4 md:pb-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              {item.current && (
                                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full bg-primary/15 text-primary border border-primary/20">
                                  Current
                                </span>
                              )}
                              <span className="text-muted-foreground text-xs flex items-center gap-1">
                                <Calendar size={11} />
                                {item.period}
                              </span>
                              <span className="text-muted-foreground/50 hidden sm:inline">·</span>
                              <span className="text-muted-foreground text-xs items-center gap-1 hidden sm:flex">
                                <MapPin size={11} />
                                {item.location}
                              </span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold group-hover:text-gradient transition-colors">
                              {item.company}
                            </h3>
                            <p className="text-foreground/70 text-sm">{item.role}</p>
                          </div>
                        </div>
                        {item.tagline && (
                          <p className="text-foreground/70 italic text-sm font-serif mt-2">{item.tagline}</p>
                        )}
                      </div>

                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {item.highlights?.map((h, j) => (
                            <div
                              key={j}
                              className="rounded-xl bg-secondary/50 border border-border p-4 hover:border-primary/20 hover:bg-secondary/80 transition-all duration-300 flex flex-col"
                            >
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-accent/10 text-accent text-[11px] font-bold border border-accent/20 w-fit mb-3">
                                <TrendingUp size={10} />
                                {h.metric}
                              </span>
                              <p className="text-muted-foreground text-xs leading-relaxed flex-1">{h.text}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-border">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold mb-2">Skills & Tools</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills?.map((skill) => (
                              <span key={skill} className="px-2.5 py-1 text-[10px] rounded-full bg-secondary text-secondary-foreground font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
