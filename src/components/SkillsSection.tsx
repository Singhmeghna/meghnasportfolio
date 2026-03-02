import { motion } from "framer-motion";
import { Zap, Code2, GitBranch, FlaskConical, BarChart3, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Automation",
    icon: Zap,
    skills: ["pytest", "REST API Testing", "Postman", "SOAP UI", "Python/C# Backend Automation", "Protocol-Level Automation"],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C#", "MySQL", "JSON", "XML", "Multithreading", "Data Validation Scripts", "Telnet", "FTP/SFTP", "Logging"],
  },
  {
    title: "CI/CD & VCS",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "SVN", "Jira", "Confluence", "ServiceNow"],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    skills: ["Manual & Automated Testing", "Regression", "Integration", "Validation", "Stability & Reliability", "Test Planning", "Test Case Design", "Defect Tracking", "Error Handling"],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    skills: ["Root Cause Analysis", "Performance Tracking", "Metrics Dashboards", "System Monitoring", "Quality Metrics", "Defect Prevention", "Continuous Improvement"],
  },
  {
    title: "Methods",
    icon: Users,
    skills: ["Agile", "Scrum", "Waterfall", "Requirements Management", "Cross-Functional Collaboration"],
  },
];

const MarqueeRow = ({
  category,
  reverse = false,
  speed = 30,
}: {
  category: typeof skillCategories[number];
  reverse?: boolean;
  speed?: number;
}) => {
  const Icon = category.icon;
  // Duplicate items for seamless loop
  const items = [...category.skills, ...category.skills];

  return (
    <div className="group relative py-3 overflow-hidden">
      {/* Category label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-background via-background to-transparent pr-6 pl-1 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon size={16} className="text-primary" />
        </div>
        <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider whitespace-nowrap">
          {category.title}
        </span>
      </div>

      {/* Scrolling track */}
      <div className="ml-[160px]">
        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {items.map((skill, j) => (
            <span
              key={`${skill}-${j}`}
              className="flex-shrink-0 px-4 py-2 text-sm rounded-full border border-border bg-card text-foreground/80 font-medium hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(221 83% 53%) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Zap size={14} className="text-accent" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-semibold">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Technical <span className="text-gradient italic">arsenal</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Marquee rows */}
        <div className="space-y-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <MarqueeRow
                category={cat}
                reverse={i % 2 === 1}
                speed={25 + i * 5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
