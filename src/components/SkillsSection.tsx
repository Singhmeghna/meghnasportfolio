import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const skillCategories = [
  {
    title: "Automation",
    proficiency: 90,
    skills: ["pytest", "REST API Testing", "Postman", "SOAP UI", "Python/C# Backend Automation", "Protocol-Level Automation"],
  },
  {
    title: "Programming",
    proficiency: 85,
    skills: ["Python", "C#", "MySQL", "JSON", "XML", "Multithreading", "Data Validation Scripts", "Telnet", "FTP/SFTP", "Logging"],
  },
  {
    title: "CI/CD & VCS",
    proficiency: 80,
    skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "SVN", "Jira", "Confluence", "ServiceNow"],
  },
  {
    title: "Testing",
    proficiency: 95,
    skills: ["Manual & Automated Testing", "Regression", "Integration", "Validation", "Stability & Reliability", "Test Planning", "Test Case Design", "Defect Tracking", "Error Handling"],
  },
  {
    title: "Analytics",
    proficiency: 75,
    skills: ["Root Cause Analysis", "Performance Tracking", "Metrics Dashboards", "System Monitoring", "Quality Metrics", "Defect Prevention", "Continuous Improvement"],
  },
  {
    title: "Methods",
    proficiency: 85,
    skills: ["Agile", "Scrum", "Waterfall", "Requirements Management", "Cross-Functional Collaboration"],
  },
];

const radarData = skillCategories.map((cat) => ({
  subject: cat.title,
  value: cat.proficiency,
}));

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

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[420px] flex-shrink-0"
          >
            <div className="relative">
              <ResponsiveContainer width="100%" height={380}>
                <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                  <PolarGrid stroke="hsl(var(--border))" strokeWidth={0.5} />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: "hsl(var(--muted-foreground))",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Skill tags grouped by category */}
          <div className="flex-1 space-y-5">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-sm font-semibold text-foreground/80">{cat.title}</h3>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-primary font-bold">{cat.proficiency}%</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-transparent hover:border-primary/20 hover:bg-primary/5 hover:text-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
