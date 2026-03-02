import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Automation",
    icon: "⚡",
    skills: ["pytest", "REST API Testing", "Postman", "SOAP UI", "Python/C# Automation", "Protocol-Level"],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python", "C#", "MySQL", "JSON/XML", "Multithreading", "Telnet/FTP"],
  },
  {
    title: "CI/CD & Tools",
    icon: "🔧",
    skills: ["Git", "GitHub", "Jenkins", "Docker", "Jira", "Confluence", "ServiceNow"],
  },
  {
    title: "Testing",
    icon: "🧪",
    skills: ["Manual & Automated", "Regression", "Integration", "Validation", "Test Planning", "Defect Tracking"],
  },
  {
    title: "Analytics",
    icon: "📊",
    skills: ["Root Cause Analysis", "Performance Tracking", "Metrics Dashboards", "System Monitoring"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="skills">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220 25% 10%) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-medium">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Technical <span className="text-gradient italic">arsenal</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-serif font-bold mb-4 group-hover:text-gradient transition-colors">
                {cat.title}
              </h3>
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
    </section>
  );
};

export default SkillsSection;
