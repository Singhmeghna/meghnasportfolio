import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

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
    <section className="py-32 px-6 relative" id="education">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <GraduationCap size={14} className="text-primary" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Background</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Education & <span className="text-gradient italic">growth</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap size={22} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <Award size={12} className="text-accent" />
                    <span className="text-xs font-semibold text-accent">GPA: {edu.gpa}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-gradient transition-colors">
                  {edu.school}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{edu.degree}</p>

                <div className="flex items-center justify-between text-muted-foreground text-xs pt-4 border-t border-border">
                  <span className="flex items-center gap-1"><Calendar size={11} />{edu.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={11} />{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
