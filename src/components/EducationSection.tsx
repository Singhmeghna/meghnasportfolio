import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "University of Windsor",
    degree: "Master of Applied Computing",
    gpa: "85%",
    period: "Sep 2023 – Apr 2025",
    location: "Windsor, ON",
  },
  {
    school: "SRM Institute of Science & Technology",
    degree: "B.Tech in Computer Science",
    gpa: "84%",
    period: "Jun 2017 – Jun 2021",
    location: "Chennai, India",
  },
];

const EducationSection = () => {
  return (
    <section className="py-32 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Education</h2>
          <div className="section-divider mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors"
            >
              <GraduationCap size={24} className="text-primary mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-1">{edu.school}</h3>
              <p className="text-secondary-foreground text-sm mb-3">{edu.degree}</p>
              <div className="flex items-center justify-between text-muted-foreground text-xs">
                <span>{edu.period}</span>
                <span className="text-primary font-medium">GPA: {edu.gpa}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
