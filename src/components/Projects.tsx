import { motion } from "framer-motion";
import { Github, ExternalLink, Bot, Users, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "MindBot",
    subtitle: "Dual-Agent AI Journaling System",
    description: "Multi-agent system with empathetic Companion + analytical Historian agents for personalized mental wellness insights.",
    tech: ["GPT-4", "FastAPI", "LangChain", "Chroma DB"],
    github: "https://github.com/devamsheth0806/MindBot",
    icon: Bot,
  },
  {
    title: "TaskForge",
    subtitle: "AI Team Collaboration Platform",
    description: "Multi-agent platform with PM, Researcher, Coder, and Reviewer agents collaborating via WebSockets.",
    tech: ["React", "TypeScript", "FastAPI", "MongoDB"],
    github: "https://github.com/BalaMeghanaShivani/taskforge",
    icon: Users,
  },
  {
    title: "SplitSight",
    subtitle: "Expense Analytics Dashboard",
    description: "Intelligent expense tracking with advanced visualization for personal finance insights.",
    tech: ["Python", "Data Viz", "Analytics"],
    github: "https://github.com/BalaMeghanaShivani/Splitsight",
    icon: BarChart3,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-background rounded-xl p-6 border border-border card-hover block"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <project.icon size={24} />
                </div>
                <Github
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
