import { motion } from "framer-motion";
import { FolderGit2, Server, BrainCircuit, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "File Management & Retrieval System",
    icon: Server,
    description: "Built a client-server architecture using sockets & fork-based multiprocessing to enable concurrent file transfers.",
    tags: ["Sockets", "Multiprocessing", "Client-Server", "Fork", "File Transfer"],
  },
  {
    title: "Crop Yield Prediction (ML)",
    icon: BrainCircuit,
    description: "Trained Python models (SVR, Gradient Boosting, Decision Trees) and validated accuracy via tests & visualizations.",
    tags: ["Python", "SVR", "Gradient Boosting", "Decision Trees", "Data Visualization"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12 px-6 relative" id="projects">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FolderGit2 size={14} className="text-primary" />
            <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold">Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Academic <span className="text-gradient italic">work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Hands-on projects demonstrating systems programming and machine learning skills.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary/20" />
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <project.icon size={26} className="text-primary" />
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
