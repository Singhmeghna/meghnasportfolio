import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Automation",
    skills: ["pytest", "REST API Testing", "Postman", "SOAP UI", "Python/C# Automation", "Protocol-Level Automation"],
  },
  {
    title: "Programming",
    skills: ["Python", "C#", "MySQL", "JSON/XML", "Multithreading", "Telnet", "FTP/SFTP"],
  },
  {
    title: "CI/CD & Tools",
    skills: ["Git", "GitHub", "Jenkins", "Docker", "Jira", "Confluence", "ServiceNow"],
  },
  {
    title: "Testing",
    skills: ["Manual & Automated", "Regression", "Integration", "Validation", "Test Planning", "Defect Tracking"],
  },
  {
    title: "Analytics",
    skills: ["Root Cause Analysis", "Performance Tracking", "Metrics Dashboards", "System Monitoring"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 bg-card" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Skills</h2>
          <div className="section-divider mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="text-lg font-serif font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors"
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
