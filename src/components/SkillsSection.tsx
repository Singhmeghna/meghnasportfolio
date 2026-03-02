import { motion } from "framer-motion";
import skillsBg from "@/assets/skills-bg.jpg";

const skillCategories = [
  {
    title: "Automation",
    icon: "⚡",
    color: "from-[#6366F1] to-[#818CF8]",
    skills: ["pytest", "REST API Testing", "Postman", "SOAP UI", "Python/C# Backend Automation", "Protocol-Level Automation"],
  },
  {
    title: "Programming",
    icon: "💻",
    color: "from-[#0EA5E9] to-[#38BDF8]",
    skills: ["Python", "C#", "MySQL", "JSON", "XML", "Multithreading", "Data Validation Scripts", "Telnet", "FTP/SFTP", "Logging"],
  },
  {
    title: "CI/CD & VCS",
    icon: "🔧",
    color: "from-[#10B981] to-[#34D399]",
    skills: ["Git", "GitHub", "Jenkins", "CI/CD", "Docker", "SVN", "Jira", "Confluence", "ServiceNow"],
  },
  {
    title: "Testing",
    icon: "🧪",
    color: "from-[#F59E0B] to-[#FBBF24]",
    skills: ["Manual & Automated Testing", "Regression", "Integration", "Validation", "Stability & Reliability", "Test Planning", "Test Case Design", "Defect Tracking", "Error Handling"],
  },
  {
    title: "Analytics",
    icon: "📊",
    color: "from-[#EC4899] to-[#F472B6]",
    skills: ["Root Cause Analysis", "Performance Tracking", "Metrics Dashboards", "System Monitoring", "Quality Metrics", "Defect Prevention", "Continuous Improvement"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="skills">
      <div className="absolute top-10 -right-20 w-80 h-80 opacity-[0.06] rounded-full overflow-hidden pointer-events-none">
        <img src={skillsBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(215 25% 20%) 1px, transparent 0)`,
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
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-60`} />
              
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
