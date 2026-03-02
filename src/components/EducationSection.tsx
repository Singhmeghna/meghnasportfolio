import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

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
    <section className="py-32 px-6 relative bg-[#F5F3FF]" id="education">
      {/* Soft indigo-tinted background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#6366F1]/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#6366F1] text-sm tracking-[0.3em] uppercase mb-3 font-medium">Background</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#818CF8] italic">growth</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-[#6366F1]/50 via-[#818CF8]/30 to-transparent w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:border-[#6366F1]/30 hover:shadow-xl hover:shadow-[#6366F1]/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Indigo gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#6366F1]/5 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center">
                    <GraduationCap size={22} className="text-[#6366F1]" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10">
                    <Award size={12} className="text-[#6366F1]" />
                    <span className="text-xs font-semibold text-[#6366F1]">GPA: {edu.gpa}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold mb-1 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#818CF8] transition-colors">
                  {edu.school}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{edu.degree}</p>

                <div className="flex items-center justify-between text-muted-foreground text-xs pt-4 border-t border-border">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
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
