import { motion } from "framer-motion";
import { Zap, Code2, GitBranch, FlaskConical, BarChart3, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Automation",
    icon: Zap,
    color: "from-primary to-primary/60",
    skills: ["pytest", "REST API Testing", "Postman", "SOAP UI", "Python/C# Backend Automation", "Protocol-Level Automation"],
  },
  {
    title: "Programming",
    icon: Code2,
    color: "from-accent to-accent/60",
    skills: ["Python", "C#", "MySQL", "JSON", "XML", "Multithreading", "Data Validation Scripts", "Telnet", "FTP/SFTP", "Logging"],
  },
  {
    title: "CI/CD & VCS",
    icon: GitBranch,
    color: "from-primary to-accent",
    skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "SVN", "Jira", "Confluence", "ServiceNow"],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    color: "from-accent to-primary/60",
    skills: ["Manual & Automated Testing", "Regression", "Integration", "Validation", "Stability & Reliability", "Test Planning", "Test Case Design", "Defect Tracking", "Error Handling"],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    color: "from-primary/80 to-accent/80",
    skills: ["Root Cause Analysis", "Performance Tracking", "Metrics Dashboards", "System Monitoring", "Quality Metrics", "Defect Prevention", "Continuous Improvement"],
  },
  {
    title: "Methods",
    icon: Users,
    color: "from-accent/80 to-primary",
    skills: ["Agile", "Scrum", "Waterfall", "Requirements Management", "Cross-Functional Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden" id="skills">
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
          className="mb-14"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-60`} />
              
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-serif font-bold mb-3 group-hover:text-gradient transition-colors">
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
